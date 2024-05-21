"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const root_1 = __importDefault(require("./routes/root"));
const middlewares_1 = require("./middlewares");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, "..", `.env.${process.env.NODE_ENV}`),
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", root_1.default);
app.use(middlewares_1.errorsHandlerMiddleware);
exports.default = app;
//# sourceMappingURL=index.js.map