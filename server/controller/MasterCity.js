const db = require("../database/db");

const setCity = async (req, res) => {
  try {
    const query = `INSERT INTO mastercity(State,City) VALUES ( ?, ?)`;

    const values = [req.body.state, req.body.city];
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
  } catch (err) {
    err && console.log(err);
  }
};

const getCity = (req, res) => {
  db.query("select * from mastercity", (err, result) => {
    if (err) {
      console.error("Error finding data:", err);
      return res.status(500).json({ message: "Error inserting data" });
    }
    res.status(200).json({
      message: "Get data successfully",
      id: result,
    });
  });
};

module.exports = { setCity, getCity };
