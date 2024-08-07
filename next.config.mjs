/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'sourhttps',
        port: '',
        pathname: '/**',
      }
    ]
  }
}
export default nextConfig