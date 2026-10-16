import http from 'http';
import https from 'https';
interface AxiosRequestOptions {
    maxContentLength: number;
    httpAgent: http.Agent;
    httpsAgent: https.Agent;
    timeout: number;
}
interface AxiosRequestConfig {
    driver: 'axios';
    options: AxiosRequestOptions;
}
interface RequestAdapterOptions {
    maxContentLength: number;
    forever: boolean;
    timeout: number;
}
interface RequestAdapterConfig {
    driver: 'request';
    options: RequestAdapterOptions;
}
type HttpRequestConfig = AxiosRequestConfig | RequestAdapterConfig;
interface XhrConfig {
    default: string;
    requests: Record<string, HttpRequestConfig>;
}
declare const config: XhrConfig;
export default config;
//# sourceMappingURL=xhr.d.ts.map