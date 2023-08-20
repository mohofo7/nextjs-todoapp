import { defineConfig } from "cypress";
const { pa11y, prepareAudit } = require("@cypress-audit/pa11y");


export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // @ts-ignore
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        pa11y: pa11y(),
      });
    },
  },
});
