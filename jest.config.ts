import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    coverageReporters: ['json-summary', 'lcov', 'text', 'text-summary']
  };
};
