import { EErrorStatusCode } from "./enums/error-status-code.enum";
import { EErrorMessage } from "./enums/errors-message.enum";

export class InternalServerError extends Error {
  status: number;
  // eslint-disable-next-line
  err: any;
  // eslint-disable-next-line
  constructor(err: any) {
    super(EErrorMessage.INTERNAL_SERVER_ERROR);
    this.status = EErrorStatusCode.INTERNAL_SERVER_ERROR;
    this.err = err;
  }
}
