/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "onrender", "karegram.onrender.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    // API: "http://localhost:5000",
    API: "https://karegram.onrender.com",
  },
};

module.exports = nextConfig;
