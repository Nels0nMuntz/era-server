import { query } from "express-validator";

export const getEventsValidator = [
  query("page").notEmpty().isInt(),
  query("limit").notEmpty().isInt(),
];
