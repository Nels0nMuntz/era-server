import { param } from "express-validator";

export const getEventValidator = [
  param("id").notEmpty().isLength({ min: 24, max: 24 }),
];
