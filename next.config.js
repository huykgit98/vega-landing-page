/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/auth/callback', destination: '/api/auth-confirm' },
      { source: '/reset/callback', destination: '/api/auth-confirm' },
    ];
  },
};
module.exports = nextConfig;
