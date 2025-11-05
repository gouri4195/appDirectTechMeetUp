const { defineConfig } = require('cypress');

module.exports = defineConfig({
    requestTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      return config;
    },
  }
});
