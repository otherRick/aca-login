import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['\\.styles\\.tsx$', '\\.stories\\.tsx$', '\\.api\\.ts$']
};

export default config;
