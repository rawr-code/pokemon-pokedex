const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>'],
  // testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  modulePathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/.next/',
    '<rootDir>/src/app',
  ],

  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/index.{ts,tsx}',
    '!**/*.types.ts',
    '!**/*.d.ts',
    '!**/*.config.{ts,tsx,js}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],

  snapshotResolver: './.jest/jest.snapshot-resolver.js',
}

module.exports = createJestConfig(config)
