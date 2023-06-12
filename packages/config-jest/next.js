module.exports = {
  resetMocks: true,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@comosus/config-jest/jest.setup.js"],
  testMatch: ["<rootDir>/**/**/*.spec.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  coveragePathIgnorePatterns: [],
};
