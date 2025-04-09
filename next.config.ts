const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
