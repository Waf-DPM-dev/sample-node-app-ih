module.exports = {
  // Use a browser-like environment for client tests
  testEnvironment: 'jsdom',

  // Make sure the setup file (mocks) loads before every test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Coverage output that Sonar will read
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],

  // Match both *.test.js and *.spec.js anywhere
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};

