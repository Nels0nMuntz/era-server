import { EventModel } from "../models";

async function findAll(skip: number, limit: number) {
  const events = await EventModel.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
  const count = await EventModel.countDocuments();
  return {
    events,
    count,
  };
}

async function findById(id: string) {
  return await EventModel.findById(id).populate("participants");
}

async function updateParticipants(eventId: string, participantId: string) {
  return await EventModel.findByIdAndUpdate(
    eventId,
    {
      $push: { participants: participantId },
    },
    {
      new: true,
    }
  );
}

export default {
  findAll,
  findById,
  updateParticipants,
};
