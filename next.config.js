/** @type {import('next').NextConfig} */

module.exports = {
  // next.js config
  reactStrictMode: true,

  env: {
    // API: "http://localhost:8000",
    API: "https://54.81.42.166:8000",
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
