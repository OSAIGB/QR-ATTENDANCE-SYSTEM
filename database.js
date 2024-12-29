console.log('Starting the script...'); 
const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',     // Replace with your database host
  database: 'test',      // Replace with your database name
  password: '12346', // Replace with your PostgreSQL password
  port: 5432,            // Default PostgreSQL port
});

// Query to fetch data from the first table
const fetchData = async () => {
  try {
    const result = await pool.query('SELECT first_name, surname FROM african_names1;');
    console.log('Names from african_names1:', result.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
  } finally {
    // Close the database connection
    await pool.end();
  }
};

fetchData();
