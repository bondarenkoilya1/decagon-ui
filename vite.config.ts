import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
      root: ".",
      build: {
        rollupOptions: {
          input: resolve(__dirname, "src/main.tsx")
        }
      }
    };
  }

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "DecagonUI",
        fileName: (format) => `index.${format}.js`,
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["react", "react-dom", "react-router-dom", "@emotion/react", "@emotion/styled"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM",
            "@emotion/react": "EmotionReact",
            "@emotion/styled": "EmotionStyled"
          }
        }
      },
      outDir: "dist",
      emptyOutDir: true
    }
  };
});
