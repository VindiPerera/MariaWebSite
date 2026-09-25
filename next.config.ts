import path from "node:path";
import type { NextConfig } from "next";
import { locations } from "./src/lib/locations";

// This app lives inside the cloud panel repo, which has its own package-lock.json;
// pin the root to this folder so Next.js doesn't pick the parent project.
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
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
