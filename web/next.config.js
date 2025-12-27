/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cfcs.pku.edu.cn',
      },
      {
        protocol: 'https',
        hostname: 'nbdhhzh.github.io',
      },
      {
        protocol: 'https',
        hostname: 'tongclass.ac.cn',
      },
    ],
  },
};

module.exports = nextConfig;
