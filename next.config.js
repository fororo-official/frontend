/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/setting",
        destination: "/setting/my-info",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/hooks/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
