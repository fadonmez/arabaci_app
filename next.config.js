/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i0.shbdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
