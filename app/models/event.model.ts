import { Schema, model, Document } from "mongoose";
import { Event } from "../types";

const eventSchema = new Schema<Event>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    timestamps: true,
  }
);

eventSchema.set("toObject", {
  transform: (doc, rec) => {
    rec.id = rec._id;
    delete rec._id;
    delete rec.__v;
    delete rec.createdAt;
    delete rec.updatedAt;
    delete rec.participants;
  },
});

const EventModel = model("Events", eventSchema);

export interface EventDocument extends Document, Event {}

export default EventModel;
