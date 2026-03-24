import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[62vh] items-center">
      <Container>
        <div className="soft-card mx-auto max-w-3xl rounded-[28px] px-6 py-10 text-center md:px-10 md:py-14">
          <div className="space-y-4">
            <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
              Ошибка 404
            </span>
            <h1 className="h1-text text-text-primary">Страница не найдена</h1>
            <p className="body-lg-text text-text-secondary">
              Возможно, адрес изменился или страница ещё не была опубликована.
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">На главную</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculator">Открыть калькулятор</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
