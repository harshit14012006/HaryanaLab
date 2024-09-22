import React, { useState } from "react";

const headers = [
  "Entry date",
  "Report Number",
  "Amount",
  "Remarks"
];

const initialData = [
  {
    "Entry date": "2024-08-01",
    "Report Number": "1001",
    Amount: "-500",
    Remarks: "Sample remark 1"
  },
  {
    "Entry date": "2024-08-02",
    "Report Number": "1002",
    Amount: "-700",
    Remarks: "Sample remark 2"
  },
  {
    "Entry date": "2024-08-03",
    "Report Number": "1003",
    Amount: "-300",
    Remarks: "Sample remark 3"
  },
  {
    "Entry date": "2024-08-04",
    "Report Number": "1004",
    Amount: "-600",
    Remarks: "Sample remark 4"
  },
  {
    "Entry date": "2024-08-05",
    "Report Number": "1005",
    Amount: "-400",
    Remarks: "Sample remark 5"
  }
];


function LedgerEntry() {
  const [data, setData] = useState(initialData);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-4">
        <div className="flex items-center justify-center h-24 pb-4 mb-4 text-4xl font-bold text-center border border-gray-300">
          Ledger Entry
        </div>
        <form>
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
                  required
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
                  <input
                    type="text"
                    id="partyname"
                    required
                    className="flex-grow h-5 px-2 py-1 border"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="reportno" className="w-1/3 text-sm">
                    Report No.
                  </label>
                  <input
                    type="number"
                    id="reportno"
                    required
                    className="flex-grow h-5 px-2 py-1 border"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="amount" className="w-1/3 text-sm">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
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
                    required
                    className="flex-grow h-5 px-2 py-1 border"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </form>
        <div className="mt-5">
          <fieldset className="p-4 border rounded">
            <legend className="mb-4 text-sm font-normal">Control Panel</legend>
            <div className="flex justify-between">
              <button className="h-8 p-1 px-4 bg-gray-400 rounded">
                Add New
              </button>
              <button className="h-8 px-4 py-1 bg-gray-400 rounded">
                Delete
              </button>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="flex-1 p-2">
        <fieldset className="flex flex-col w-full h-full p-4 border">
          <legend className="font-normal">Day Cash Details</legend>
          <div className="flex flex-col mb-4 space-y-2">
            <div>
              <span>Party:</span>
            </div>
            <div>
              <span>City:</span>
            </div>
          </div>

         
  <div className="mx-auto">
    <div className="relative overflow-x-auto overflow-y-auto h-[400px] w-[430px]">
      <table className="bg-white border border-gray-300 table-auto">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-sm text-left border-gray-300 whitespace-nowrap"
                style={{
                  fontSize: "13px",
                  fontWeight: "normal",
                  width: "100px"
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {initialData.map((row, i) => (
            <tr key={i}>
              {headers.map((header, j) => (
                <td
                  key={j}
                  className="border-gray-300 border text-sm whitespace-nowrap pr-4 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                >
                  {row[header]}
                </td>
              ))}
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
