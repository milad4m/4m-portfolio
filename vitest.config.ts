import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs"
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    // alias: {
    //     '@': '/path/to/project/root', // Adjust this to your actual project path
    //   },
  }
});
