const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/jetozdrave',
    setupNodeEvents(on, config) {
      // plugin code
    },
  },
})