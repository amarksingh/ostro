const Middleware = require('@ostro/auth/middleware/redirectIfAuthenticated')

/**
 * Class RedirectIfAuthenticated.
 */
class RedirectIfAuthenticated extends Middleware {

    /**
     * redirectTo method.
     * @returns {any}
     */
    redirectTo() {
        return '/dashboard';
    }
}

module.exports = RedirectIfAuthenticated