import Middleware from '@ostro/foundation/http/middleware/verifyCsrfToken';

/**
 * Class VerifyCsrfToken.
 */
class VerifyCsrfToken extends Middleware {

    $addHttpCookie: boolean = true;

    $except: string[] = [

    ];
}

export default VerifyCsrfToken;