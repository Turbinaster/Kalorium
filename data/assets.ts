export const assetPaths = {
  appIcon: "app/icon.svg",
  publicFavicon: "public/favicon.svg",
  brandLogo: "public/brand/logo.svg",
  homeHeroMain: "public/media/home/hero-app-main.webp",
  homeScreenDashboard: "public/media/home/screen-dashboard.webp",
  homeScreenMacrosWater: "public/media/home/screen-macros-water.webp",
  homeScreenDiary: "public/media/home/screen-diary.webp",
  homeScreenGraphs: "public/media/home/screen-graphs.webp",
  photoHeroMain: "public/media/photo/hero-photo-analysis.webp",
  diaryHeroMain: "public/media/diary/hero-diary.webp",
} as const;

export const homeScreenAssetsByVariant = {
  dashboard: assetPaths.homeScreenDashboard,
  macros: assetPaths.homeScreenMacrosWater,
  diary: assetPaths.homeScreenDiary,
  graphs: assetPaths.homeScreenGraphs,
} as const;
