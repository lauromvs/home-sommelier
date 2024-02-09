/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.casadabebida.com.br',
      },
    ],
  },
}

export default nextConfig
