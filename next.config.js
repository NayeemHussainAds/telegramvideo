/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blogger',
        destination: 'https://t.co/oST3ruUh2B',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
