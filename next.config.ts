import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BLOB_HOSTNAME || "**.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: process.env.BLOB_HOSTNAME || "**.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**"
      }
    ],
  },
};
export default nextConfig;
