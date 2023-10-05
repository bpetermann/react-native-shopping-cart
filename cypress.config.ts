import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      host: '/',
    },
    baseUrl: 'http://localhost:19006',
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    viewportHeight: 890,
    viewportWidth: 481,
  },
});
