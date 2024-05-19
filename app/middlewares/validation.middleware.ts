import { NextFunction, Request, Response } from "express";
import { UnprocessableEntityException } from "../lib";
import { validationResult } from "express-validator";

export function validationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new UnprocessableEntityException(
      "Request data validation failed",
      errors.array()
    );
  } else {
    next();
  }
}
