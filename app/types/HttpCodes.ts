import { HttpStatus } from "./HttpStatus";

export interface HttpCodes extends Record<HttpStatus, number> {}
