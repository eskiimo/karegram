/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    // API: "http://localhost:5000",
    API: "https://karegram.onrender.com",
  },
  images: {
    domains: ["karegram.onrender.com"],

    // formats: ["image/avif", "**"],
  },
};

module.exports = nextConfig;
