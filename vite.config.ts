// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  const commonConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    }
  };

  if (command === "serve") {
    return {
      ...commonConfig,
      root: ".",
      build: {
        rollupOptions: {
          input: resolve(__dirname, "src/main.tsx")
        }
      }
    };
  }

  return {
    ...commonConfig,
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "DecagonUI",
        fileName: (format) => `index.${format}.js`,
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["react", "react-dom", "react-router", "@emotion/react", "@emotion/styled"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-router": "ReactRouter",
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
