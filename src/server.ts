
import app from "./app";

const PORT = process.env.PORT || 3000;
import pool from './config/db';

async function startServer() {
        try {
            const client = await pool.connect();
            console.log('Database connected');
            client.release();

            app.listen(PORT,()=>{
                console.log(`Server is running on port ${PORT}`);
            })
            
        } catch (error) {
            console.error('Error connecting to the database: ', error);
            process.exit(1);
        }
}
startServer();