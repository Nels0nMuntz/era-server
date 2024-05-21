"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_1 = __importDefault(require("./event"));
const lib_1 = require("../lib");
const rootRouter = express_1.default.Router();
rootRouter.use("/events", event_1.default);
rootRouter.use("/*", () => {
    throw new lib_1.NotFoundException("Not Found ");
});
exports.default = rootRouter;
//# sourceMappingURL=root.js.map