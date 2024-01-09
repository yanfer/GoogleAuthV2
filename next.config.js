/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'uniim1.shutterfly.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
