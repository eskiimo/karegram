/** @type {import('next').NextConfig} */

module.exports = {
  // next.js config
  reactStrictMode: true,

  env: {
    // API: "https://localhost:8000",
    API: "http://3.94.83.186:8000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};
