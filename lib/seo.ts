import type { Metadata } from "next";

import { assetPaths } from "@/data/assets";
import { pageMeta, type PagePath } from "@/data/page-meta";
import { SITE_LOCALE, SITE_NAME, SITE_URL } from "@/data/site";
import { publicAssetPathToSrc } from "@/lib/assets";

const metadataBase = new URL(SITE_URL);
const iconDescriptor = {
  url: publicAssetPathToSrc(assetPaths.publicFavicon),
  type: "image/svg+xml",
};

function resolveCanonical(path: PagePath) {
  return path === "/" ? "/" : path;
}

function resolveAbsoluteUrl(path: PagePath) {
  return new URL(resolveCanonical(path), metadataBase).toString();
}

export function createMetadata(path: PagePath = "/"): Metadata {
  const page = pageMeta[path];
  const canonical = resolveCanonical(path);
  const absoluteUrl = resolveAbsoluteUrl(path);

  return {
    metadataBase,
    title: page.title,
    description: page.description,
    applicationName: SITE_NAME,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: absoluteUrl,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
    },
    icons: {
      icon: [iconDescriptor],
      shortcut: [iconDescriptor],
    },
  };
}

export function createRootMetadata(): Metadata {
  return createMetadata("/");
}
