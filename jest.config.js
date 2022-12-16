// module.exports = {
//   roots: ['<rootDir>/src'],
//   collectCoverageFrom: [
//     '<rootDir>/src/**/*.ts',
//     '!<rootDir>/src/domain',
//     '!<rootDir>/src/presentation/global',
//     '!<rootDir>/src/assets',
//     '!<rootDir>/src/styles',
//     '!<rootDir>/src/framework/server/**',
//     '!<rootDir>/src/**/*-ports.ts',
//     '!**/ports/**',
//     '!**/test/**',
//     '!**/config/**',
//   ],
//   coverageDirectory: 'coverage',
//   transform: {
//     '.+\\.ts$': 'ts-jest',
//   },
//   setupFiles: ['dotenv/config'],
// };

module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|tsx)',
    '!<rootDir>/src/domain/**/*.ts',
    '!<rootDir>/src/data/**/*.ts',
    '!<rootDir>/src/presentation/global/',
    '!<rootDir>/src/presentation/screens/offline/OfflineScreen.tsx',
    '!<rootDir>/src/presentation/screens/Publications/PublicationScreen.tsx',
    '!<rootDir>/src/presentation/navigations/*',
    '!<rootDir>/src/presentation/assets/',
    '!<rootDir>/src/presentation/styles/**',
    '!<rootDir>/src/framework/server/**',
    '!<rootDir>/src/**/*-ports.ts',
    '!**/ports/**',
    '!**/test/**',
    '!**/config/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    // '\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  //   testRegex: '(/__tests__/**/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testEnvironment: 'jsdom',
  resetMocks: true,
};
