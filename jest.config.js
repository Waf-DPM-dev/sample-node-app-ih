module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['./jest.setup.js']
};
