import BaseController from '@ostro/router/controller';
import validatesRequests from '@ostro/foundation/validation/validatesRequests';
import { implement } from '@ostro/support/function';

/**
 * Class Controller.
 */
class Controller extends implement(BaseController, validatesRequests) {

}

export default Controller;