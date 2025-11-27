import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single JS file
        assetFileNames: "assets/[name].[hash][extname]",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
});
