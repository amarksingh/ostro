import Middleware from '@ostro/auth/middleware/redirectIfAuthenticated';
/**
 * Class RedirectIfAuthenticated.
 */
declare class RedirectIfAuthenticated extends Middleware {
    /**
     * Get the path the user should be redirected to when they are authenticated.
     *
     * @returns Redirect URL path.
     */
    redirectTo(): string;
}
export default RedirectIfAuthenticated;
//# sourceMappingURL=redirectIfAuthenticated.d.ts.map