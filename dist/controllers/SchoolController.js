"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const SchoolDTO_1 = require("../dto/SchoolDTO");
const SchoolService_1 = require("../services/SchoolService");
class SchoolController {
}
exports.SchoolController = SchoolController;
_a = SchoolController;
SchoolController.addSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validateData = SchoolDTO_1.schoolDTO.safeParse(data);
        if (validateData.success) {
            yield SchoolService_1.SchoolService.addSchool(validateData.data);
            return res.status(200).json({
                message: "School added successfully"
            });
        }
        else {
            return res.status(400).json({ message: validateData.error.errors[0].message });
        }
    }
    catch (error) {
        return res.status(400).json({
            error: error.message || "Something went wrong"
        });
    }
});
SchoolController.getSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat1, lon1 } = req.body;
    const schools = yield SchoolService_1.SchoolService.getSchools(lat1, lon1);
    return res.status(200).json({
        schools
    });
});
