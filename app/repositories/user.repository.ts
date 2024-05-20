import { UserModel } from "../models";
import { EventSource, User } from "../types";

async function findByEmail(email: string) {
  return await UserModel.findOne({ email });
}

async function create(user: User) {
  return await UserModel.create({ ...user });
}

async function updateEvents(
  userId: string,
  event: { id: string; eventSource: EventSource }
) {
  return await UserModel.findByIdAndUpdate(
    userId,
    {
      $push: {
        events: {
          event: event.id,
          eventSource: event.eventSource,
        },
      },
    },
    {
      new: true,
    }
  );
}

async function findEventParticipants(eventId: string, search?: string) {
  let query: any = { 'events.event': eventId };
  if (search) {
    const pattern = new RegExp(search, "i");
    query = {
      ...query,
      $or: [
        { fullName: { $regex: pattern } },
        { email: { $regex: pattern } }     
      ]
    };
  }
  return await UserModel.find(query)
}

export default {
  findByEmail,
  create,
  updateEvents,
  findEventParticipants,
};
