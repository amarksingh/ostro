const Middleware = require('@ostro/foundation/http/middleware/verifyCsrfToken')

/**
 * Class VerifyCsrfToken.
 */
class VerifyCsrfToken extends Middleware{
	
    $addHttpCookie = true;

    $except = [

    ];
}

module.exports = VerifyCsrfToken ;