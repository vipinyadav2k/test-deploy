/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "https://www.test-deploy-xi-eight.vercel.app/:path*",
            destination: "https://test-deploy-xi-eight.vercel.app/:path*",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
