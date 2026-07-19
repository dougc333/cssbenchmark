import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: "results/playwright.json" }]],
  use: {
    baseURL: "http://127.0.0.1:4175",
    browserName: "chromium",
    deviceScaleFactor: 1,
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 4175",
    url: "http://127.0.0.1:4175",
    reuseExistingServer: false,
  },
});
