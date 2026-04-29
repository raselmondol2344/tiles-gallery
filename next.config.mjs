/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        
      },
      {
      protocol: 'https',
      hostname: 'simpolo-web.s3.ap-south-1.amazonaws.com',
    },
     
     
    ],
  },
};


export default nextConfig;
