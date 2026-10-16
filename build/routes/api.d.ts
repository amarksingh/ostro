interface RouteResponse {
    send(data: unknown): unknown;
    [key: string]: unknown;
}
interface RouteRequest {
    user(): Promise<unknown> | unknown;
    [key: string]: unknown;
}
interface RouteContext {
    request: RouteRequest;
    response: RouteResponse;
    [key: string]: unknown;
}
interface RouteEntry {
    middleware(name: string): RouteEntry;
    [key: string]: unknown;
}
interface RouteRegistrar {
    get(path: string, handler: (context: RouteContext) => Promise<unknown> | unknown): RouteEntry;
    [key: string]: unknown;
}
/**
 * Register API routes for the application.
 *
 * @param route - Route registrar instance.
 * @returns {void}
 */
declare function apiRoutes(route: RouteRegistrar): void;
export default apiRoutes;
//# sourceMappingURL=api.d.ts.map