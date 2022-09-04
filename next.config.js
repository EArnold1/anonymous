/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["ershemug.sirv.com"]
  }
}

module.exports = nextConfig
