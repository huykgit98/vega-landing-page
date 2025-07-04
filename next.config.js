/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/functions/:path*',
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}/functions/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
