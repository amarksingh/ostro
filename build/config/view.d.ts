interface EngineConfig {
    driver: string;
    extension: string;
    cache: boolean;
    options: Record<string, unknown>;
    root: string;
}
interface ViewConfig {
    default: string;
    engines: Record<string, EngineConfig>;
}
declare const config: ViewConfig;
export default config;
//# sourceMappingURL=view.d.ts.map