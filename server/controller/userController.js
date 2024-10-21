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

exports.addUserByCredit = async (req, res) => {
  console.log(req.body);
  try {
    const { Date, PartyName, Reportno, Credit, Remarks } = req.body;
    if (!Date || !PartyName || !Reportno || !Credit) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const sqlQuery =
      "INSERT INTO ledger (Date, PartyName, ReportNo, Credit, Remarks) VALUES (?,?,?,?,?)";
    db.query(
      sqlQuery,
      [Date, PartyName, Reportno, Credit, Remarks],
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

exports.addUserByDebit = async (req, res) => {
  console.log(req.body);
  try {
    const { Date, PartyName, Reportno, Debit, Remarks } = req.body;
    if (!Date || !PartyName || !Reportno || !Debit) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const sqlQuery =
      "INSERT INTO ledger (Date, PartyName, ReportNo, Debit, Remarks) VALUES (?,?,?,?,?)";
    db.query(
      sqlQuery,
      [Date, PartyName, Reportno, Debit, Remarks],
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
    let sqlQuery;
    console.log(req.params, " At line 55");
    const { Reportno, Date, PartyName } = req.params;
    if (!Date || !PartyName) {
      return res.status(400).json({ error: "Report number is required" });
    }
    if (!Reportno) {
      sqlQuery = "DELETE FROM ledger WHERE Reportno = ? AND Date = ?";
      db.query(sqlQuery, [Reportno, Date], (err, result) => {
        if (err) {
          console.error("Error deleting user:", err);
          return res.status(500).json({ error: "Database delete error" });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
      });
    } else {
      sqlQuery = "DELETE FROM ledger WHERE PartyName = ? AND Date = ?";
      db.query(sqlQuery, [PartyName, Date], (err, result) => {
        if (err) {
          console.error("Error deleting user:", err);
          return res.status(500).json({ error: "Database delete error" });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
      });
    }
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

exports.getUsersByDate = async (req, res) => {
  const { fromDate, toDate } = req.params;
  console.log(fromDate, toDate);
  try {
    const sqlQuery = "SELECT * FROM ledger where Date BETWEEN ? AND ?";
    db.query(sqlQuery, [fromDate, toDate], (err, results) => {
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

exports.deleteUserByCredit = async (req, res) => {
  try {
    let sqlQuery;
    console.log(req.params, " At line 55");
    const { Credit, Date, PartyName } = req.params;
    if (!Date || !PartyName) {
      return res.status(400).json({ error: "Report number is required" });
    }
    sqlQuery = "DELETE FROM ledger WHERE Credit = ?, PartyName= ? AND Date = ?";
    db.query(sqlQuery, [Credit, PartyName, Date], (err, result) => {
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

exports.deleteUserByDebit = async (req, res) => {
  try {
    let sqlQuery;
    console.log(req.params, " At line 55");
    const { Debit, Date, PartyName } = req.params;
    if (!Date || !PartyName) {
      return res.status(400).json({ error: "Report number is required" });
    }
    sqlQuery = "DELETE FROM ledger WHERE Debit = ?, PartyName= ? AND Date = ?";
    db.query(sqlQuery, [Debit, PartyName, Date], (err, result) => {
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

exports.getByCity = async (req, res) => {
  try {
    const { state, city } = req.body;

    // Validate if state and city are provided
    if (!state || !city) {
      return res.status(400).json({ message: "State and city are required" });
    }

    // Query to join ledger and analysis tables based on reportno
    const query = `
      SELECT ledger.* 
      FROM ledger 
      INNER JOIN analysis ON ledger.reportno = analysis.reportno 
      WHERE analysis.state = ? AND analysis.city = ?`;

    // Promisified version of db.query for using async/await
    const queryAsync = (sql, params) => {
      return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    };

    // Execute the query using async/await
    const results = await queryAsync(query, [state, city]);

    // Return the fetched results
    res.json(results);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
};
