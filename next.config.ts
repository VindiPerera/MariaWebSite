import type { NextConfig } from "next";
import { locations } from "./src/lib/locations";

const nextConfig: NextConfig = {
  // Dev only: allow opening the dev server from this machine's network IP, not just localhost.
  allowedDevOrigins: ["169.254.198.95"],
  // Sri Lankan city pages moved from /pos-system/<city> to /pos-system/sri-lanka/<city>.
  async redirects() {
    return locations.map((l) => ({
      source: `/pos-system/${l.slug}`,
      destination: `/pos-system/sri-lanka/${l.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
