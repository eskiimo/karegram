/** @type {import('next').NextConfig} */

module.exports = {
  // next.js config
  reactStrictMode: true,

  env: {
    // API: "http://localhost:5000",
    API: "https://karegram.onrender.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
