import React, { useEffect, useState } from "react";
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
  "SealEngraved",
  "Remarks",
  "Signature",
];

const RecordReportWithoutSample = () => {
  const [data, setData] = useState([]);
  const [sample, setSample] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formdata, setFormData] = useState({});

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/api/Item")
        .then((response) => setSample(response.data.id))
        .catch((error) => {
          console.log(error);
        });
      axios
        .get("http://localhost:3001/api/customersPartyName")
        .then((response) => {
          console.log(response.data);
          setCustomers(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const HandleDisplay = async () => {
    formdata.Remarks = `${formdata.Remarks1} ${formdata.Remarks2}`;
    console.log(formdata);

    try {
      await axios
        .post("http://localhost:3001/api/analysisEverything", formdata)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => console.log("Axios Error = ", error));
    } catch (error) {
      console.log("Something Wnt wrong by Displaying Data", error);
    }
  };

  const HnadlePrint = () => {
    console.log(data);
    data.length > 0 && ipcRenderer.send("open-MultiReport-report", data);
  };

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
                          name="RepFrom"
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          className="h-6 p-2 border border-gray-300 rounded-md w-28"
                        />{" "}
                        To{" "}
                        <input
                          type="text"
                          id="fromDate"
                          name="RepTo"
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              [e.target.name]: e.target.value,
                            });
                          }}
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
                          name="FromDate"
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              [e.target.name]: formatDate(e.target.value),
                            });
                          }}
                          className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <p className="space-y-4">
                      We hereby certify that a sample described as
                      <select
                        id="sampleDescription1"
                        name="Samplename"
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        className="h-6 ml-2 border border-gray-300 rounded-md w-28"
                      >
                        <option value="" disabled selected>
                          Select Sample
                        </option>
                        {sample &&
                          sample.map((item, index) => (
                            <option key={index} value={item.ItemName}>
                              {item.ItemName}
                            </option>
                          ))}
                      </select>
                      <select
                        id="sampleDescription1"
                        name="Selected"
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        className="h-6 ml-2 border border-gray-300 rounded-md w-28"
                      >
                        <option value="" disabled selected>
                          Select Seal
                        </option>
                        <option value="Sealed">Sealed</option>
                        <option value="Unsealed">Unsealed</option>
                      </select>
                      <span className="ml-2"> received by us on </span>
                      <input
                        type="date"
                        id="receivedDate"
                        name="ToDate"
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            [e.target.name]: formatDate(e.target.value),
                          });
                        }}
                        className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                      />
                      <br />
                      <span className="ml-2"> From Sh./Ms </span>
                      <select
                        id="fromName"
                        name="From"
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        className="h-6 border border-gray-300 rounded-md w-96"
                      >
                        <option value="" disabled selected>
                          Select Name
                        </option>
                        {customers &&
                          customers.map((item, index) => (
                            <option key={index} value={item.Name}>
                              {item.Name}
                            </option>
                          ))}
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
                            name="Signature"
                            onChange={(e) => {
                              setFormData({
                                ...formdata,
                                [e.target.name]: e.target.value,
                              });
                            }}
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
                            name="Remarks1"
                            onChange={(e) => {
                              setFormData({
                                ...formdata,
                                [e.target.name]: e.target.value,
                              });
                            }}
                            className="h-10 p-2 mt-1 ml-2 border rounded-md w-96 "
                          ></input>
                        </div>
                      </div>
                      <br />
                      <span className="ml-2">
                        <select
                          id="additionalInfo1"
                          name="Category"
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              [e.target.name]: e.target.value,
                            });
                          }}
                          className="h-6 border border-gray-300 rounded-md w-44"
                        >
                          <option value="">Select Option</option>
                          <option value="Seal Engraved">Seal Engraved</option>
                          <option value="Buyer">Buyer</option>
                          <option value="Seller">Seller</option>
                          <option value="Rice Mills">Rice Mills</option>
                          <option value="Trader">Trader</option>
                          <option value="Broker">Broker</option>
                        </select>
                      </span>
                      <span className="ml-60">
                        <input
                          type="text"
                          id="additionalInfo2"
                          name="Remarks2"
                          onChange={(e) => {
                            setFormData({
                              ...formdata,
                              [e.target.name]: e.target.value,
                            });
                          }}
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
                      onClick={HandleDisplay}
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                      onClick={HnadlePrint}
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
                    {data &&
                      data.map((row, i) => (
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
