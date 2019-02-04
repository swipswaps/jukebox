module.exports = {
  "modulePaths": [
    "<rootDir>/src/"
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "collectCoverageFrom": [
    "src/**/*.{ts}"
  ],
  "testMatch": [
    "<rootDir>/test/unit/**/*.spec.(t|j)s"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "<rootDir>/test/unit/coverage",
  "testEnvironment": "node",
  "collectCoverage": true,
  "verbose": true
}
