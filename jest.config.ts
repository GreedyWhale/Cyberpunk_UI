import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
}
export default config
