interface LocalDiskConfig {
    driver: 'local';
    root: string;
    encoding: string;
}
interface AzureDiskConfig {
    driver: 'azure';
    key?: string;
    account?: string;
    container?: string;
    url?: string;
}
interface S3DiskConfig {
    driver: 's3';
    key?: string;
    secret?: string;
    region?: string;
    bucket?: string;
    url?: string;
    endpoint?: string;
    use_path_style_endpoint: boolean;
}
type FilesystemDiskConfig = LocalDiskConfig | AzureDiskConfig | S3DiskConfig;
interface FilesystemConfig {
    default: string;
    cloud: string;
    disks: Record<string, FilesystemDiskConfig>;
}
declare const config: FilesystemConfig;
export default config;
//# sourceMappingURL=filesystem.d.ts.map