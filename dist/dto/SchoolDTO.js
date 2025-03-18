"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolDTO = void 0;
const zod_1 = require("zod");
exports.schoolDTO = zod_1.z.object({
    name: zod_1.z.string().min(1, `name is required `),
    address: zod_1.z.string().min(1, `address is required`),
    latitude: zod_1.z.number().min(-90).max(90),
    longitude: zod_1.z.number().min(-180).max(180)
});
