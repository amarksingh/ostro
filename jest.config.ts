const tsJestPath = "/Users/amarkumarsingh/.nvm/versions/node/v24.12.0/lib/node_modules/ts-jest";

export default {
    "testEnvironment": "node",
    "testMatch": [
        "**/test/**/*.test.ts",
        "**/test/**/*.test.js"
    ],
    "modulePathIgnorePatterns": [
        "<rootDir>/build"
    ],
    "transform": {
        "^.+\\.ts$": [
            tsJestPath,
            {
                "tsconfig": "<rootDir>/tsconfig.json"
            }
        ]
    },
    "moduleNameMapper": {
        "^~/(.*)$": "<rootDir>/$1",
        "^@ostro/support/(.*)$": "<rootDir>/../support/src/$1",
        "^@ostro/support$": "<rootDir>/../support/src",
        "^@ostro/contracts/(.*)$": "<rootDir>/../contracts/src/$1",
        "^@ostro/contracts$": "<rootDir>/../contracts/src",
        "^@ostro/container/(.*)$": "<rootDir>/../container/src/$1",
        "^@ostro/container$": "<rootDir>/../container/src/application",
        "^@ostro/filesystem/(.*)$": "<rootDir>/../filesystem/src/$1",
        "^@ostro/filesystem$": "<rootDir>/../filesystem/src/filesystemManager",
        "^@ostro/database/(.*)$": "<rootDir>/../database/src/$1",
        "^@ostro/database$": "<rootDir>/../database/src",
        "^@ostro/router/(.*)$": "<rootDir>/../router/src/$1",
        "^@ostro/router$": "<rootDir>/../router/src",
        "^@ostro/foundation/(.*)$": "<rootDir>/../foundation/src/$1",
        "^@ostro/foundation$": "<rootDir>/../foundation/src/application",
        "^@ostro/console/(.*)$": "<rootDir>/../console/src/$1",
        "^@ostro/console$": "<rootDir>/../console/src/application",
        "^@ostro/cache/(.*)$": "<rootDir>/../cache/src/$1",
        "^@ostro/cache$": "<rootDir>/../cache/src",
        "^@ostro/session/(.*)$": "<rootDir>/../session/src/$1",
        "^@ostro/session$": "<rootDir>/../session/src",
        "^@ostro/cookie/(.*)$": "<rootDir>/../cookie/src/$1",
        "^@ostro/cookie$": "<rootDir>/../cookie/src",
        "^@ostro/auth/(.*)$": "<rootDir>/../auth/src/$1",
        "^@ostro/auth$": "<rootDir>/../auth/src/authManager",
        "^@ostro/http/(.*)$": "<rootDir>/../http/src/$1",
        "^@ostro/http$": "<rootDir>/../http/src",
        "^@ostro/encryption/(.*)$": "<rootDir>/../encryption/src/$1",
        "^@ostro/encryption$": "<rootDir>/../encryption/src",
        "^@ostro/validation/(.*)$": "<rootDir>/../validation/src/$1",
        "^@ostro/validation$": "<rootDir>/../validation/src/validationManager",
        "^@ostro/view/(.*)$": "<rootDir>/../view/src/$1",
        "^@ostro/view$": "<rootDir>/../view/src/viewManager",
        "^@ostro/logger/(.*)$": "<rootDir>/../logger/src/$1",
        "^@ostro/logger$": "<rootDir>/../logger/src/logManager",
        "^@ostro/event/eventServiceProvider$": "<rootDir>/../foundation/test/mocks/eventServiceProvider.js",
        "^@ostro/server/request$": "<rootDir>/../foundation/test/mocks/serverRequest.js",
        "^@ostro/server/response$": "<rootDir>/../foundation/test/mocks/serverResponse.js"
    },
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "coverageReporters": [
        "text",
        "lcov",
        "clover"
    ],
    "collectCoverageFrom": [
        "<rootDir>/app/**/*.ts",
        "<rootDir>/bootstrap/app.ts",
        "<rootDir>/routes/**/*.ts",
        "<rootDir>/database/migrations/**/*.ts",
        "<rootDir>/database/seeders/**/*.ts",
        "!<rootDir>/node_modules/**",
        "!<rootDir>/test/**",
        "!<rootDir>/coverage/**"
    ]
};
