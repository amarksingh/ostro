import Middleware from '@ostro/auth/middleware/authenticate';

interface RequestLike {
    expectsJson(): boolean;
    [key: string]: unknown;
}

/**
 * Class Authenticate.
 */
class Authenticate extends Middleware {

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param $request - Incoming HTTP request instance.
     * @returns Redirect URL or undefined if JSON is expected.
     */
    redirectTo($request: RequestLike): string | undefined {
        if (!$request.expectsJson()) {
            return '/login';
        }
    }
}

export = Authenticate;