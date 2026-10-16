interface GuardConfig {
    driver: string;
    provider: string;
    hash?: boolean;
}
interface ProviderConfig {
    driver: string;
    model: unknown;
}
interface AuthConfig {
    defaults: {
        guard: string;
    };
    guards: Record<string, GuardConfig>;
    providers: Record<string, ProviderConfig>;
}
declare const config: AuthConfig;
export default config;
//# sourceMappingURL=auth.d.ts.map