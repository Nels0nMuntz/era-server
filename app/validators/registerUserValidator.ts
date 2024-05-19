import { body, param } from "express-validator";

export const registerUserValidator = [
  param("id").notEmpty().isLength({ min: 24, max: 24 }),
  body("fullName").notEmpty().isLength({ min: 2, max: 100 }),
  body("email").notEmpty().isEmail(),
  body("dateOfBirth").notEmpty().isISO8601(),
  body("eventSource").notEmpty(),
];
