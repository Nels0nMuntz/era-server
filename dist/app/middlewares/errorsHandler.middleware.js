"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorsHandlerMiddleware = void 0;
const lib_1 = require("../lib");
function errorsHandlerMiddleware(err, req, res, next) {
    console.log(err);
    if (err instanceof lib_1.Exception) {
        return res
            .status(err.status)
            .json({ error: err.message, details: err.details || {} });
    }
    else {
        return res.status(500).json({ error: "Internal server error" });
    }
}
exports.errorsHandlerMiddleware = errorsHandlerMiddleware;
//# sourceMappingURL=errorsHandler.middleware.js.map