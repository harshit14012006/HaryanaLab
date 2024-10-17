import React, { useState, useEffect } from "react";
import axios from "axios";

const headers = [
  "Sample Date",
  "Report Number",
  "Sample Number",
  "Date Sample",
  "Vehicle Number",
  "Bags",
  "Weight",
  "Moisture",
  "Oil",
  "FFA",
  "Unknown Test"
];

const initialData = [
  {
    "Sample Date": "2024-09-20",
    "Report Number": "RPT-101",
    "Sample Number": "SMP-001",
    "Date Sample": "2024-09-19",
    "Vehicle Number": "ABC-1234",
    Bags: "25",
    Weight: "500kg",
    Moisture: "12%",
    Oil: "3.5%",
    FFA: "1.2%",
    "Unknown Test": "Passed"
  },
  {
    "Sample Date": "2024-09-21",
    "Report Number": "RPT-102",
    "Sample Number": "SMP-002",
    "Date Sample": "2024-09-20",
    "Vehicle Number": "DEF-5678",
    Bags: "30",
    Weight: "600kg",
    Moisture: "13%",
    Oil: "3.8%",
    FFA: "1.5%",
    "Unknown Test": "Pending"
  },
  {
    "Sample Date": "2024-09-22",
    "Report Number": "RPT-103",
    "Sample Number": "SMP-003",
    "Date Sample": "2024-09-21",
    "Vehicle Number": "GHI-9101",
    Bags: "20",
    Weight: "450kg",
    Moisture: "11%",
    Oil: "3.2%",
    FFA: "1.0%",
    "Unknown Test": "Failed"
  },
  {
    "Sample Date": "2024-09-23",
    "Report Number": "RPT-104",
    "Sample Number": "SMP-004",
    "Date Sample": "2024-09-22",
    "Vehicle Number": "JKL-2345",
    Bags: "28",
    Weight: "560kg",
    Moisture: "12.5%",
    Oil: "3.6%",
    FFA: "1.4%",
    "Unknown Test": "Passed"
  },
  {
    "Sample Date": "2024-09-24",
    "Report Number": "RPT-105",
    "Sample Number": "SMP-005",
    "Date Sample": "2024-09-23",
    "Vehicle Number": "MNO-6789",
    Bags: "35",
    Weight: "700kg",
    Moisture: "14%",
    Oil: "3.9%",
    FFA: "1.6%",
    "Unknown Test": "Pending"
  }
];

const RecordReportWithoutSample = () => {
  const [data, setData] = useState(initialData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [partyName, setPartyName] = useState('');
 
  const [error, setError] = useState('');
  const fetchRecords = async () => {
    try {
      // Clear previous error
      setError('');

      // Prepare the payload
      const payload = {
        startDate,
        endDate,
        partyName
      };

      // Send POST request to the API
      const response = await axios.post('http://localhost:3000/records', payload);

      // Set the records in state if response is successful
      setData(response.data);

    } catch (err) {
      console.error('Error fetching records:', err.message);
      setError(err.response ? err.response.data.error : 'Something went wrong');
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-3 border border-gray-300 rounded-md">
              <legend className="text-sm">Reprint</legend>
              <div className="flex justify-center space-x-14">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-4">
                    {/* Enter No. Input */}
                    <div className="flex items-center space-x-10 whitespace-nowrap">
                      {/* From Label and Date Input */}
                      <label htmlFor="fromDate" className="font-medium">
                        From
                      </label>
                      <input
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        className="h-8 p-2 border border-gray-300 rounded-md"
                        onChange={(e)=>{setStartDate(e.target.value)}}
                        // onChange={(e) => {
                        //   HandleChange(e);
                        // }}
                      />
                      {/* From Label and Date Input */}
                      <label htmlFor="fromDate" className="font-medium">
                        To
                      </label>
                      <input
                        type="date"
                        id="fromDate"
                        name="toDate"
                        className="h-8 p-2 border border-gray-300 rounded-md"
                        onChange={(e)=>{setEndDate(e.target.value)}}
                        // onChange={(e) => {
                        //   HandleChange(e);
                        // }}
                      />
                    </div>

                    {/* Fieldset for Search */}
                    <fieldset className="border border-gray-300 p-4 rounded-md">
                      <legend className="font-medium">Search</legend>

                      {/* Flex Container for Labels and Dropdowns */}
                      <div className="flex space-x-6">
                        {/* Party Name Dropdown */}
                        <div className="flex flex-col">
                          <label
                            htmlFor="partyName"
                            className="font-medium mb-2"
                          >
                            Party Name
                          </label>
                          <select
                            id="partyName"
                            name="partyName"
                            className="h-8 p-1 w-52 border border-gray-300 rounded-md"
                            onChange={(e)=>{setPartyName(e.target.value)}}
                          >
                            <option value="">Select Party</option>
                            <option value="party1">Party 1</option>
                            <option value="party2">Party 2</option>
                            <option value="party3">Party 3</option>
                            {/* Add more options as needed */}
                          </select>
                        </div>

                        {/* Another Dropdown Example (e.g., Sample) */}
                        <div className="mt-8">
                          <label htmlFor="SampleName" className="font-medium">
                            City:
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {/* Buttons for Display and Print */}
                  <div className="flex space-x-80 mt-10">
                    <button
                      type="button"
                      className="bg-gray-400 py-1 px-4 rounded-md h-8"
                      onClick={fetchRecords}
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="bg-gray-400 py-1 px-4 rounded-md h-8"
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
              {/* table grid */}
              <div className="relative overflow-x-auto overflow-y-auto h-[290px] w-[870px] mt-3">
  <table className="min-w-full bg-white border border-gray-300 table-auto">
    <thead>
      <tr className="bg-gray-100 border-b border-gray-300">
        {headers.map((header, index) => (
          <th
            key={index}
            className="text-sm text-left border-gray-300 whitespace-nowrap"
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              minWidth: "150px", // Set minimum width for headers
              width: "100px",
            }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {initialData.map((row, i) => (
        <tr
          key={i}
          className="transition-colors duration-300 hover:bg-blue-500 hover:text-white"
        >
          {headers.map((header, j) => (
            <td
              key={j}
              className={`border-gray-300 border text-sm whitespace-nowrap ${
                j < headers.length - 1 ? "pr-0" : ""
              }`}
              style={{ minWidth: "150px" }} // Set minimum width for data cells
            >
              {row[header]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecordReportWithoutSample;
