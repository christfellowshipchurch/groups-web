module.exports = {
  collectCoverage: true,
  testMatch: ["**/?(*.)(test|tests).{js,jsx,mjs}"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"]
};
