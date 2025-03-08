import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    open: true,
    strictPort: true,
    historyApiFallback: true, // ✅ Ensures that all routes are served from index.html
  },
  build: {
    outDir: "dist", // ✅ Ensures correct output directory
    rollupOptions: {
      output: {
        manualChunks: undefined, // ✅ Prevents chunk splitting issues
      },
    },
  },
  PublicDIr:"Public",
});
