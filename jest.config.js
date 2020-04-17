module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  collectCoverage: true,
  testPathIgnorePatterns: ["<rootDir>/src/test.ts"],

  moduleNameMapper: {
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/src/tsconfig.spec.json",
      esModuleInterop: true,
    },
  },
};
