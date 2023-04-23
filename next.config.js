/** @type {import('next').NextConfig} */
const REPO = 'youhi-web-fe';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? `/${REPO}/` : '',
  basePath: isProd ? `/${REPO}` : '/',
  reactStrictMode: true,
};

module.exports = nextConfig;
