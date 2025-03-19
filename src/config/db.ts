const dotenv = require('dotenv'); 
import {Pool} from 'pg';

dotenv.config();

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:true,
})

export default pool;

