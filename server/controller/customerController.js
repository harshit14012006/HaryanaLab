// /controller/customerController.js
const db = require('../database/db');
const createCustomer = (req, res) => {
  const {
    Partyname, Address1, Address2, Landmark, State, Pincode, City, District,
    Printname, Landline1, Landline2, Landline3, Mobile1, Mobile2, Mobile3,
    Fax, Email, Website, Openingbalance, Name, Designation, Remarks, Remarks1, Remarks2
  } = req.body;

  const query = `INSERT INTO customer (
    Partyname, Address1, Address2, Landmark, State, Pincode, City, District,
    Printname, Landline1, Landline2, Landline3, Mobile1, Mobile2, Mobile3,
    Fax, Email, Website, Openingbalance, Name, Designation, Remarks, Remarks1, Remarks2
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)`;
  
  const values = [
    Partyname, Address1, Address2, Landmark, State, Pincode, City, District,
    Printname, Landline1, Landline2, Landline3, Mobile1, Mobile2, Mobile3,
    Fax, Email, Website, Openingbalance, Name, Designation, Remarks, Remarks1, Remarks2
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Error inserting data' });
    }
    res.status(201).json({ message: 'Customer created successfully', id: result.insertId });
  });
};
const getAllCustomers = (req, res) => {
  const sqlQuery = 'SELECT * FROM customer';

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Database query error');
      return;
    }

    res.json(results);  // Send the results as JSON response
  });
};
   
const updateCustomer = (req, res) => {
  const {
    Partyname, Address1, Address2, Landmark, State, Pincode, City, District,
    Printname, Landline1, Landline2, Landline3, Mobile1, Mobile2, Mobile3,
    Fax, Email, Website, Openingbalance, Name, Designation, Remarks, Remarks1, Remarks2
  } = req.body;

  const { Partyid } = req.params;

  const query = `UPDATE customer SET 
    Partyname = ?, Address1 = ?, Address2 = ?, Landmark = ?, State = ?, Pincode = ?, City = ?, District = ?,
    Printname = ?, Landline1 = ?, Landline2 = ?, Landline3 = ?, Mobile1 = ?, Mobile2 = ?, Mobile3 = ?,
    Fax = ?, Email = ?, Website = ?, Openingbalance = ?, Name = ?, Designation = ?, Remarks = ?, Remarks1 = ?, Remarks2 = ?
  WHERE Partyid = ?`;

  const values = [
    Partyname, Address1, Address2, Landmark, State, Pincode, City, District,
    Printname, Landline1, Landline2, Landline3, Mobile1, Mobile2, Mobile3,
    Fax, Email, Website, Openingbalance, Name, Designation, Remarks, Remarks1, Remarks2, Partyid
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).json({ message: 'Error updating data' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer updated successfully' });
  });
};
const deleteCustomer = (req, res) => {
  const { Partyid } = req.params;

  const query = `DELETE FROM customer WHERE Partyid = ?`;

  db.query(query, [Partyid], (err, result) => {
    if (err) {
      console.error('Error deleting customer:', err);
      return res.status(500).json({ message: 'Error deleting customer' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  });
};
module.exports = {
  createCustomer,getAllCustomers,updateCustomer,deleteCustomer
};