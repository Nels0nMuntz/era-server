import express from "express";
import { eventController } from "../controllers";
import {
  getEventParticipantsValidator,
  getEventsValidator,
  registerUserValidator,
} from "../validators";
import { validationMiddleware } from "../middlewares";

const eventRouter = express.Router();

eventRouter.get(
  "/",
  getEventsValidator,
  validationMiddleware,
  eventController.getEvents
);
eventRouter.get(
  "/:id",
  getEventParticipantsValidator,
  validationMiddleware,
  eventController.getEventParticipants
);
eventRouter.post(
  "/:id/register",
  registerUserValidator,
  validationMiddleware,
  eventController.registerUser
);

export default eventRouter;
