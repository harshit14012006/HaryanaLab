import React, { useState } from "react";

const headers = [
  "Sample1",
  "Sample2",
  "Sample3",
  "Sample4",
  "Sample5",
  "Sample6"
];

const initialData = [
  {
    Sample1: "Harshit",
    Sample2: "12",
    Sample3: "Sample Data 1",
    Sample4: "Sample Data 2",
    Sample5: "Sample Data 3",
    Sample6: "Sample Data 4"
  },
  {
    Sample1: "Beta Ltd",
    Sample2: "868",
    Sample3: "Floor 2",
    Sample4: "Building B",
    Sample5: "Opposite Beta Mall",
    Sample6: "New York"
  },
  {
    Sample1: "Gamma Inc.",
    Sample2: "432",
    Sample3: "Office Suite",
    Sample4: "Building C",
    Sample5: "Near Gamma Park",
    Sample6: "Los Angeles"
  },
  {
    Sample1: "Delta Corp.",
    Sample2: "563",
    Sample3: "Warehouse 4",
    Sample4: "Sector A",
    Sample5: "Delta Industrial Area",
    Sample6: "Chicago"
  },
  {
    Sample1: "Epsilon LLC",
    Sample2: "789",
    Sample3: "Showroom",
    Sample4: "Commercial Plaza",
    Sample5: "Opposite Epsilon Tower",
    Sample6: "San Francisco"
  },
  {
    Sample1: "Zeta Co.",
    Sample2: "923",
    Sample3: "Factory 5",
    Sample4: "Sector Z",
    Sample5: "Zeta Industrial Hub",
    Sample6: "Houston"
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle"
  },
  {
    Sample1: "Alpha Tech",
    Sample2: "568",
    Sample3: "Tech Park",
    Sample4: "Building A",
    Sample5: "Alpha Valley",
    Sample6: "Austin"
  },
  {
    Sample1: "Sigma Industries",
    Sample2: "111",
    Sample3: "Production Unit",
    Sample4: "Industrial Zone",
    Sample5: "Sigma Estate",
    Sample6: "Boston"
  },
  {
    Sample1: "Theta Enterprises",
    Sample2: "643",
    Sample3: "Corporate Office",
    Sample4: "Tower 9",
    Sample5: "Theta Business District",
    Sample6: "Miami"
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

          <div>
            <div className="container mx-auto">
              <div className="relative overflow-x-auto overflow-y-auto h-[400px] w-[400px]">
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
                    {data.map((row, i) => (
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
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default LedgerEntry;
