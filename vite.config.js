import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      "about-img": "/src/assets/images/about-img",
      "faq-img": "/src/assets/images/faq-img",
      "hero-img": "/src/assets/images/hero-img",
      "slider-img": "/src/assets/images/slider-img",
    },
  },
  // base: "/ape-nft/",
  build: {
    sourcemap: true,
  },
});
