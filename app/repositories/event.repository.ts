import { SortOrder } from "mongoose";
import { EventModel } from "../models";

async function findAll(
  skip: number,
  limit: number,
  sortBy?: string,
  orderBy?: string
) {
  let sortObject: { [key: string]: SortOrder } = { createdAt: "desc" };
  if (sortBy) {
    sortObject = {};
    sortObject[sortBy] = (orderBy as SortOrder) || "asc";
  }
  const events = await EventModel.find()
    .skip(skip)
    .limit(limit)
    .sort(sortObject);
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
