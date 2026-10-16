interface SessionConfig {
    driver: string;
    lifetime: number;
    expire_on_close: boolean;
    encrypt: boolean;
    signed: boolean;
    files: string;
    connection: string | null;
    table: string;
    store: string | null;
    lottery: [number, number];
    cookie: string;
    path: string;
    domain: string | null;
    secure: boolean;
    http_only: boolean;
    same_site: 'lax' | 'strict' | 'none' | null;
    resave: boolean;
    saveUninitialized: boolean;
}
declare const config: SessionConfig;
export default config;
//# sourceMappingURL=session.d.ts.map