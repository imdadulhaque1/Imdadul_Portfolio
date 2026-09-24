import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Imdadul Haque — Full Stack Developer",
    short_name: "Imdadul Haque",
    description:
      "Portfolio of Imdadul Haque, a passionate full stack developer specializing in React, Next.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0c29",
    theme_color: "#1a1442",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
