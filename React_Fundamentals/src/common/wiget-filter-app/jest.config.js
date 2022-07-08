module.export = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}