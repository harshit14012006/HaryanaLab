const db = require("../database/db");

exports.getAllUsers = async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM ledger";
    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Database query error");
      }
      res.json(results); // Send the results as JSON response
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};

exports.addUser = async (req, res) => {
  try {
    const { Date, PartyName, Reportno, Amount, Remarks } = req.body;
    if (!Date || !PartyName || !Reportno || !Amount || !Remarks) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const sqlQuery =
      "INSERT INTO ledger (Date, PartyName, ReportNo, Amount, Remarks) VALUES (?,?,?,?,?)";
    db.query(
      sqlQuery,
      [Date, PartyName, Reportno, Amount, Remarks],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).send("Database insert error");
        }

        res.status(201).json({
          message: "User added successfully",
          userId: result.insertId,
        });
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { Reportno } = req.params;

    if (!Reportno) {
      return res.status(400).json({ error: "Report number is required" });
    }

    const sqlQuery = "DELETE FROM ledger WHERE Reportno = ?";
    db.query(sqlQuery, [Reportno], (err, result) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ error: "Database delete error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted successfully" });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }

    const sqlQuery = "UPDATE ledger SET name = ?, email = ? WHERE id = ?";

    db.query(sqlQuery, [name, email, id], (err, result) => {
      if (err) {
        console.error("Error updating user:", err);
        return res.status(500).send("Database update error");
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User updated successfully" });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};

exports.getUsersByName = async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM ledger where PartyName = ? ";
    db.query(sqlQuery, req.params.name, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Database query error");
      }
      results.length > 0
        ? res.json(results)
        : res.send({ message: "Not Found" }); // Send the results as JSON response
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};
