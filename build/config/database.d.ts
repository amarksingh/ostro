interface SqliteConnectionConfig {
    driver: 'sqlite';
    url?: string;
    database: string;
    foreign_key_constraints: boolean;
}
interface MysqlConnectionConfig {
    driver: 'mysql';
    host: string;
    port: number | string;
    database: string;
    username: string;
    password?: string;
}
interface PgsqlConnectionConfig {
    driver: 'pgsql';
    url?: string;
    host: string;
    port: number | string;
    database: string;
    username: string;
    password?: string;
    prefix: string;
    schema: string;
}
interface SqlsrvConnectionConfig {
    driver: 'sqlsrv';
    host: string;
    port: number | string;
    database: string;
    username: string;
    password?: string;
    charset: string;
    prefix: string;
    encrypt: boolean;
}
interface OracleConnectionConfig {
    driver: 'oracle';
    host: string;
    port: number | string;
    database: string;
    username: string;
    password?: string;
    charset: string;
    prefix: string;
}
type DatabaseConnectionConfig = SqliteConnectionConfig | MysqlConnectionConfig | PgsqlConnectionConfig | SqlsrvConnectionConfig | OracleConnectionConfig;
interface DatabaseConfig {
    default: string;
    connections: Record<string, DatabaseConnectionConfig>;
    migration_path: string;
    seeder_path: string;
    migrations: string;
}
declare const config: DatabaseConfig;
export default config;
//# sourceMappingURL=database.d.ts.map