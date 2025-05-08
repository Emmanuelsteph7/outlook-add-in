import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "./ssl/localhost.key",
      cert: "./ssl/localhost.crt",
    },
  },
  preview: {
    port: 5173,
  },
});
