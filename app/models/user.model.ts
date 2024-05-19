import { Schema, model } from "mongoose";
import { UserPopulated } from "../types";

const userSchema = new Schema<UserPopulated>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    events: [
      {
        event: {
          type: Schema.Types.ObjectId,
          ref: "Events",
        },
        eventSource: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.set("toObject", {
  transform: (doc, rec) => {
    rec.id = rec._id;
    delete rec._id;
    delete rec.__v;
    delete rec.createdAt;
    delete rec.updatedAt;
    delete rec.events;
  },
});

const UserModel = model("Users", userSchema);

export interface UserDocument extends Document, UserPopulated {}

export default UserModel;
