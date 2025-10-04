/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [25, 50, 75],
  },
};

module.exports = nextConfig;
