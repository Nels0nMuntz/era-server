"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Events",
            },
            eventSource: {
                type: String,
                required: true,
            },
        },
    ],
}, {
    timestamps: true,
});
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
const UserModel = (0, mongoose_1.model)("Users", userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map