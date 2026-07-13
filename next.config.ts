import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rvrjcce.ac.in",
        pathname: "/ximages/**",
      },
    ],
  },
};

export default nextConfig;
