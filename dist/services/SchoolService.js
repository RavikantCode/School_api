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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const SchoolRepo_1 = require("../repo/SchoolRepo");
const Haversine_1 = require("../utils/Haversine");
class SchoolService {
    static addSchool(school) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SchoolRepo_1.SchoolRepo.addSchool(school);
        });
    }
    static getSchools(userLat, userLon) {
        return __awaiter(this, void 0, void 0, function* () {
            const schools = yield SchoolRepo_1.SchoolRepo.getSchools();
            return schools
                .map((school) => (Object.assign(Object.assign({}, school), { distance: (0, Haversine_1.GetDistance)(userLat, userLon, school.latitude, school.longitude) })))
                .sort((a, b) => a.distance - b.distance);
        });
    }
}
exports.SchoolService = SchoolService;
