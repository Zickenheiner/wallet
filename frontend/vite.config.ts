import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mon App",
        short_name: "MonApp",
        start_url: "/",
        display: "standalone",
        background_color: "#d41111",
        theme_color: "#111111",
        icons: [
          {
            src: "/binance.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/binance.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
