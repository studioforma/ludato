import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // The pneuservis page shipped at /sluzby/pneuservis before the city was
      // added to every service URL. It was live, so keep the old address working.
      {
        source: "/sluzby/pneuservis",
        destination: "/sluzby/pneuservis-bratislava",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
