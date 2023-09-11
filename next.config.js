/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    API: "http://localhost:5000",
    // API: "https://karegram.onrender.com",
  },
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "drive.google.com", port: "" },
    ],
    domains: ["localhost", "drive.google.com"],

    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
