import React, { useState } from "react";
import axios from "axios";
const { ipcRenderer } = window.require("electron"); // Import ipcRenderer
const headers = [
  "Reportno",
  "Samplename",
  "Billeddate",
  "Dated",
  "Selected",
  "From",
  "Station",
  "AnotherName",
  "AnotherValue",
  "Moisture",
  "Oil",
  "FFA",
  "Time",
  "Code",
  "Date",
  "Vechileno",
  "Bags",
  "Weight",
  "Category",
  "Remarks",
  "Signature",
];

const SingleReportReprint = () => {
  const [data, setData] = useState([]);
  const [reportNo, setreportNo] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/analysis/${reportNo}`
      );
      if (response) {
        setData(response.data.data); // Access the data from the API response
        console.log(response.data.data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.log(
        err.response ? err.response.data.message : "Error fetching data"
      );
    }
  };

  const HandleClick = () => {
    ipcRenderer.send("open-lab-report", data[0]);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-5 border border-gray-300 rounded-md">
              <legend className="text-sm">Reprint</legend>
              <div className="flex justify-center space-x-14">
                <div className="flex flex-col space-y-10">
                  <div className="flex items-center space-x-6 whitespace-nowrap">
                    <label
                      htmlFor="enterno"
                      className="font-medium text-gray-600"
                    >
                      Enter No.
                    </label>
                    <input
                      type="number"
                      id="enterno"
                      name="enterno"
                      className="h-8 p-2 border border-gray-300 rounded-md w-96"
                      value={reportNo === null ? "" : reportNo}
                      onChange={(e) => {
                        setreportNo(e.target.value);
                      }}
                    />
                  </div>

                  {/* Buttons for Display and Print */}
                  <div className="flex mt-10 space-x-80">
                    <button
                      type="button"
                      className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                      onClick={fetchData}
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                      onClick={HandleClick}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {/* table grid */}
                <div className="relative overflow-x-auto overflow-y-auto h-[385px] w-[870px] mt-6">
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
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleReportReprint;
