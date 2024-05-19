import { param } from "express-validator";

export const getEventParticipantsValidator = [
  param("id").notEmpty().isLength({ min: 24, max: 24 }),
];
