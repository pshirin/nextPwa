/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75],
  },
  paths: {
    "@/*": ["./*"],
    "@/components": ["./components"],
    "@/utils": ["./utils"],
    "@/hooks": ["./hooks"],
    "@/public": ["./public"],
    "@/config": ["./config"],
    "@/types": ["./types"],
    "@/svg": ["./assets/svg"],
  },
};

module.exports = nextConfig;
