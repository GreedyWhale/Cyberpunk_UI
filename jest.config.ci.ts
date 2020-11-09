import base from './jest.config'

export default Object.assign({}, base, {
  collectCoverage: true,
  collectCoverageFrom: ['./src/lib/**/*.{ts,tsx}', '!**/node_modules/**'],
  reporters: ['default', 'jest-junit']
})
