const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTwin(nextConfig);
