/** @type {import('next').NextConfig} */
const GITHUB_PAGE_URL = 'https://you-hi.github.io/youhi-web-fe';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? GITHUB_PAGE_URL : '',
  images: isProd
    ? {
        loader: 'default',
        loaderFile: './imageLoader.js',
      }
    : {
        loader: 'default',
        loaderFile: '',
      },
};

module.exports = nextConfig;
