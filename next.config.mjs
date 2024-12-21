/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "media.cnn.com",
            },
            {
                protocol: "https",
                hostname: "s.yimg.com",
            }
        ]
    }
};

export default nextConfig;
