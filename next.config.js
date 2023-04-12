/** @type {import('next').NextConfig} */
const GITHUB_PAGE_URL = 'https://you-hi.github.io/youhi-web-fe';

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? GITHUB_PAGE_URL : '',
};

module.exports = nextConfig;
