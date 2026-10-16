import ConsoleKernel from '@ostro/foundation/console/kernel';

/**
 * Class Kernel.
 */
class Kernel extends ConsoleKernel {

    $commands: Record<string, unknown> = {};

    /**
     * Register the commands for the application.
     *
     * @returns {void}
     */
    commands(): void {
        this.load(__dirname + '/commands');
    }

}

export = Kernel;