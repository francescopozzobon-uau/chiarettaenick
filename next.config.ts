import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/partecipazione",
        destination: "/partecipazioni",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
