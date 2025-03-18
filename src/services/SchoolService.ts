import { schooldto } from "../dto/SchoolDTO";
import { SchoolRepo } from "../repo/SchoolRepo";
import { GetDistance } from "../utils/Haversine";

export class SchoolService{
    static async addSchool(school:schooldto){
        return await SchoolRepo.addSchool(school)
    }
    static async getSchools(userLat:number,userLon:number){
        const schools =  await SchoolRepo.getSchools();
        return schools
        .map((school: any) => ({
          ...school,
          distance: GetDistance(userLat, userLon, school.latitude, school.longitude),
        }))
        .sort((a:{distance:number}, b:{distance:number}) => a.distance - b.distance);
    }
}