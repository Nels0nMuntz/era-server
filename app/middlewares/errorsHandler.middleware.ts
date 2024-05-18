import { NextFunction, Request, Response } from "express";
import { NotFoundException } from "../lib";

export function ErrorsHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundException) {
    return res.status(err.status).json({ error: err.message });
  } else {
    return res
      .status(500)
      .json({ error: "Internal server error" });
  }
}
