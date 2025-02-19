import { EErrorStatusCode } from "./enums/error-status-code.enum"

export class ConflictError extends Error{
    status: number
    // eslint-disable-next-line
    err: any
    // eslint-disable-next-line
    constructor(message: string, err: any) {
        super(message)
        this.status = EErrorStatusCode.CONFLICT_ERROR
        this.err = err
    }
}