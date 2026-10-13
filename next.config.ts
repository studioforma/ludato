import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Inline the (small) Tailwind CSS into the HTML so it does not block the
  // first paint as a separate request (PageSpeed: render-blocking requests).
  experimental: {
    inlineCss: true,
  },
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
