import HttpKernel from '@ostro/foundation/http/kernel';
/**
 * Class Kernel.
 */
declare class Kernel extends HttpKernel {
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    $defaultMiddlewares: unknown[];
    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    $middlewareGroups: Record<string, unknown[]>;
    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    $namedMiddlewares: Record<string, unknown>;
}
export default Kernel;
//# sourceMappingURL=kernel.d.ts.map