const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@src/(.*)$': ['<rootDir>/$1'],
  },
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.module.ts',
    '<rootDir>/**/*.resolver.ts',
    '<rootDir>/**/*.service.ts',
  ],
  testEnvironment: 'node',
  verbose: true,
};

module.exports = config;
