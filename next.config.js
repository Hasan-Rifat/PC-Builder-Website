/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "www.startech.com.bd"], // Add the hostname here
  },
};

module.exports = nextConfig;
