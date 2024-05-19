import { NextFunction, Request, Response } from "express";
import { Exception } from "../lib";

export function errorsHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err instanceof Exception) {
    return res
      .status(err.status)
      .json({ error: err.message, details: err.details || {} });
  } else {
    return res.status(500).json({ error: "Internal server error" });
  }
}
