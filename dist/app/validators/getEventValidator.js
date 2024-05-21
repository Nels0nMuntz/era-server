"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventValidator = void 0;
const express_validator_1 = require("express-validator");
exports.getEventValidator = [
    (0, express_validator_1.param)("id").notEmpty().isLength({ min: 24, max: 24 }),
];
//# sourceMappingURL=getEventValidator.js.map