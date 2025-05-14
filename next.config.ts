import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mapbox-gl': 'maplibre-gl' 
    };
    return config;
  },
};

export default nextConfig;
