/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export to ./out, served by Firebase Hosting (see firebase.json).
  output: 'export',
  images: { unoptimized: true },
}
module.exports = nextConfig
