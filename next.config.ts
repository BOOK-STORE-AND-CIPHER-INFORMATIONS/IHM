import type { NextConfig } from 'next';
import { BASE_PATH } from 'services/base';
import webpack from 'webpack';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: `${BASE_PATH}`,
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    const envs: Record<string, string> = {};
    Object.keys(process.env).forEach((env) => {
      if (env.startsWith('NEXT_PUBLIC_')) {
        envs[env] = process.env[env] as string;
      }
    });
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env': JSON.stringify(envs),
        })
      );
    }
    return config;
  },
};

export default nextConfig;
