const testConfig = require('../../jest.config.js');

module.exports = {
  ...testConfig,
  testRegex: 'dist/test/e2e/.*.spec.js',
  rootDir: '../../',
};
