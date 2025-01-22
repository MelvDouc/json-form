import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "$": join(__dirname, "src")
    }
  },
  server: {
    port: 8000,
    allowedHosts: ["example.local", "melvdouc.local"]
  },
  base: "/json-form/"
});