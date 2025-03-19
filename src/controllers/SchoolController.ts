import { schoolDTO } from "../dto/SchoolDTO";
import { SchoolService } from "../services/SchoolService";
import { Request, RequestHandler, Response } from 'express';

export class SchoolController{
    static  addSchool:RequestHandler=async(req:Request,res:Response):Promise<any>=>{
        try {
            const data = req.body;
            const validateData = schoolDTO.safeParse(data);

            if(validateData.success){
                await SchoolService.addSchool(validateData.data);
                return res.status(200).json({
                    message:"School added successfully"
                })
            }else{
                return res.status(400).json({message:validateData.error.errors[0].message})
            }

        } catch (error:any) {
            return res.status(400).json({
                error:error.message || "Something went wrong"
            })
        }
    }

    static getSchool:RequestHandler=async(req:Request,res:Response):Promise<any>=>{
        const {latitude,longitude} = req.body;
  
        
        const schools = await SchoolService.getSchools(latitude,longitude);
        return res.status(200).json({
            schools
        })
    }
}