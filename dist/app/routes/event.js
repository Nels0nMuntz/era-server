"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
const middlewares_1 = require("../middlewares");
const eventRouter = express_1.default.Router();
eventRouter.get("/", validators_1.getEventsValidator, middlewares_1.validationMiddleware, controllers_1.eventController.getEvents);
eventRouter.get("/:id", validators_1.getEventValidator, middlewares_1.validationMiddleware, controllers_1.eventController.getEvent);
eventRouter.get("/:id/participants", validators_1.getEventParticipantsValidator, middlewares_1.validationMiddleware, controllers_1.eventController.getEventParticipants);
eventRouter.post("/:id/register", validators_1.registerUserValidator, middlewares_1.validationMiddleware, controllers_1.eventController.registerUser);
exports.default = eventRouter;
//# sourceMappingURL=event.js.map