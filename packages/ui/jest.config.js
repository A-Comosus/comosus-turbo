const defaultConfig = require('@comosus/config-jest/next');

module.exports = {
  ...defaultConfig,
  rootDir: '.',
  moduleNameMapper: {
    ...defaultConfig.moduleNameMapper,
    '^@src/(.*)$': ['<rootDir>/src/$1'],
  },
};
