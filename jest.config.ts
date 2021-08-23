/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/presentation/protocols'],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/presentation/protocols/",
    "<rootDir>/src/presentation/controllers/signup/signup-protocols.ts"
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
