export type Sex = "male" | "female";
export type Goal = "cut" | "maintain" | "gain";
export type ActivityLevel = "minimal" | "low" | "moderate" | "high" | "veryHigh";

export type CalculatorFormValues = {
  sex: Sex;
  age: string;
  heightCm: string;
  weightKg: string;
  activity: ActivityLevel;
  goal: Goal;
};

export type CalculatorParsedInput = {
  sex: Sex;
  age: number;
  heightCm: number;
  weightKg: number;
  activity: ActivityLevel;
  goal: Goal;
};

export type CalculatorErrors = Partial<
  Record<"age" | "heightCm" | "weightKg", string>
>;

export type CalculatorResult = {
  bmi: number;
  bmiCategory: string;
  idealWeight: number;
  effectiveWeight: number;
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  fat: number;
  carbs: number;
  waterLiters: number;
  fiber: number;
  activityCoefficient: number;
};

export const ACTIVITY_COEFFICIENTS: Record<ActivityLevel, number> = {
  minimal: 1.2,
  low: 1.375,
  moderate: 1.55,
  high: 1.725,
  veryHigh: 1.9,
};

const GOAL_CALORIE_FACTORS: Record<Goal, number> = {
  cut: 0.85,
  maintain: 1,
  gain: 1.1,
};

const PROTEIN_BASE_FACTORS: Record<Goal, number> = {
  cut: 1.8,
  maintain: 1.6,
  gain: 1.8,
};

const FAT_BASE_FACTORS: Record<Goal, number> = {
  cut: 0.8,
  maintain: 0.9,
  gain: 1,
};

const PROTEIN_MIN_FACTORS: Record<Goal, number> = {
  cut: 1.4,
  maintain: 1.4,
  gain: 1.6,
};

const FAT_MIN_FACTOR = 0.6;

function roundToOneDecimal(value: number) {
  return Math.round(value * 10) / 10;
}

function roundToNearestTen(value: number) {
  return Math.round(value / 10) * 10;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function parseFieldValue(value: string) {
  const normalized = value.replace(",", ".").trim();

  if (!normalized) {
    return Number.NaN;
  }

  return Number.parseFloat(normalized);
}

export function validateCalculatorForm(values: CalculatorFormValues): {
  errors: CalculatorErrors;
  parsedValues?: CalculatorParsedInput;
} {
  const age = parseFieldValue(values.age);
  const heightCm = parseFieldValue(values.heightCm);
  const weightKg = parseFieldValue(values.weightKg);

  const errors: CalculatorErrors = {};

  if (!Number.isFinite(age) || age < 14 || age > 100) {
    errors.age = "Введите возраст от 14 до 100 лет";
  }

  if (!Number.isFinite(heightCm) || heightCm < 130 || heightCm > 230) {
    errors.heightCm = "Введите рост от 130 до 230 см";
  }

  if (!Number.isFinite(weightKg) || weightKg < 35 || weightKg > 300) {
    errors.weightKg = "Введите вес от 35 до 300 кг";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    errors,
    parsedValues: {
      sex: values.sex,
      age: Math.round(age),
      heightCm: Math.round(heightCm),
      weightKg,
      activity: values.activity,
      goal: values.goal,
    },
  };
}

export function getBmiCategory(bmi: number) {
  if (bmi < 18.5) {
    return "Недостаточная масса";
  }

  if (bmi < 25) {
    return "Норма";
  }

  if (bmi < 30) {
    return "Избыточная масса";
  }

  if (bmi < 35) {
    return "Ожирение I";
  }

  if (bmi < 40) {
    return "Ожирение II";
  }

  return "Ожирение III";
}

export function calculateCalculatorResult(
  input: CalculatorParsedInput,
): CalculatorResult {
  const heightM = input.heightCm / 100;
  const bmiRaw = input.weightKg / (heightM * heightM);
  const heightInches = input.heightCm / 2.54;

  const idealWeightRaw =
    input.sex === "male"
      ? 50 + 2.3 * (heightInches - 60)
      : 45.5 + 2.3 * (heightInches - 60);

  const excess = input.weightKg - idealWeightRaw;

  let effectiveWeightRaw = input.weightKg;

  if (input.weightKg > idealWeightRaw && bmiRaw > 25) {
    const coefficient =
      bmiRaw >= 35 ? 0.4 : 1 - ((bmiRaw - 25) / 10) * 0.6;

    effectiveWeightRaw = idealWeightRaw + excess * coefficient;
    effectiveWeightRaw = clamp(effectiveWeightRaw, idealWeightRaw, input.weightKg);
  }

  const bmrRaw =
    input.sex === "male"
      ? 10 * effectiveWeightRaw + 6.25 * input.heightCm - 5 * input.age + 5
      : 10 * effectiveWeightRaw + 6.25 * input.heightCm - 5 * input.age - 161;

  const activityCoefficient = ACTIVITY_COEFFICIENTS[input.activity];
  const tdeeRaw = bmrRaw * activityCoefficient;
  const targetCaloriesRaw = tdeeRaw * GOAL_CALORIE_FACTORS[input.goal];
  const minCalories = input.sex === "female" ? 1200 : 1400;
  const targetCalories = roundToNearestTen(Math.max(targetCaloriesRaw, minCalories));

  let proteinGrams = PROTEIN_BASE_FACTORS[input.goal] * effectiveWeightRaw;
  let fatGrams = FAT_BASE_FACTORS[input.goal] * effectiveWeightRaw;

  const proteinMin = PROTEIN_MIN_FACTORS[input.goal] * effectiveWeightRaw;
  const fatMin = FAT_MIN_FACTOR * effectiveWeightRaw;
  const carbsComfortMin = activityCoefficient <= 1.375 ? 100 : 130;

  const calculateCarbs = (protein: number, fat: number) =>
    (targetCalories - protein * 4 - fat * 9) / 4;

  let carbsGrams = calculateCarbs(proteinGrams, fatGrams);

  if (carbsGrams < carbsComfortMin) {
    fatGrams = fatMin;
    carbsGrams = calculateCarbs(proteinGrams, fatGrams);
  }

  if (carbsGrams < carbsComfortMin) {
    proteinGrams = proteinMin;
    carbsGrams = calculateCarbs(proteinGrams, fatGrams);
  }

  carbsGrams = Math.max(carbsGrams, 0);

  return {
    bmi: roundToOneDecimal(bmiRaw),
    bmiCategory: getBmiCategory(bmiRaw),
    idealWeight: roundToOneDecimal(idealWeightRaw),
    effectiveWeight: roundToOneDecimal(effectiveWeightRaw),
    bmr: Math.round(bmrRaw),
    tdee: Math.round(tdeeRaw),
    targetCalories,
    protein: Math.round(proteinGrams),
    fat: Math.round(fatGrams),
    carbs: Math.round(carbsGrams),
    waterLiters: roundToOneDecimal(input.weightKg * 0.03),
    fiber: Math.round(targetCalories * 0.014),
    activityCoefficient,
  };
}
