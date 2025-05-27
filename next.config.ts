import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BLOB_HOSTNAME || "**.public.blob.vercel-storage.com",
      },
    ],
  },
};
export default nextConfig;
