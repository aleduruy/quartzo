module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)(spec)?(.*).js'],
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  reporters: ['jest-dot-reporter'],
};
