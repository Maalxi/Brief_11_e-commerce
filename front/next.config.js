/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost:',
          port: '8001',
          pathname: '/uploads/images/**',
        },
      ],
    },
  }
