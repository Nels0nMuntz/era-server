import { HttpCodes, HttpStatus } from "../types";

const httpCodes: HttpCodes = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

export class Exception extends Error {
  public code: string;
  public status: number;
  public message: string;
  public details: any;

  constructor(code: HttpStatus, message: string, details?: any) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
    this.details = details;
    this.message = message;
    this.status = httpCodes[code];
  }
}

export class NotFoundException extends Exception {
  constructor(message: string, details?: any) {
    super(HttpStatus.NOT_FOUND, message, details)
  }
}

export class BadRequestException extends Exception {
  constructor(message: string, details?: any) {
    super(HttpStatus.BAD_REQUEST, message, details)
  }
}

export class UnprocessableEntityException extends Exception {
  constructor(message: string, details?: any) {
    super(HttpStatus.UNPROCESSABLE_ENTITY, message, details)
  }
}
