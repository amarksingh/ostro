"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const function_1 = require("@ostro/support/function");
const config = {
    /*
    |--------------------------------------------------------------------------
    | Default XHR Adapter
    |--------------------------------------------------------------------------
    |
    | Specifies which XHR (XMLHttpRequest) library/adapter will be used by default
    | when sending HTTP requests in your application. This should correspond to
    | one of the keys defined under the "requests" configuration below.
    |
    | Common adapters include:
    | - "axios" : Promise-based HTTP client for browser and node.js
    | - "request": Simplified HTTP client (deprecated but still used in some apps)
    |
    */
    'default': (0, function_1.env)('XHR_ADAPTER', 'axios'),
    /*
    |--------------------------------------------------------------------------
    | XHR Requests Configuration
    |--------------------------------------------------------------------------
    |
    | Configure the HTTP request libraries/drivers your application supports.
    | Each request driver can have its own options to customize behavior,
    | including timeouts, connection persistence, max content length, etc.
    |
    | The available drivers are:
    | - axios
    | - request
    |
    */
    'requests': {
        'axios': {
            'driver': 'axios',
            'options': {
                // Maximum size of the HTTP response body allowed. Infinity means no limit.
                'maxContentLength': Infinity,
                // HTTP agent to manage connection persistence (keep-alive).
                'httpAgent': new http_1.default.Agent({
                    keepAlive: true, // Keep TCP connections alive for reuse
                    keepAliveMsecs: (0, function_1.env)('XHR_KEEP_ALIVE_MSECS', 10000), // Time to keep alive in ms
                }),
                // HTTPS agent for secure requests with the same keep-alive options.
                'httpsAgent': new https_1.default.Agent({
                    keepAlive: true,
                    keepAliveMsecs: (0, function_1.env)('XHR_KEEP_ALIVE_MSECS', 10000),
                }),
                // Timeout for requests in milliseconds (default 5 minutes).
                'timeout': (0, function_1.env)('XHR_TIMEOUT', 300000),
            },
        },
        'request': {
            'driver': 'request',
            'options': {
                // Maximum response size allowed.
                'maxContentLength': Infinity,
                // Use 'forever' option to keep sockets open for reuse, similar to keep-alive.
                'forever': true,
                // Timeout in milliseconds for the request.
                'timeout': (0, function_1.env)('XHR_TIMEOUT', 300000),
            },
        },
    },
};
exports.default = config;
//# sourceMappingURL=xhr.js.map