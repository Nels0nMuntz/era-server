"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsValidator = void 0;
const express_validator_1 = require("express-validator");
exports.getEventsValidator = [
    (0, express_validator_1.query)("page").notEmpty().isInt(),
    (0, express_validator_1.query)("limit").notEmpty().isInt(),
    (0, express_validator_1.query)("sortBy").optional(),
    (0, express_validator_1.query)("orderBy").optional(),
];
//# sourceMappingURL=getEventsValidator.js.map