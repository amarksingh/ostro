import ConsoleKernel from '@ostro/foundation/console/kernel';
/**
 * Class Kernel.
 */
declare class Kernel extends ConsoleKernel {
    $commands: Record<string, unknown>;
    /**
     * Register the commands for the application.
     *
     * @returns {void}
     */
    commands(): void;
}
export default Kernel;
//# sourceMappingURL=kernel.d.ts.map