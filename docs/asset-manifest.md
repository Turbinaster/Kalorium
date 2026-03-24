# Asset Manifest

Этот документ фиксирует будущие медиафайлы для сайта «Калориум», чтобы их можно было подключать без переименований и хаотичной структуры.

Правило для favicon: используется только SVG. Основной корневой favicon сайта должен лежать в `public/favicon.svg` и отдаваться по адресу `/favicon.svg`. Файл `app/icon.svg` сохраняется для совместимости с Next.js. Не создавать `.ico`, `.png` и `apple-touch-icon`, пока это отдельно не требуется.

| file path | purpose | format | exact recommended size | page / component | placement instructions |
| --- | --- | --- | --- | --- | --- |
| `app/icon.svg` | favicon для Next.js metadata routing | svg | vector, viewport 512x512 | global | already created in `app/` |
| `public/favicon.svg` | явный корневой favicon сайта | svg | vector, viewport 512x512 | global | put into `public/` |
| `public/brand/logo.svg` | логотип сайта для шапки / header brand | svg | vector, recommended artboard 512x128 or similar horizontal logo | global header | put into `public/brand/` |
| `public/media/home/hero-app-main.webp` | главный hero-скрин приложения | webp | 1080x2340 | home hero | put into `public/media/home/` |
| `public/media/home/screen-dashboard.webp` | экран суточной нормы и остатка калорий | webp | 1080x2340 | home screenshots preview | put into `public/media/home/` |
| `public/media/home/screen-macros-water.webp` | экран БЖУ, клетчатки и воды | webp | 1080x2340 | home screenshots preview | put into `public/media/home/` |
| `public/media/home/screen-diary.webp` | экран дневника питания | webp | 1080x2340 | home screenshots preview | put into `public/media/home/` |
| `public/media/home/screen-graphs.webp` | экран графиков и прогресса | webp | 1080x2340 | home screenshots preview | put into `public/media/home/` |
| `public/media/photo/hero-photo-analysis.webp` | основной экран функции подсчёта по фото | webp | 1080x2340 | photo page hero | put into `public/media/photo/` |
| `public/media/diary/hero-diary.webp` | основной экран дневника питания | webp | 1080x2340 | diary page hero | put into `public/media/diary/` |
