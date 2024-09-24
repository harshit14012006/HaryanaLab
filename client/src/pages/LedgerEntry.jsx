import React, { useState, useEffect } from "react";
import axios from "axios";

function LedgerEntry() {
  const [partyNames, setPartyNames] = useState([]); // Party names from backend
  const [selectedParty, setSelectedParty] = useState(""); // Selected party name
  const [selectedCity, setSelectedCity] = useState(""); // Corresponding city of the selected party
  const [ledgerEntries, setLedgerEntries] = useState([]); // Ledger entries (for the table)
  const [formData, setFormData] = useState({
    date: "",
    reportNumber: "",
    amount: "",
    remarks: ""
  });

  // Fetch party names and cities from backend
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers") // API endpoint to fetch Partyname and City
      .then((response) => {
        setPartyNames(response.data); // Set the fetched party names into state
      })
      .catch((error) => {
        console.error("Error fetching party names:", error);
      });
  }, []);

  // Handle party name selection
  const handlePartyChange = (event) => {
    const selectedPartyName = event.target.value;
    setSelectedParty(selectedPartyName);

    // Find the selected party's city
    const selectedPartyObj = partyNames.find(
      (party) => party.Partyname === selectedPartyName
    );
    if (selectedPartyObj) {
      setSelectedCity(selectedPartyObj.City); // Set city based on selected party
    } else {
      setSelectedCity(""); // Reset if no party selected
    }
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle Add New button click (Submit)
const handleAddNew = async () => {
  if (!selectedParty || !formData.date || !formData.reportNumber || !formData.amount || !formData.remarks) {
    return;
  }

  const newEntry = {
    Date: formData.date,
    PartyName: selectedParty,
    Reportno: formData.reportNumber,
    Amount: formData.amount,
    Remarks: formData.remarks,
  };

  try {
    // Send POST request to backend
    const response = await axios.post("http://localhost:3001/api/users", newEntry);
    alert(response.data.message);

    // Add new entry to the table
    setLedgerEntries([...ledgerEntries, newEntry]);

    // Reset form fields (commented out to keep fields filled)
    // setFormData({
    //   date: "",
    //   reportNumber: "",
    //   amount: "",
    //   remarks: "",
    // });
    // setSelectedParty("");
    // setSelectedCity("");
  } catch (error) {
    console.error("Error adding user:", error);
    alert("Error adding new entry");
  }
};


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Ledger Form Section */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-center h-24 pb-4 mb-4 text-4xl font-bold text-center border border-gray-300">
          Ledger Entry
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <fieldset className="p-4 border rounded">
              <legend className="mb-2 text-sm font-normal">Day Details</legend>
              <div className="flex items-center space-x-4">
                <label htmlFor="date" className="w-1/3 text-sm">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  required
                  onChange={handleInputChange}
                  className="flex-grow h-5 px-2 py-1 border"
                />
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset className="p-4 border rounded">
              <legend className="mb-2 text-sm font-normal">Ledger Details</legend>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="partyname" className="w-1/3 text-sm">
                    Party Name
                  </label>
                  <select
                    id="partyname"
                    required
                    value={selectedParty}
                    onChange={handlePartyChange} // Capture the change
                    className="flex-grow h-5 border"
                  >
                    <option value="">Select Party Name</option>
                    {partyNames.map((party, index) => (
                      <option key={index} value={party.Partyname}>
                        {party.Partyname}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <label htmlFor="reportNumber" className="w-1/3 text-sm">
                    Report No.
                  </label>
                  <select
                    id="reportNumber"
                    value={formData.reportNumber}
                    onChange={handleInputChange}
                    required
                    className="flex-grow h-5 border"
                  >
                    <option value="">Select Report No.</option>
                    <option value="1">Report No. 1</option>
                    <option value="2">Report No. 2</option>
                    <option value="3">Report No. 3</option>
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <label htmlFor="amount" className="w-1/3 text-sm">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    className="flex-grow h-5 px-2 py-1 border"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="remarks" className="w-1/3 text-sm">
                    Remarks
                  </label>
                  <input
                    type="text"
                    id="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    required
                    className="flex-grow h-5 px-2 py-1 border"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </form>

        {/* Control Panel Buttons */}
        <div className="mt-5">
          <fieldset className="p-4 border rounded">
            <legend className="mb-4 text-sm font-normal">Control Panel</legend>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleAddNew}
                className="h-8 p-1 px-4 bg-gray-400 rounded"
              >
                Add New
              </button>
              <button type="button" className="h-8 px-4 py-1 bg-gray-400 rounded">
                Delete
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Ledger Table Section */}
      <div className="flex-1 p-2">
        <fieldset className="flex flex-col w-full h-full p-4 border">
          <legend className="font-normal">Day Cash Details</legend>

          {/* Display selected party and city */}
          <div className="flex flex-col mb-4 space-y-2">
            <div>
              <span>Party: {selectedParty || "N/A"}</span>
            </div>
            <div>
              <span>City: {selectedCity || "N/A"}</span>
            </div>
          </div>

          {/* Ledger Table */}
          <div className="mx-auto">
            <div className="relative overflow-x-auto overflow-y-auto h-[400px] w-[430px]">
              <table className="bg-white border border-gray-300 table-auto">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    {["Entry Date", "Report Number", "Amount", "Remarks"].map(
                      (header, index) => (
                        <th
                          key={index}
                          className="text-sm text-left border-gray-300 whitespace-nowrap"
                          style={{
                            fontSize: "13px",
                            fontWeight: "normal",
                            width: "100px",
                          }}
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {ledgerEntries
                    .filter(entry => entry.PartyName === selectedParty) // Filter entries by selected party
                    .map((entry, i) => (
                      <tr key={i}>
                        <td className="pr-4 text-sm transition-colors duration-300 border border-gray-300 whitespace-nowrap hover:bg-blue-500 hover:text-white">
                          {entry.Date}
                        </td>
                        <td className="pr-4 text-sm transition-colors duration-300 border border-gray-300 whitespace-nowrap hover:bg-blue-500 hover:text-white">
                          {entry.Reportno}
                        </td>
                        <td className="pr-4 text-sm transition-colors duration-300 border border-gray-300 whitespace-nowrap hover:bg-blue-500 hover:text-white">
                          {entry.Amount}
                        </td>
                        <td className="pr-4 text-sm transition-colors duration-300 border border-gray-300 whitespace-nowrap hover:bg-blue-500 hover:text-white">
                          {entry.Remarks}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default LedgerEntry;
