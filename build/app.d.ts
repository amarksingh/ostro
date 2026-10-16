interface Server {
    request(handler: unknown): void;
    response(handler: unknown): void;
    register(middleware: unknown): void;
    start(): unknown;
}
declare const server: Server;
export default server;
//# sourceMappingURL=app.d.ts.map