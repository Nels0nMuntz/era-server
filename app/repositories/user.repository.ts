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

export default {
  findByEmail,
  create,
  updateEvents,
};
