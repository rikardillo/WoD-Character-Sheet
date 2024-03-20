import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [react(), viteTsconfigPaths()],
});
