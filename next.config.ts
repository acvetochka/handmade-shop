/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    emotion: true,
  },
  experimental: {
    // appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "178.62.208.241",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
