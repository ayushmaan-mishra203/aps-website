/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 enables static export
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: "/aps-website", // 👈 replace with your repo name
  assetPrefix: "/aps-website/",
};

export default nextConfig;
