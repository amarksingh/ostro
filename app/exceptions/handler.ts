import ExceptionHandler from '@ostro/foundation/exception/handler';

/**
 * Class Handler.
 */
class Handler extends ExceptionHandler {

    $dontReport: unknown[] = [

    ];
    
    $dontFlash: string[] = [
        'current_password',
        'password',
        'password_confirmation',
    ];
}

export default Handler;