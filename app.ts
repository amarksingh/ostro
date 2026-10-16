import app from './bootstrap/app';
import requestHandler from '@ostro/foundation/http/request';
import responseHandler from '@ostro/foundation/http/response';

interface HttpKernel {
    handle(): unknown;
}

interface Server {
    request(handler: unknown): void;
    response(handler: unknown): void;
    register(middleware: unknown): void;
    start(): unknown;
}

const kernel: HttpKernel = app.make('@ostro/contracts/http/kernel');

const server: Server = app.make('@ostro/server', (app as unknown as { config: unknown }).config);

server.request(requestHandler);

server.response(responseHandler);

server.register(kernel.handle());

server.start();

export = server;
