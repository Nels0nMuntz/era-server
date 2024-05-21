"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users",
        },
    ],
}, {
    timestamps: true,
});
const EventModel = (0, mongoose_1.model)("Events", eventSchema);
exports.default = EventModel;
//# sourceMappingURL=event.model.js.map