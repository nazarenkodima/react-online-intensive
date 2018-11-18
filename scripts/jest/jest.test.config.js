module.exports = {
    runner:      'jest-runner',
    displayName: 'test:unit',
    rootDir:     '../../',
    verbose:     true,
    notify:      true,
    bail:        false,
    globals:     {
        __DEV__: true,
    },
    collectCoverage:     false,
    collectCoverageFrom: [
        '<rootDir>/source/bus/auth/**/*.{js,jsx}',
        '<rootDir>/source/bus/ui/**/*.{js,jsx}',
        '<rootDir>/source/bus/profile/**/*.{js,jsx}',
        '<rootDir>/source/bus/users/**/*.{js,jsx}',
        '<rootDir>/source/init/store.js',
        '<rootDir>/source/components/**/*.js',
        '<rootDir>/source/instruments/**/*.js',
    ],
    modulePaths:                  [ '<rootDir>/source', '<rootDir>/node_modules' ],
    moduleFileExtensions:         [ 'js', 'json', 'css' ],
    setupFiles:                   [ '<rootDir>/scripts/jest/scripts/setupFiles.js' ],
    setupTestFrameworkScriptFile:
        '<rootDir>/scripts/jest/scripts/setupEnzymeEnvironment.js',
    snapshotSerializers: [ 'enzyme-to-json/serializer' ],
    moduleNameMapper:    {
        '\\.(css|m.css)$':                                                                     'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testURL: 'http://www.test.com',
};
