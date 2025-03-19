import { schooldto } from "../dto/SchoolDTO";
import pool from "../config/db";
export class SchoolRepo{
    static async addSchool(school:schooldto){
        const {name,address,latitude,longitude} = school;
        const query = `INSERT INTO schools (name,address,latitude,longitude) VALUES ($1,$2,$3,$4)`;
        const values = [name,address,latitude,longitude]
        await pool.query(query,values)
    }

    static async getSchools(){
        const query = `SELECT * FROM schools`
        const {rows} = await pool.query(query)
        return rows;
    }
}