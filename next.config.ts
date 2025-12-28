import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-eu-central-2.ionoscloud.com',
        pathname: '/bestellgastro/**',
      },
    ],
  },
};

export default nextConfig;
