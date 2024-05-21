"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.UserModel.findOne({ email });
    });
}
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.UserModel.create(Object.assign({}, user));
    });
}
function updateEvents(userId, event) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield models_1.UserModel.findByIdAndUpdate(userId, {
            $push: {
                events: {
                    event: event.id,
                    eventSource: event.eventSource,
                },
            },
        }, {
            new: true,
        });
    });
}
function findEventParticipants(eventId, search) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = { 'events.event': eventId };
        if (search) {
            const pattern = new RegExp(search, "i");
            query = Object.assign(Object.assign({}, query), { $or: [
                    { fullName: { $regex: pattern } },
                    { email: { $regex: pattern } }
                ] });
        }
        return yield models_1.UserModel.find(query);
    });
}
exports.default = {
    findByEmail,
    create,
    updateEvents,
    findEventParticipants,
};
//# sourceMappingURL=user.repository.js.map