/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint hataları için build'i durdurmayı devre dışı bırak
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 