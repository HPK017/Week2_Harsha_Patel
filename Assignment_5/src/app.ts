import express = require('express');

import pool from './pgConfig';

const app = express();

async function checkTableExists(tableName: any) {
        const query = `
            SELECT 1 FROM information_schema.tables
            WHERE table_name = $1
        `;
        const result = await pool.query(query, [tableName]);
        return result.rowCount; 
}

async function createTable() {
    const createTableQuery = `
        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
        );
    `;
        await pool.query(createTableQuery);
        console.log('posts table created successfully.');
}

async function insertUser(username: string, email: any) {
        const tableExists = await checkTableExists('posts');
        if (!tableExists) {
            await createTable();
        }

        const insertQuery = `
            INSERT INTO posts (username, email)
            VALUES ($1, $2) RETURNING *;
        `;
        const result = await pool.query(insertQuery, [username, email]);
        console.log('Inserted user:', result.rows[0]);
}

async function main() {
    
        await pool.connect();
        console.log('Connected to the database.');

        //  Insert a user
        await insertUser('john_doe', 'john.doe@gmail.com');
        await insertUser('harsha', 'patel@gmail.com')
        await insertUser('suma', 'suma@gmail.com')
        await insertUser('ryan', 'ryan@gmail.com')

    
}

// Run the main function
main()

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port`);
});

    