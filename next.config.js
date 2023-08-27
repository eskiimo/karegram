/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    API: "http://localhost:5000",
  },
};

module.exports = nextConfig;
