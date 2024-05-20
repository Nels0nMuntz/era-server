import express from "express";
import { eventController } from "../controllers";
import {
  getEventValidator,
  getEventsValidator,
  registerUserValidator,
  getEventParticipantsValidator,
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
  getEventValidator,
  validationMiddleware,
  eventController.getEvent
);
eventRouter.get(
  "/:id/participants",
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
