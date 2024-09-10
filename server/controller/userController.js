
const db = require('../database/db');
exports.getAllUsers = (req, res) => {
const sqlQuery = 'SELECT * FROM person';
 db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);  // Send the results as JSON response
  });
};
exports.addUser = (req, res) => {
  const { Date,PartyName,Reportno,Amount,Remarks } = req.body;
  if (!Date || !PartyName || !Reportno || !Amount ||!Remarks) {
    return res.status(400).json({ error: 'All fields of required' });
  }
  const sqlQuery = 'INSERT INTO person (Date,PartyName,ReportNo,Amount,Remarks) VALUES (?,?,?,?,?)';

  db.query(sqlQuery, [Date,PartyName,Reportno,Amount,Remarks], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Database insert error');
      return;
    }

    res.status(201).json({
      message: 'User added successfully',
      userId: result.insertId,  
    });
  });
};
exports.deleteUser = (req, res) => {
  const { Reportno } = req.params;

  if (!Reportno) {
    return res.status(400).json({ error: 'Report number is required' });
  }

  const sqlQuery = 'DELETE FROM person WHERE Reportno = ?';

  db.query(sqlQuery, [Reportno], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ error: 'Database delete error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Check if the required fields are provided
  if (!name || !email ) {
    return res.status(400).json({ error: 'id, Name and Email are required' });
  }

  const sqlQuery = 'UPDATE person SET name = ?, email = ? WHERE id = ?';

  // Execute the query to update the user
  db.query(sqlQuery, [name, email,id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Database update error');
      return;
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
};