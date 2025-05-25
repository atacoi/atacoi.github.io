import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  root: "",
  build: {
    outDir: "../docs",
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
});
