import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MariaPoS — POS System Sri Lanka",
    short_name: "MariaPoS",
    description: "Offline-first POS system and billing software for Sri Lankan shops.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c62828",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
