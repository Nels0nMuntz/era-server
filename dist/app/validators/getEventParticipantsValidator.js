"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventParticipantsValidator = void 0;
const express_validator_1 = require("express-validator");
exports.getEventParticipantsValidator = [
    (0, express_validator_1.param)("id").notEmpty().isLength({ min: 24, max: 24 }),
    (0, express_validator_1.query)("search").optional(),
];
//# sourceMappingURL=getEventParticipantsValidator.js.map