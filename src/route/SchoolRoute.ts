import express, { RequestHandler } from 'express';
import { SchoolController } from '../controllers/SchoolController';

const Schoolrouter = express.Router()

Schoolrouter.post('/addSchool',SchoolController.addSchool);
Schoolrouter.get('/getSchools',SchoolController.getSchool);

export default Schoolrouter;