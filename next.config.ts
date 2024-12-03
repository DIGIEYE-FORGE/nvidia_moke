import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.nvidia.com"],
  },
  output: "standalone",
};

export default nextConfig;
