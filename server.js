const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./src/components/db');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

//testroutee
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// API endpoint fr all predictionss
app.get('/api/predictions', (req, res) => {
  connection.query('SELECT * FROM prediction', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }
    res.json(results);
  });
});

// API endpoint dor formula
app.get('/api/predictions/:formula', (req, res) => {
  const formula = req.params.formula;
  connection.query('SELECT * FROM prediction WHERE Material = ?', [formula], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }
    
    if (results.length === 0) {
      res.status(404).json({ error: 'Molecular formula not found' });
      return;
    }
    
    res.json(results[0]);
  });
});

// new predictions
app.post('/api/predictions', (req, res) => {
  const { molecular_formula, temperature } = req.body;
  const query = 'INSERT INTO prediction (Material, Predicted_T_c) VALUES (?, ?)';
  
  connection.query(query, [molecular_formula, temperature], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data' });
      return;
    }
    res.json({ message: 'Prediction added successfully', id: results.insertId });
  });
});

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
