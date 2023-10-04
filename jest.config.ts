import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['\\.styles\\.tsx$', '\\.stories\\.tsx$']
};

export default config;
