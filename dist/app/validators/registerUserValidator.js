"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserValidator = void 0;
const express_validator_1 = require("express-validator");
exports.registerUserValidator = [
    (0, express_validator_1.param)("id").notEmpty().isLength({ min: 24, max: 24 }),
    (0, express_validator_1.body)("fullName").notEmpty().isLength({ min: 2, max: 100 }),
    (0, express_validator_1.body)("email").notEmpty().isEmail(),
    (0, express_validator_1.body)("dateOfBirth").notEmpty().isISO8601(),
    (0, express_validator_1.body)("eventSource").notEmpty(),
];
//# sourceMappingURL=registerUserValidator.js.map