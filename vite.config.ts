import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import manifestForPlugin from "./manifest.js";

export default defineConfig({
  base: "/",
  // @ts-ignore
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    port: 3001,
    open: true,
  },
});
