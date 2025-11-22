import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    domains: ["images.unsplash.com", "img.icons8.com", "placehold.co"],
  },
};

export default nextConfig;
