import React, { useState } from "react";

const headers = [
  "Sample1",
  "Sample2",
  "Sample3",
  "Sample4",
  "Sample5",
  "Sample6",
  "Sample7",
  "Sample8",
  "Sample9",
  "Sample10",
  "Sample11",
];

const initialData = [
  {
    Sample1: "Harshit",
    Sample2: "12",
    Sample3: "Sample Data 1",
    Sample4: "Sample Data 2",
    Sample5: "Sample Data 3",
    Sample6: "Sample Data 4",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Beta Ltd",
    Sample2: "868",
    Sample3: "Floor 2",
    Sample4: "Building B",
    Sample5: "Opposite Beta Mall",
    Sample6: "New York",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Gamma Inc.",
    Sample2: "432",
    Sample3: "Office Suite",
    Sample4: "Building C",
    Sample5: "Near Gamma Park",
    Sample6: "Los Angeles",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Delta Corp.",
    Sample2: "563",
    Sample3: "Warehouse 4",
    Sample4: "Sector A",
    Sample5: "Delta Industrial Area",
    Sample6: "Chicago",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Epsilon LLC",
    Sample2: "789",
    Sample3: "Showroom",
    Sample4: "Commercial Plaza",
    Sample5: "Opposite Epsilon Tower",
    Sample6: "San Francisco",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Zeta Co.",
    Sample2: "923",
    Sample3: "Factory 5",
    Sample4: "Sector Z",
    Sample5: "Zeta Industrial Hub",
    Sample6: "Houston",
    Sample7: "Sample Data 5",
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
  {
    Sample1: "Alpha Tech",
    Sample2: "568",
    Sample3: "Tech Park",
    Sample4: "Building A",
    Sample5: "Alpha Valley",
    Sample6: "Austin",
  },
  {
    Sample1: "Sigma Industries",
    Sample2: "111",
    Sample3: "Production Unit",
    Sample4: "Industrial Zone",
    Sample5: "Sigma Estate",
    Sample6: "Boston",
  },
  {
    Sample1: "Theta Enterprises",
    Sample2: "643",
    Sample3: "Corporate Office",
    Sample4: "Tower 9",
    Sample5: "Theta Business District",
    Sample6: "Miami",
  },
  {
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
  {
    Sample1: "kjj",
    Sample2: "987",
    Sample3: "h",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle",
  },
];

const RecordReportWithoutSample = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-4 border border-gray-300 rounded-md">
              <legend className="text-sm">Reprint</legend>
              <div>
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col space-y-1">
                    <div className="flex space-x-80 whitespace-nowrap">
                      <label htmlFor="fromDate" className="font-medium">
                        S.No. [From{" "}
                        <input
                          type="text"
                          id="fromDate"
                          name="fromDate"
                          className="h-6 p-2 border border-gray-300 rounded-md w-28"
                        />{" "}
                        To{" "}
                        <input
                          type="text"
                          id="fromDate"
                          name="fromDate"
                          className="h-6 p-2 border border-gray-300 rounded-md w-28"
                        />{" "}
                        ]
                      </label>
                      <div>
                        <label htmlFor="fromDate" className="font-medium">
                          Date
                        </label>
                        <input
                          type="date"
                          id="fromDate"
                          name="fromDate"
                          className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <p className="space-y-4">
                      We hereby certify that a sample described as
                      <select
                        id="sampleDescription1"
                        name="sampleDescription1"
                        className="h-6 ml-2 border border-gray-300 rounded-md w-28"
                      >
                        <option value="" disabled selected>
                          Select Option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        id="sampleDescription1"
                        name="sampleDescription1"
                        className="h-6 ml-2 border border-gray-300 rounded-md w-28"
                      >
                        <option value="" disabled selected>
                          Select Option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <span className="ml-2"> received by us on </span>
                      <input
                        type="date"
                        id="receivedDate"
                        name="receivedDate"
                        className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                      />
                      <br />
                      <span className="ml-2"> From Sh./Ms </span>
                      <select
                        id="fromName"
                        name="fromName"
                        className="h-6 border border-gray-300 rounded-md w-96"
                      >
                        <option value="" disabled selected>
                          Select Name
                        </option>
                        <option value="name1">Name 1</option>
                        <option value="name2">Name 2</option>
                        <option value="name3">Name 3</option>
                      </select>
                      <span className="w-full ml-2">
                        {" "}
                        being particular and results as under.{" "}
                      </span>
                      <br />
                      <div className="flex items-start">
                        {/* Signature Section */}
                        <div className="flex items-center ml-2">
                          <span>Signature</span>
                          <select
                            id="signature"
                            name="signature"
                            className="h-6 ml-4 border border-gray-300 rounded-md w-36"
                          >
                            <option value="" disabled selected>
                              Select Signature
                            </option>
                            <option value="signature1">Signature 1</option>
                            <option value="signature2">Signature 2</option>
                            <option value="signature3">Signature 3</option>
                          </select>
                        </div>

                        {/* Remarks Section */}
                        <div className="flex ml-40">
                          <span>Remarks</span>
                          <input
                            id="remarks"
                            name="remarks"
                            className="h-10 p-2 mt-1 ml-2 border rounded-md w-96 "
                          ></input>
                        </div>
                      </div>
                      <br />
                      <span className="ml-2">
                        <select
                          id="additionalInfo1"
                          name="additionalInfo1"
                          className="h-6 border border-gray-300 rounded-md w-44"
                        >
                          <option value="" disabled selected>
                            Select Option
                          </option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </span>
                      <span className="ml-60">
                        <input
                          type="text"
                          id="additionalInfo2"
                          name="additionalInfo2"
                          className="h-6 p-2 border border-gray-300 rounded-md"
                          style={{ width: "430px" }} // Adjust the width as needed
                        />
                      </span>
                    </p>
                  </div>

                  {/* Buttons for Display and Print */}
                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
              {/* table grid */}
              <div className="relative overflow-x-auto overflow-y-auto h-[250px] w-[870px] mt-3">
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
