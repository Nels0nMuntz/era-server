import { NextFunction, Request, Response } from "express";
import { eventService } from "../services";
import {
  EventSource,
  GetEventResponse,
  GetEventsResponse,
  RegisterUserRequest,
  User,
} from "../types";

async function getEvent(
  req: Request,
  res: Response<GetEventResponse>,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const event = await eventService.getEvent(id);    
    return res.status(200).json(event);
  } catch (error) {
    next(error);
  }
}

async function getEvents(
  req: Request,
  res: Response<GetEventsResponse>,
  next: NextFunction
) {
  try {
    const defaultPage = 1;
    const defaultLimit = 10;
    const page = Number(req.query.page) || defaultPage;
    const limit = Number(req.query.limit) || defaultLimit;
    const response = await eventService.getEvents(page, limit);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function registerUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const body = req.body as User & { eventSource: EventSource };
    const data: RegisterUserRequest = {
      user: {
        fullName: body.fullName,
        email: body.email,
        dateOfBirth: new Date(body.dateOfBirth),
      },
      eventId: id,
      eventSource: body.eventSource,
    };
    await eventService.registerUser(data);
    return res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
}

async function getEventParticipants(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const participants = await eventService.getEventParticipants(id);    
    return res.status(200).json(participants);
  } catch (error) {
    next(error);
  }
}

export default {
  getEvent,
  getEvents,
  registerUser,
  getEventParticipants,
};
