import React, { useState } from "react";

const headers = ["Entry Date", "Report Number", "Amount", "Remarks"];

const initialData = [
  {
    entryDate: "2024-09-20",
    reportNumber: "RN12345",
    amount: "-1500",
    remarks: "Paid",
  },
  {
    entryDate: "2024-09-21",
    reportNumber: "RN12346",
    amount: "-2000",
    remarks: "Pending",
  },
  {
    entryDate: "2024-09-22",
    reportNumber: "RN12347",
    amount: "-1750",
    remarks: "Paid",
  },
  {
    entryDate: "2024-09-23",
    reportNumber: "RN12348",
    amount: "-3000",
    remarks: "Overdue",
  },
  {
    entryDate: "2024-09-24",
    reportNumber: "RN12349",
    amount: "-500",
    remarks: "Paid",
  },
  {
    entryDate: "2024-09-25",
    reportNumber: "RN12350",
    amount: "-1000",
    remarks: "Pending",
  },
];

const LedgerReport = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 border border-gray-300 rounded-md">
              <legend className="text-sm">Ledger Report</legend>
              <div className="flex justify-center space-x-14">
                <div className="flex items-center space-x-6">
                  <label htmlFor="fromDate" className="font-medium">
                    From
                  </label>
                  <input
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    required
                    className="h-5 p-2 border border-gray-300"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="toDate" className="font-medium ">
                    To
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    name="toDate"
                    required
                    className="h-5 p-2 border border-gray-300"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-2 mr-24 ">
                <button
                  type="submit"
                  className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                >
                  Display
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-36">
                <div className="flex items-center space-x-4">
                  <label htmlFor="party" className="font-medium ">
                    Party
                  </label>
                  <input
                    type="text"
                    id="party"
                    name="party"
                    required
                    className="h-5 p-2 border border-gray-300"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="city" className="font-medium ">
                    City:
                  </label>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="totalSamples" className="font-medium ">
                    Total no. of samples:
                  </label>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="openingBalance" className="font-medium ">
                    Opening balance:
                  </label>
                </div>
              </div>
              {/* table grid */}

              <div className="relative overflow-x-auto overflow-y-auto h-[320px] w-[850px]">
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
                width: "150px",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {initialData.map((row, i) => (
          <tr key={i} className="transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            <td className="border-gray-300 border text-sm whitespace-nowrap" style={{ minWidth: "150px" }}>
              {row.entryDate}
            </td>
            <td className="border-gray-300 border text-sm whitespace-nowrap" style={{ minWidth: "150px" }}>
              {row.reportNumber}
            </td>
            <td className="border-gray-300 border text-sm whitespace-nowrap" style={{ minWidth: "150px" }}>
              {row.amount}
            </td>
            <td className="border-gray-300 border text-sm whitespace-nowrap" style={{ minWidth: "150px" }}>
              {row.remarks}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex-1">
                  <label htmlFor="totalAmount" className="block font-medium ">
                    Total Amount
                  </label>
                </div>
                <div className="flex-1">
                  <label htmlFor="paidAmount" className="block font-medium ">
                    Paid Amount
                  </label>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="openingBalance"
                    className="block font-medium "
                  >
                    Balance
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                >
                  Print
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LedgerReport;
