import pool from "../config/db";

export async function createSchoolsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );`
    ;

  try {
    await pool.query(query);
    console.log('Schools Table Created');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

createSchoolsTable();
