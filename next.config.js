/** @type {import('next').NextConfig} */
const nextConfig = {
  paths: {
    "@/*": ["./*"],
    "@/components": ["./components"],
    "@/utils": ["./utils"],
    "@/hooks": ["./hooks"],
    "@/public": ["./public"],
    "@/types": ["./types"],
  },
};

module.exports = nextConfig;
