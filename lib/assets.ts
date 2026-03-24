import { existsSync, statSync } from "node:fs";
import path from "node:path";

const PUBLIC_PREFIX = "public/";

function normalizeAssetPath(assetPath: string) {
  return assetPath.replace(/\\/g, "/");
}

export function publicAssetPathToSrc(assetPath: string) {
  const normalizedPath = normalizeAssetPath(assetPath);

  if (!normalizedPath.startsWith(PUBLIC_PREFIX)) {
    throw new Error(`Expected a public asset path, received "${assetPath}".`);
  }

  return `/${normalizedPath.slice(PUBLIC_PREFIX.length)}`;
}

export function resolveOptionalPublicAsset(assetPath: string) {
  const normalizedPath = normalizeAssetPath(assetPath);

  if (!normalizedPath.startsWith(PUBLIC_PREFIX)) {
    return null;
  }

  const relativePublicPath = normalizedPath.slice(PUBLIC_PREFIX.length);
  const absolutePath = path.join(
    process.cwd(),
    "public",
    ...relativePublicPath.split("/"),
  );

  if (!existsSync(absolutePath)) {
    return null;
  }

  const src = publicAssetPathToSrc(normalizedPath);
  const version = Math.round(statSync(absolutePath).mtimeMs);

  return `${src}?v=${version}`;
}
