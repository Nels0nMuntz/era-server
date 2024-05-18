import { HttpCodes, HttpStatus } from "../types";

const httpCodes: HttpCodes = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

class Exception extends Error {
  public code: string;
  public status: number;
  public message: string;
  public metaData: any;

  constructor(code: HttpStatus, message: string, metaData?: any) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
    this.metaData = metaData;
    this.message = message;
    this.status = httpCodes[code];
  }
}

export class NotFoundException extends Exception {
  constructor(message: string, metaData?: any) {
    super(HttpStatus.NOT_FOUND, message, metaData)
  }
}

export class BadRequestException extends Exception {
  constructor(message: string, metaData?: any) {
    super(HttpStatus.BAD_REQUEST, message, metaData)
  }
}
