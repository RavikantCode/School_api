"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SchoolController_1 = require("../controllers/SchoolController");
const Schoolrouter = express_1.default.Router();
Schoolrouter.post('/addSchool', SchoolController_1.SchoolController.addSchool);
Schoolrouter.get('/getSchools', SchoolController_1.SchoolController.getSchool);
exports.default = Schoolrouter;
