import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c99c045ddb654453bb5af48e155dc1f6.r2.dev",
      },
    ],
  },
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.100.20"],
};

export default nextConfig;
