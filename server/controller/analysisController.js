// /controller/analysisController.js
const db = require('../database/db');

// Create a new analysis record
const createAnalysis = (req, res) => {
  const {
    Reportno, Sampleno, Billeddate, Dated, Selected, From, Station, Moisture, Oil, FFA, Time,
    Code, Date, Vechileno, Bags, Weight, Itemcategory, Remarks, Signature
  } = req.body;

  const query = `INSERT INTO analysis (
    Reportno, Sampleno, Billeddate, Dated, Selected, From, Station, Moisture, Oil, FFA, Time,
    Code, Date, Vechileno, Bags, Weight, Itemcategory, Remarks, Signature
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    Reportno, Sampleno, Billeddate, Dated, Selected, From, Station, Moisture, Oil, FFA, Time,
    Code, Date, Vechileno, Bags, Weight, Itemcategory, Remarks, Signature
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Error inserting data' });
    }
    res.status(201).json({ message: 'Analysis record created successfully', id: result.insertId });
  });
};

// Get all analysis records
const getAnalysisRecords = (req, res) => {
  const query = 'SELECT * FROM analysis';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ message: 'Error fetching data' });
    }
    res.status(200).json(results);
  });
};

module.exports = { createAnalysis , getAnalysisRecords };
