import Middleware from '@ostro/auth/middleware/redirectIfAuthenticated';

/**
 * Class RedirectIfAuthenticated.
 */
class RedirectIfAuthenticated extends Middleware {

    /**
     * Get the path the user should be redirected to when they are authenticated.
     *
     * @returns Redirect URL path.
     */
    redirectTo(): string {
        return '/dashboard';
    }
}

export = RedirectIfAuthenticated;