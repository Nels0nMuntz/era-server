import {
  RegisterUserRequest,
} from "../types";
import { eventRepository, userRepository } from "../repositories";
import { BadRequestException, NotFoundException } from "../lib";

async function getEvent(eventId: string) {
  const event = await eventRepository.findById(eventId);
  if (!event) {
    throw new NotFoundException("Event not found");
  }
  return {
    event: {
      id: event._id.toString(),      
      title: event.title,      
      description: event.description,      
      organizer: event.organizer,      
      eventDate: event.eventDate,     
    }
  };
}

async function getEvents(
  page: number,
  limit: number,
  sortBy?: string,
  orderBy?: string
) {
  const skip = (page - 1) * limit;
  const { events, count } = await eventRepository.findAll(skip, limit, sortBy, orderBy);
  return {
    events: events.map((event) => {
      return {
        id: event._id,
        title: event.title,
        description: event.description,
        organizer: event.organizer,
        eventDate: event.eventDate,
      };
    }),
    currentPage: page,
    totalPages: Math.ceil(count / limit),
  };
}

async function registerUser(data: RegisterUserRequest) {
  const userByEmail = await userRepository.findByEmail(data.user.email);
  if (userByEmail) {
    const event = await eventRepository.findById(data.eventId);
    if (!event) {
      throw new NotFoundException("Event not found");
    }

    const participant = event.participants.find(
      ({ email }) => email === data.user.email
    );
    if (participant) {
      throw new BadRequestException("Email has already been taken");
    }

    await userRepository.updateEvents(userByEmail._id as unknown as string, {
      id: data.eventId,
      eventSource: data.eventSource,
    });
    return await eventRepository.updateParticipants(
      data.eventId,
      userByEmail._id as unknown as string
    );
  } else {
    const newUser = await userRepository.create(data.user);
    const event = await eventRepository.findById(data.eventId);
    if (!event) {
      throw new NotFoundException("Event not found");
    }

    await userRepository.updateEvents(newUser._id as unknown as string, {
      id: data.eventId,
      eventSource: data.eventSource,
    });
    return await eventRepository.updateParticipants(
      data.eventId,
      newUser._id as unknown as string
    );
  }
}

async function getEventParticipants(eventId: string, search?: string) {
  const event = await eventRepository.findById(eventId);
  if (!event) {
    throw new NotFoundException("Event not found");
  }
  const participants = await userRepository.findEventParticipants(eventId, search)
  return participants.map(doc => doc.toObject());
}

export default {
  getEvent,
  getEvents,
  registerUser,
  getEventParticipants,
};
