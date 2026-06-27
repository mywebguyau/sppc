import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/news", destination: "/ministries", permanent: false },
      { source: "/news/:slug", destination: "/ministries", permanent: false },
      { source: "/media", destination: "/ministries", permanent: false },
    ];
  },
};

export default nextConfig;
