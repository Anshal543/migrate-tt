import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  eslint:{
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  }
  ,
  images:{
    unoptimized: true, // Disable image optimization
  }
};

export default nextConfig;
