import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    svgr(),
    Sitemap({
      hostname: "https://lyzanderandrylie.github.io/portfolio",
      basePath: "/portfolio",
      exclude: ["/googleb8bc8e60e7172b10"],
    }),
  ],
  base: "/portfolio/",
});
