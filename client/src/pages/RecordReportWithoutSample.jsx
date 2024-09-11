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
    Sample7:"Sample Data 5"
  },
  {
    Sample1: "Beta Ltd",
    Sample2: "868",
    Sample3: "Floor 2",
    Sample4: "Building B",
    Sample5: "Opposite Beta Mall",
    Sample6: "New York",
    Sample7:"Sample Data 5"
  },
  {
    Sample1: "Gamma Inc.",
    Sample2: "432",
    Sample3: "Office Suite",
    Sample4: "Building C",
    Sample5: "Near Gamma Park",
    Sample6: "Los Angeles",
    Sample7:"Sample Data 5"
  },
  {
    Sample1: "Delta Corp.",
    Sample2: "563",
    Sample3: "Warehouse 4",
    Sample4: "Sector A",
    Sample5: "Delta Industrial Area",
    Sample6: "Chicago",
    Sample7:"Sample Data 5"
  },
  {
    Sample1: "Epsilon LLC",
    Sample2: "789",
    Sample3: "Showroom",
    Sample4: "Commercial Plaza",
    Sample5: "Opposite Epsilon Tower",
    Sample6: "San Francisco",
    Sample7:"Sample Data 5"
  },
  {
    Sample1: "Zeta Co.",
    Sample2: "923",
    Sample3: "Factory 5",
    Sample4: "Sector Z",
    Sample5: "Zeta Industrial Hub",
    Sample6: "Houston",
    Sample7: "Sample Data 5"
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
    Sample1: "Omega Ltd",
    Sample2: "104",
    Sample3: "Headquarters",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle"
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
    Sample1: "kjj",
    Sample2: "987",
    Sample3: "h",
    Sample4: "Main Office",
    Sample5: "Omega Plaza",
    Sample6: "Seattle"
  },
];

const RecordReportWithoutSample = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 border border-gray-300 rounded-md">
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
  />
 {/* From Label and Date Input */}
 <label htmlFor="fromDate" className="font-medium">
    To
  </label>
  <input
    type="date"
    id="fromDate"
    name="fromDate"
    className="h-8 p-2 border border-gray-300 rounded-md"
  />
  
</div>


  {/* Fieldset for Search */}
  <fieldset className="p-4 border border-gray-300 rounded-md">
    <legend className="font-medium">Search</legend>
    
    {/* Flex Container for Labels and Dropdowns */}
    <div className="flex space-x-6">
      {/* Party Name Dropdown */}
      <div className="flex flex-col">
        <label htmlFor="partyName" className="mb-2 font-medium">
          Party Name
        </label>
        <select
          id="partyName"
          name="partyName"
          className="h-8 p-1 border border-gray-300 rounded-md w-52"
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
  <div className="flex mt-10 space-x-80">
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
