import type { NextConfig } from 'next';

const isDocker = process.env.USE_DOCKER === 'true';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/img/**',
      },
    ],
  },
  ...(isDocker && {
    webpack: (config, { isServer }) => {
      config.watchOptions = {
        poll: 3000,
        aggregateTimeout: 300,
        ignored: [
          '**/node_modules',
          '**/.next',
          '**/public',
          '**/.git',
          '**/dist',
        ],
      };
      return config;
    },
  }),
};

export default nextConfig;
