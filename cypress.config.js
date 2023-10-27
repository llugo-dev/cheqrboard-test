const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      'cypress/integration/tests/*.js'
    ],
    projectId: "9j7yvc",
    env: {
      CYPRESS_RECORD_KEY: "d2b61efd-f743-460b-8dd5-2e09128efc1b"
    }
  },
});
