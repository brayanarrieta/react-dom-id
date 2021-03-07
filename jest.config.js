const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [
    'tsx',
    ...defaults.moduleFileExtensions,
  ],
};
