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
function CashVoucher() {
  
  const [data, setData] = useState(initialData);
  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
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
                min={new Date().toISOString().split('T')[0]} 
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
                  className="box-border w-full h-8 p-1 border border-gray-300 rounded-md appearance-none cursor-pointer">
                  <option value="">Select Party</option>
                  <option value="party1">Party 1</option>
                  <option value="party2">Party 2</option>
                  <option value="party3">Party 3</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
              />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Remarks:
              </label>
              <input 
                type="text" 
                required 
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md" 
                pattern=".{3,}" 
                title="Remarks should be at least 3 characters long" 
              />
            </div>
          </fieldset>
          <div className="flex justify-between w-full">
            <button type="submit" className="h-8 px-6 py-1 bg-gray-300 border-none rounded-md cursor-pointer">
              Add
            </button>
            <button type="button" className="h-8 px-6 py-1 bg-gray-300 border-none rounded-md cursor-pointer">
              Delete
            </button>

            
          </div>
        </form>
      </div>
      <div className="box-border flex flex-col items-center flex-1 p-3 mx-2 bg-gray-100 rounded-lg">
        <div className="w-full">
          <u><h1 className="mb-1 text-left">Party:</h1></u>
        </div>
        <div className="w-full">
          <u><h1 className="mb-2 text-left">City:</h1></u>
        </div>
        <div className="w-full">
          <h7 className="text-left">Day Cash Details</h7>
        </div>
        <div>
            <div className=" mx-auto">
              <div className="relative overflow-x-auto overflow-y-auto h-[453px] w-[400px]">
                <table className="bg-white border border-gray-300 table-auto">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      {headers.map((header, index) => (
                        <th
                          key={index}
                          className="border-gray-300 text-left text-sm whitespace-nowrap"
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
                        className="hover:bg-blue-500 hover:text-white transition-colors duration-300"
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
      </div>
    </div>
  );
}

export default CashVoucher;
