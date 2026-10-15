const Middleware = require('@ostro/auth/middleware/authenticate')
/**
 * Class Authenticate.
 */
class Authenticate extends Middleware {

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     */
    redirectTo($request: any) {
        if (!$request.expectsJson()) {
            return '/login';
        }
    }
}

module.exports = Authenticate