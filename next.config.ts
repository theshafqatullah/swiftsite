import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.pravatar.cc" },
      { hostname: "images.unsplash.com" },
      { hostname: "img.logoipsum.com" },
      { hostname: "cdn.jsdelivr.net" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "images.stripeassets.com" },
    ],
  },
};

export default nextConfig;
