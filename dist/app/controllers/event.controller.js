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
const services_1 = require("../services");
function getEvent(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const event = yield services_1.eventService.getEvent(id);
            return res.status(200).json(event);
        }
        catch (error) {
            next(error);
        }
    });
}
function getEvents(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const page = Number(req.query.page);
            const limit = Number(req.query.limit);
            const sortBy = (_a = req.query.sortBy) === null || _a === void 0 ? void 0 : _a.toString();
            const orderBy = (_b = req.query.orderBy) === null || _b === void 0 ? void 0 : _b.toString();
            const response = yield services_1.eventService.getEvents(page, limit, sortBy, orderBy);
            return res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    });
}
function registerUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const body = req.body;
            const data = {
                user: {
                    fullName: body.fullName,
                    email: body.email,
                    dateOfBirth: new Date(body.dateOfBirth),
                },
                eventId: id,
                eventSource: body.eventSource,
            };
            yield services_1.eventService.registerUser(data);
            return res.status(201).json({ success: true });
        }
        catch (error) {
            next(error);
        }
    });
}
function getEventParticipants(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const { id } = req.params;
            const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
            const participants = yield services_1.eventService.getEventParticipants(id, search);
            return res.status(200).json(participants);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = {
    getEvent,
    getEvents,
    registerUser,
    getEventParticipants,
};
//# sourceMappingURL=event.controller.js.map