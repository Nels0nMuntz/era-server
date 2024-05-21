"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const lib_1 = require("../lib");
const express_validator_1 = require("express-validator");
function validationMiddleware(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new lib_1.UnprocessableEntityException("Request data validation failed", errors.array());
    }
    else {
        next();
    }
}
exports.validationMiddleware = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map