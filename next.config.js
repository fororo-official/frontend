/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/setting',
        destination: '/setting/my-info',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
