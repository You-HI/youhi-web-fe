/** @type {import('next').NextConfig} */
const GITHUB_PAGE_URL = 'https://you-hi.github.io/youhi-web-fe';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? GITHUB_PAGE_URL : '',
  images: isProd ? {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  } : undefined
};

module.exports = nextConfig;
