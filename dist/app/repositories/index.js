"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.eventRepository = void 0;
var event_repository_1 = require("./event.repository");
Object.defineProperty(exports, "eventRepository", { enumerable: true, get: function () { return __importDefault(event_repository_1).default; } });
var user_repository_1 = require("./user.repository");
Object.defineProperty(exports, "userRepository", { enumerable: true, get: function () { return __importDefault(user_repository_1).default; } });
//# sourceMappingURL=index.js.map