"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityException = exports.BadRequestException = exports.NotFoundException = exports.Exception = void 0;
const types_1 = require("../types");
const httpCodes = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
};
class Exception extends Error {
    constructor(code, message, details) {
        super();
        Object.setPrototypeOf(this, new.target.prototype);
        this.code = code;
        this.details = details;
        this.message = message;
        this.status = httpCodes[code];
    }
}
exports.Exception = Exception;
class NotFoundException extends Exception {
    constructor(message, details) {
        super(types_1.HttpStatus.NOT_FOUND, message, details);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends Exception {
    constructor(message, details) {
        super(types_1.HttpStatus.BAD_REQUEST, message, details);
    }
}
exports.BadRequestException = BadRequestException;
class UnprocessableEntityException extends Exception {
    constructor(message, details) {
        super(types_1.HttpStatus.UNPROCESSABLE_ENTITY, message, details);
    }
}
exports.UnprocessableEntityException = UnprocessableEntityException;
//# sourceMappingURL=Exception.js.map