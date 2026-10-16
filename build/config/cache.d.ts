interface MemoryStoreConfig {
    driver: string;
}
interface DatabaseStoreConfig {
    driver: string;
    table: string;
    connection: string | null;
}
interface FileStoreConfig {
    driver: string;
    path: string;
}
interface SessionStoreConfig {
    stores: string;
    path: string;
}
interface RedisStoreServerConfig {
    host: string;
    port: number | string;
    password?: string;
    user?: string;
}
interface RedisStoreConfig {
    driver: string;
    server: RedisStoreServerConfig;
}
interface MemcachedStoreServerConfig {
    host: string;
    port: number | string;
    weight: number;
    user?: string;
    password?: string;
}
interface MemcachedStoreConfig {
    driver: string;
    persistent_id?: string;
    options: Record<string, unknown>;
    server: MemcachedStoreServerConfig;
}
type CacheStoreConfig = MemoryStoreConfig | DatabaseStoreConfig | FileStoreConfig | SessionStoreConfig | RedisStoreConfig | MemcachedStoreConfig;
interface CacheConfig {
    default: string;
    enabled: boolean;
    stores: Record<string, CacheStoreConfig>;
    prefix: string;
}
declare const config: CacheConfig;
export default config;
//# sourceMappingURL=cache.d.ts.map