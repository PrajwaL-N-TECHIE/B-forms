import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-firebase": ["firebase/app", "firebase/firestore", "firebase/auth"],
          "vendor-motion": ["framer-motion"],
          "vendor-pdf": ["jspdf"],
        },
      },
    },
  },
});
