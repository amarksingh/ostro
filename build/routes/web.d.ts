interface RouteContext {
    view(name: string, data?: Record<string, unknown>): unknown;
    [key: string]: unknown;
}
interface RouteRegistrar {
    get(path: string, handler: (context: RouteContext) => unknown): unknown;
    [key: string]: unknown;
}
/**
 * Register web routes for the application.
 *
 * @param route - Route registrar instance.
 * @returns {void}
 */
declare function webRoutes(route: RouteRegistrar): void;
export default webRoutes;
//# sourceMappingURL=web.d.ts.map