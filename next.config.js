/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};
