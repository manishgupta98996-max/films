import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.100.20"],
};

export default nextConfig;
