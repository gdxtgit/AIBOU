import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/AIBOU" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/AIBOU/" : "",
};

export default nextConfig;
