/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

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
function apiRoutes(route: RouteRegistrar): void {
    route.get('user', async function ({ request, response }: RouteContext): Promise<void> {
        response.send(await request.user());
    }).middleware('auth:api');
}

export default apiRoutes;