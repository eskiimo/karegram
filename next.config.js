/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    // API: "http://localhost:5000",
    API: "https://karegram.onrender.com",
  },
  images: {
    domains: ["karegram.onrender.com", "localhost"],

    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
