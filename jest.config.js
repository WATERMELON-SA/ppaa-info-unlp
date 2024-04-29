const testConfig = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  workerIdleMemoryLimit: '512MB',
  testTimeout: 10000,
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
};

module.exports = testConfig;
