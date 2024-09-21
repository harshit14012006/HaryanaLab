// /controller/analysisController.js
const db = require("../database/db");

// Function to create a new analysis record
const createAnalysis = (req, res) => {
  const {
    Samplename,
    Billeddate,
    Dated,
    Selected,
    From,
    Station,
    Crude,
    Moisture,
    Oil,
    FFA,
    Time,
    Code,
    Date,
    Vechileno,
    Bags,
    Weight,
    Itemcategory,
    Remarks,
    Signature,
  } = req.body;

  const query = `INSERT INTO analysis ( Samplename, Billeddate, Dated, Selected, \`From\`, Station,Crude, Moisture, Oil, FFA, \`Time\`,
    Code, \`Date\`, Vechileno, Bags, Weight, Itemcategory, Remarks, Signature
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    Samplename,
    Billeddate,
    Dated,
    Selected,
    From,
    Station,
    Crude,
    Moisture,
    Oil,
    FFA,
    Time,
    Code,
    Date,
    Vechileno,
    Bags,
    Weight,
    Itemcategory,
    Remarks,
    Signature,
  ];

  try {
    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ message: "Error inserting data" });
      }
      res
        .status(201)
        .json({
          message: "Analysis record created successfully",
          id: result.insertId,
        });
      console.log(req.body);
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all analysis records
const getAnalysis = (req, res) => {
  const { Reportno } = req.params;

  try {
    const query = `SELECT * FROM analysis WHERE Reportno = ?`;

    db.query(query, [Reportno], (err, results) => {
      if (err) {
        console.error("Error retrieving data:", err);
        return res.status(500).json({ message: "Error retrieving data" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: "No records found for the given reportno" });
      }

      res
        .status(200)
        .json({ message: "Data retrieved successfully", data: results });
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to update an existing analysis record based on Reportno from query params
const updateAnalysis = (req, res) => {
  const {
    Samplename,
    Billeddate,
    Dated,
    Selected,
    From,
    Station,
    Moisture,
    Oil,
    FFA,
    Time,
    Code,
    Date,
    Vechileno,
    Bags,
    Weight,
    Itemcategory,
    Remarks,
    Signature,
  } = req.body;
  console.log(req.params);
  const { Reportno } = req.params; // Get the Reportno from query parameters

  const query = `UPDATE analysis SET
    Samplename = ?, Billeddate = ?, Dated = ?, Selected = ?, \`From\` = ?, Station = ?, 
    Moisture = ?, Oil = ?, FFA = ?, \`Time\` = ?, Code = ?, \`Date\` = ?, Vechileno = ?, 
    Bags = ?, Weight = ?, Itemcategory = ?, Remarks = ?, Signature = ?
    WHERE Reportno = ?`;

  const values = [
    Samplename,
    Billeddate,
    Dated,
    Selected,
    From,
    Station,
    Moisture,
    Oil,
    FFA,
    Time,
    Code,
    Date,
    Vechileno,
    Bags,
    Weight,
    Itemcategory,
    Remarks,
    Signature,
    Reportno,
  ];

  try {
    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ message: "Error updating data" });
      }
      if (result.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "No record found with the provided Reportno" });
      }
      res.status(200).json({ message: "Analysis record updated successfully" });
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createAnalysis, getAnalysis, updateAnalysis };
