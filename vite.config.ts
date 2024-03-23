import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      // output: {
      //   preserveModules: true,
      //   preserveModulesRoot: "src",
      // },
    },
  },
  plugins: [dts()],
});
