/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gateway.ipfscdn.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
