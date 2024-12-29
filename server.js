const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Allow requests from your frontend
const path = require('path'); // Add path module

const app = express();
const port = 4000;

// Enable CORS to allow frontend to access backend
app.use(cors());
app.use(express.json()); // Add middleware to parse JSON

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',      // Your PostgreSQL username
  host: 'localhost',     // Your database host
  database: 'test',      // Your database name
  password: '12346',     // Your PostgreSQL password
  port: 5432,            // Default PostgreSQL port
});

// Route to fetch data from 'african_names1' table
app.get('/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT first_name, surname, registration_number FROM african_names1;');
    console.log('Data fetched from database:', result.rows); // Log the data
    res.json(result.rows); // Send data as JSON to the frontend
  } catch (err) {
    console.error('Error fetching data:', err.message);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Route to mark a student as present
app.post('/mark-present', async (req, res) => {
  const { registration_number, first_name, surname } = req.body;
  try {
    await pool.query(
      'INSERT INTO attendance (registration_number, first_name, surname, date) VALUES ($1, $2, $3, NOW())',
      [registration_number, first_name, surname]
    );
    res.status(200).json({ message: 'Student marked as present' });
  } catch (err) {
    console.error('Error marking student as present:', err.message);
    res.status(500).json({ error: 'Failed to mark student as present' });
  }
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
