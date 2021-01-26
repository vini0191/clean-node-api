export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/presentation/protocols/index.ts',
    '!<rootDir>/src/presentation/controllers/signup/signup-protocols.ts',
    '!<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  watchPathIgnorePatterns: ['globalConfig'],
};
