const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      baseUrl: 'https://qa-challenge.codesubmit.io/',
    }
  },

  chromeWebSecurity: false,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: true,
    html: true,
    json: false,
  },
});