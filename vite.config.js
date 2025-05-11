import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config(); 
import path from "path";
export default defineConfig({
  define: {
    "import.meta.env.REACT_APP_API_URL": JSON.stringify(
      process.env.BACKEND_BASE_URL
    ),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
  },
  plugins: [react()],
});
