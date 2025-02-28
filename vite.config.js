import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Ensures correct output directory
    rollupOptions: {
      output: {
        manualChunks: undefined, // ✅ Prevents chunk splitting issues
      },
    },
  },
});
