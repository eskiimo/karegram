/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "karegram.onrender.com", port: "" },
    ],
    domains: ["localhost", "onrender", "karegram.onrender.com"],

    formats: ["image/avif", "image/webp", "**"],
  },
  env: {
    // API: "http://localhost:5000",
    API: "https://karegram.onrender.com",
  },
};

module.exports = nextConfig;
