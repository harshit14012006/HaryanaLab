const db = require("../database/db");

const setItem = (req, res) => {
  try {
  } catch (err) {
    if (err) {
      console.error("Error setting item:", err);
      return res.status(500).json({ message: "Error setting item" });
    }
  }
  const query = `INSERT INTO item(ItemName,Date) VALUES ( ?, ?)`;

  const values = [req.body.name, req.body.date];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Error inserting data" });
    }
    res.status(200).json({
      message: "Analysis record created successfully",
      id: result.insertId,
    });
  });
};

const getItem = (req, res) => {
  db.query("select * from item", (err, result) => {
    if (err) {
      console.error("Error finding data:", err);
      return res.status(500).json({ message: "Error inserting data" });
    }
    res.status(200).json({
      message: "Get data successfully",
      id: result,
    });
  });
  //     res.send({
  //     message: "Working api ",
  //   });
};

module.exports = { setItem, getItem };
