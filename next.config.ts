import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.amitdharaniya.com",
      },
    ],
  },
};

export default nextConfig;
