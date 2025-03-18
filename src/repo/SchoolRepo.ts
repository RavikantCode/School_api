import { schooldto } from "../dto/SchoolDTO";
import pool from "../config/db";
export class SchoolRepo{
    static async addSchool(school:schooldto){
        const {name,address,latitude,longitude} = school;
        const query = `INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)`;
        const values = [name,address,latitude,longitude]
        await pool.execute(query,values)
    }

    static async getSchools(){
        const query = `SELECT * FROM schools`
        const [schools] = await pool.execute(query)
        return schools
    }
}