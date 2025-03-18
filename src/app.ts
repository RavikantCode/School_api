import express from 'express';
import dotenv from 'dotenv';
import Schoolrouter from './route/SchoolRoute';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/v1', Schoolrouter);

export default app;