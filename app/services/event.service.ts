import { EventsResponse, RegisterUserRequest } from "../types";
import { eventRepository, userRepository } from "../repositories";
import { BadRequestException, NotFoundException } from "../lib";

async function getEvents(page: number, limit: number): Promise<EventsResponse> {
  const skip = (page - 1) * limit;
  const { events, count } = await eventRepository.findAll(skip, limit);
  return {
    events: events.map(event => event.toObject()),
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
      throw new BadRequestException("User has already registered to the event");
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

async function getEventParticipants(eventId: string) {
  const event = await eventRepository.findById(eventId);
  if (!event) {
    throw new NotFoundException("Event not found");
  }
  return event.toObject().participants;
}

export default {
  getEvents,
  registerUser,
  getEventParticipants,
};
