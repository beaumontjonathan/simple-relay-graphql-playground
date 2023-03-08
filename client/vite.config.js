import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";

export default defineConfig(() => ({
  server: {
    port: 4007,
    host: "127.0.0.1"
  },
  plugins: [
    react(),
    relay
  ]
}));
