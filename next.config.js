/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/callback',
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/auth-confirm`,
      },
      {
        source: '/reset/callback',
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/auth-confirm`,
      },
    ];
  },
};

module.exports = nextConfig;
