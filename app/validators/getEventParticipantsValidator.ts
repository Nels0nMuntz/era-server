import { param, query } from "express-validator";

export const getEventParticipantsValidator = [
  param("id").notEmpty().isLength({ min: 24, max: 24 }),
  query("search").optional(),
];
