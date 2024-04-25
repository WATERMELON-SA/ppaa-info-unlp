const testConfig = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  workerIdleMemoryLimit: '512MB',
  testTimeout: 10000,
};

module.exports = testConfig;
