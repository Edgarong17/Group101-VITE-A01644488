import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    tags: [
      { name: "frontend", description: "Tests written for frontend" },
      { name: "backend", description: "Tests written for backend" },
      {
        name:"db",
        description: "Tests written for database",
        timeout: 60_000,
        priority: 1,
      },
    ],
    coverage: {
      include: ['src/**/*'],
      exclude: ['vite.*.ts', '**/*.config.*', '**/*.test.{ts, tsx, js, jsx}', '**/coverage/**', 'src/assets/**', 'src/*.css'],
    },
    environment: "jsdom",
  },
});
