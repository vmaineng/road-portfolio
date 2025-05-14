import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mapbox-gl': 'maplibre-gl' 
    };
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' api.mapbox.com",
              "style-src 'self' 'unsafe-inline'",
              "connect-src 'self' api.mapbox.com events.mapbox.com",
              `img-src 'self' data: blob: *.mapbox.com`,
            ].join('; ')
          }
        ]
      }
    ]
  },
};

export default nextConfig;
