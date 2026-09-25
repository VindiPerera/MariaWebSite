import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: allow opening the dev server from this machine's network IP, not just localhost.
  allowedDevOrigins: ["169.254.198.95"],
};

export default nextConfig;
