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
const repositories_1 = require("../repositories");
const lib_1 = require("../lib");
function getEvent(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = yield repositories_1.eventRepository.findById(eventId);
        if (!event) {
            throw new lib_1.NotFoundException("Event not found");
        }
        return {
            event: {
                id: event._id.toString(),
                title: event.title,
                description: event.description,
                organizer: event.organizer,
                eventDate: event.eventDate,
            }
        };
    });
}
function getEvents(page, limit, sortBy, orderBy) {
    return __awaiter(this, void 0, void 0, function* () {
        const skip = (page - 1) * limit;
        const { events, count } = yield repositories_1.eventRepository.findAll(skip, limit, sortBy, orderBy);
        return {
            events: events.map((event) => {
                return {
                    id: event._id,
                    title: event.title,
                    description: event.description,
                    organizer: event.organizer,
                    eventDate: event.eventDate,
                };
            }),
            currentPage: page,
            totalPages: Math.ceil(count / limit),
        };
    });
}
function registerUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const userByEmail = yield repositories_1.userRepository.findByEmail(data.user.email);
        if (userByEmail) {
            const event = yield repositories_1.eventRepository.findById(data.eventId);
            if (!event) {
                throw new lib_1.NotFoundException("Event not found");
            }
            const participant = event.participants.find(({ email }) => email === data.user.email);
            if (participant) {
                throw new lib_1.BadRequestException("Email has already been taken");
            }
            yield repositories_1.userRepository.updateEvents(userByEmail._id, {
                id: data.eventId,
                eventSource: data.eventSource,
            });
            return yield repositories_1.eventRepository.updateParticipants(data.eventId, userByEmail._id);
        }
        else {
            const newUser = yield repositories_1.userRepository.create(data.user);
            const event = yield repositories_1.eventRepository.findById(data.eventId);
            if (!event) {
                throw new lib_1.NotFoundException("Event not found");
            }
            yield repositories_1.userRepository.updateEvents(newUser._id, {
                id: data.eventId,
                eventSource: data.eventSource,
            });
            return yield repositories_1.eventRepository.updateParticipants(data.eventId, newUser._id);
        }
    });
}
function getEventParticipants(eventId, search) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = yield repositories_1.eventRepository.findById(eventId);
        if (!event) {
            throw new lib_1.NotFoundException("Event not found");
        }
        const participants = yield repositories_1.userRepository.findEventParticipants(eventId, search);
        return participants.map(doc => doc.toObject());
    });
}
exports.default = {
    getEvent,
    getEvents,
    registerUser,
    getEventParticipants,
};
//# sourceMappingURL=event.service.js.map