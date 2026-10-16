/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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
function webRoutes(route: RouteRegistrar): void {
    route.get('/', function ({ view }: RouteContext): void {
        view('welcome');
    });
}

export = webRoutes;