module.exports = {
    runner:               'jest-runner-stylelint',
    displayName:          'lint:css',
    rootDir:              '../../',
    moduleFileExtensions: [ 'css' ],
    testMatch:            [ '<rootDir>/source/**/*.css' ],
};
