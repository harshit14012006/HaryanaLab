import React, { useState, useEffect } from "react";
import axios from "axios";

const headers = [
  "Entry Date",
  "Report Number",
  "Amount",
  "Remarks"
];

const initialData = [
  {
    "Entry Date": "2024-09-15",
    "Report Number": "RPT-001",
    Amount: "$500",
    Remarks: "Initial Payment"
  },
  {
    "Entry Date": "2024-09-16",
    "Report Number": "RPT-002",
    Amount: "$750",
    Remarks: "Second Installment"
  },
  {
    "Entry Date": "2024-09-17",
    "Report Number": "RPT-003",
    Amount: "$1200",
    Remarks: "Final Payment"
  },
  {
    "Entry Date": "2024-09-18",
    "Report Number": "RPT-004",
    Amount: "$300",
    Remarks: "Refund"
  },
  {
    "Entry Date": "2024-09-19",
    "Report Number": "RPT-005",
    Amount: "$450",
    Remarks: "Overdue Payment"
  }
];

function CashVoucher() {
  const [data, setData] = useState(initialData);
  const [vouchers, setVouchers] = useState([]); // New state for vouchers
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null);
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [date, setDate] = useState("");

  // Fetch the party names from the backend
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/customers");
        setParties(response.data); // Assuming the response contains the party data
      } catch (error) {
        console.error("Error fetching parties:", error);
      }
    };
    fetchParties();
  }, []);

  // Fetch cash vouchers based on selected party
  useEffect(() => {
    const fetchVouchers = async () => {
      if (selectedParty) {
        try {
          const response = await axios.get(`http://localhost:3001/api/cashvouchers?partyname=${selectedParty.Partyname}`);
          setVouchers(response.data); // Assuming the response contains the voucher data
        } catch (error) {
          console.error("Error fetching vouchers:", error);
        }
      } else {
        setVouchers([]); // Reset vouchers if no party is selected
      }
    };
    fetchVouchers();
  }, [selectedParty]); // Re-run this effect when selectedParty changes

  // Handle party selection
  const handlePartySelect = (event) => {
    const partyName = event.target.value;
    const party = parties.find((p) => p.Partyname === partyName);
    setSelectedParty(party);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newVoucher = {
      date,
      partyname: selectedParty?.Partyname || "",
      amount,
      remarks
    };

    try {
      const response = await axios.post("http://localhost:3001/api/cashvoucher", newVoucher);
      alert(response.data.message); // Show a success message
    } catch (error) {
      console.error("Error creating voucher:", error);
      alert("Error creating cash voucher");
    }
  };

  return (
    <div className="box-border flex justify-between bg-gray-100 ">
      <div className="flex flex-col items-center flex-1 h-full p-3 mx-2 bg-gray-100 rounded-lg">
        <div className="w-full max-w-lg p-4 mb-8 text-4xl font-bold text-center border border-gray-300 rounded-lg">
          Cash Voucher
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <fieldset className="box-border p-2 mb-3 border border-gray-300 rounded-lg h-28">
            <legend className="mb-4 font-normal">Day Detail</legend>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Date:
              </label>
              <input
                type="date"
                required
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md"
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset className="box-border p-6 mb-8 border border-gray-300 rounded-lg">
            <legend className="mb-4 font-normal">Voucher Details</legend>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Party Name:
              </label>
              <div className="relative flex-1">
                <select
                  required
                  className="box-border w-full h-8 p-1 border border-gray-300 rounded-md appearance-none cursor-pointer"
                  onChange={handlePartySelect}
                >
                  <option value="">Select Party</option>
                  {parties.map((party, index) => (
                    <option key={index} value={party.Partyname}>
                      {party.Partyname}
                    </option>
                  ))}
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Amount:
              </label>
              <input
                type="number"
                required
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Remarks:
              </label>
              <input
                type="text"
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md"
                pattern=".{3,}"
                title="Remarks should be at least 3 characters long"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="flex justify-between w-full">
            <button
              type="submit"
              className="h-8 px-6 py-1 bg-gray-300 border-none rounded-md cursor-pointer"
            >
              Add
            </button>
            <button
              type="button"
              className="h-8 px-6 py-1 bg-gray-300 border-none rounded-md cursor-pointer"
            >
              Delete
            </button>
          </div>
        </form>
      </div>

      <div className="box-border flex flex-col items-center flex-1 p-3 mx-2 bg-gray-100 rounded-lg">
        <div className="w-full">
          <u>
            <h1 className="mb-1 text-left">Party: {selectedParty ? selectedParty.Partyname : "N/A"}</h1>
          </u>
        </div>
        <div className="w-full">
          <u>
            <h1 className="mb-2 text-left">City: {selectedParty ? selectedParty.City : "N/A"}</h1>
          </u>
        </div>
        <div className="w-full">
          <h7 className="text-left">Day Cash Details</h7>
        </div>
        <div>
          <div className="mx-auto">
            <div className="relative overflow-x-auto overflow-y-auto h-[453px] w-[400px]">
              <table className="bg-white border border-gray-300 table-auto">
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th key={index} className="px-2 py-1 border-b border-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {vouchers.length > 0 ? (
                    vouchers.map((voucher, index) => (
                      <tr key={index}>
                        <td className="px-2 py-1 border-b border-gray-300">{voucher.EntryDate}</td>
                        <td className="px-2 py-1 border-b border-gray-300">{voucher.ReportNumber}</td>
                        <td className="px-2 py-1 border-b border-gray-300">{voucher.Amount}</td>
                        <td className="px-2 py-1 border-b border-gray-300">{voucher.Remarks}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={headers.length} className="px-2 py-1 text-center border-b border-gray-300">
                        No vouchers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashVoucher;
