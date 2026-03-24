import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/media/**",
      },
      {
        pathname: "/brand/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
