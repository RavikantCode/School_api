import pool from "../config/db";

export async function createSchoolsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS schools (
      id SERIAL PRIMARY KEY, 
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );`;

  try {
    await pool.query(query);
    console.log("Schools table created successfully");
  } catch (error) {
    console.error("Error creating table:",error);
  }
}

createSchoolsTable();
