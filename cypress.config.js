const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "",
  numTestsKeptInMemory: 0,
  env: {
    IsCypressHandlingNewTabs: true,
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents (on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "./cypress/e2e",
  },
});
