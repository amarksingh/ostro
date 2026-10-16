interface AppConfig {
    name: string;
    port: number | string;
    host: string;
    env: string;
    debug: boolean;
    url: string;
    asset_url: string | null;
    timezone: string;
    locale: string;
    fallback_locale: string;
    key: string | undefined;
    cipher: string;
    providers: unknown[];
    aliases: Record<string, unknown>;
}
declare const config: AppConfig;
export default config;
//# sourceMappingURL=app.d.ts.map