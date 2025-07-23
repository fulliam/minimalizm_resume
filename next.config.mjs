// USE .nojekyll file for github pages deployment in out folder

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'minimalizm_resume';
const basePath = isProd ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: { 
    unoptimized: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;