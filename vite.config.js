import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pielMixta: resolve(__dirname, "piel-mixta.html"),
      },
    },
  },
});
