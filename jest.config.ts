/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/presentation/protocols'],
  //find a better way to solve the problem to test coverage problem
  coveragePathIgnorePatterns: [
    "<rootDir>/src/presentation/protocols/",
    "<rootDir>/src/presentation/controllers/signup/signup-protocols.ts",
    "<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts"
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
