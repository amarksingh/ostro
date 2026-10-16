import ServiceProvider from '@ostro/foundation/providers/routeServiceProvider';
/**
 * Class RouteServiceProvider.
 */
declare class RouteServiceProvider extends ServiceProvider {
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    $namespace: string;
    /**
     * Layer handler in middleware for routes.
     *
     * @returns {void}
     */
    boot(): void;
    /**
     * Define the routes for the application.
     *
     * @returns {void}
     */
    map(): void;
    /**
     * Map API routes.
     *
     * @returns {void}
     */
    mapApiRoutes(): void;
    /**
     * Map Web routes.
     *
     * @returns {void}
     */
    mapWebRoutes(): void;
}
export default RouteServiceProvider;
//# sourceMappingURL=routeServiceProvider.d.ts.map