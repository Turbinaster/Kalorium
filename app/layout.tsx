import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { assetPaths } from "@/data/assets";
import { publicAssetPathToSrc, resolveOptionalPublicAsset } from "@/lib/assets";
import { createRootMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconHref = publicAssetPathToSrc(assetPaths.publicFavicon);
  const headerLogoSrc = resolveOptionalPublicAsset(assetPaths.brandLogo);

  return (
    <html lang="ru">
      <head>
        <link rel="icon" href={faviconHref} type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans text-text-primary antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <a
            className="sr-only absolute left-4 top-4 z-50 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-soft focus:not-sr-only focus:outline-none"
            href="#content"
          >
            Перейти к содержанию
          </a>
          <SiteHeader logoSrc={headerLogoSrc} />
          <main id="content" className="flex-1 pt-[var(--header-height)]">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
