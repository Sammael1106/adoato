/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.hdr$/i,
        loader: 'url-loader'
    });

    return config;
  },
  staticPageGenerationTimeout: 120
}

module.exports = nextConfig
