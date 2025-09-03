/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aps-website', // replace with your repo name
  assetPrefix: '/aps-website/',
};

export default nextConfig;
