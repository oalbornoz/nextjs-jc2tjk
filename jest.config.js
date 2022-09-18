module.exports = {
 // Add more setup options before each test is run
 setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
 collectCoverageFrom: [
  '**/*.{js,jsx,ts,tsx}',
  '!**/*.d.ts',
  '!**/node_modules/**',
 ],
 coverageDirectory: 'coverage',
 clearMocks: true,
 moduleDirectories: ['node_modules', '<rootDir>/'],
 moduleNameMapper: {
  // Handle module aliases
  '^@/(.*)$': '<rootDir>/$1',
 },
 testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
 testEnvironment: 'jsdom',
 transform: {
  '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
 },

 transformIgnorePatterns: [
  "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
 ]
};
