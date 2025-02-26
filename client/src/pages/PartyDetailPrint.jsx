import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPDF from "@react-pdf/renderer";
import AccountLedger from "./AccountLedger";

const headers = ["Partyname", "Address1", "State", "City", "Mobile1"];

const PartyDetailPrint = () => {
  const [data, setData] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [firstComboBox, setFirstComboBox] = useState("");
  const [secondComboBox, setSecondComboBox] = useState("");
  const [thirdComboBox, setThirdComboBox] = useState("");
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/customersPartyName").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  useEffect(() => {
    if (firstComboBox) {
      setFilteredCities(customers.filter((item) => item.State === firstComboBox));
      setSecondComboBox("");
      setFilteredDistricts([]);
    } else {
      setFilteredCities([]);
    }
  }, [firstComboBox, customers]);

  useEffect(() => {
    if (secondComboBox) {
      setFilteredDistricts(filteredCities.filter((item) => item.City === secondComboBox));
      setThirdComboBox("");
    } else {
      setFilteredDistricts([]);
    }
  }, [secondComboBox, filteredCities]);

  // Fetch data when a district is selected
  useEffect(() => {
    if (thirdComboBox) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/usersFindData`
          );
          console.log("Fetched Data:", response.data);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [thirdComboBox]);

  const HandleClick = async () => {
    const pdfBlob = await ReactPDF.pdf(
      <AccountLedger
        Data={data}
        Balance={0}
        OpeningBalance={0}
        Date1={data[0]?.Date}
        Date2={data[data.length - 1]?.Date}
      />
    ).toBlob();
    const newBlobUrl = URL.createObjectURL(pdfBlob);
    window.open(newBlobUrl);

    if (pdfBlobUrl) {
      URL.revokeObjectURL(pdfBlobUrl);
    }

    setPdfBlobUrl(newBlobUrl);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-5 border border-gray-300 rounded-md">
              <legend className="text-sm">Party Detail Print</legend>
              <div className="space-y-6">
                {/* State Dropdown */}
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-4">
                    <label className="w-24 font-medium text-right">State</label>
                    <select
                      className="w-64 h-8 p-1 border border-gray-300 rounded-md"
                      onChange={(e) => setFirstComboBox(e.target.value)}
                    >
                      <option value="">Select State</option>
                      {[...new Set(customers.map((item) => item.State))].map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City Dropdown */}
                  <div className="flex items-center space-x-4">
                    <label className="w-24 font-medium text-right">City</label>
                    <select
                      className="w-64 h-8 p-1 border border-gray-300 rounded-md"
                      onChange={(e) => setSecondComboBox(e.target.value)}
                      disabled={!firstComboBox}
                    >
                      <option value="">Select City</option>
                      {[...new Set(filteredCities.map((item) => item.City))].map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* District Dropdown */}
                <div className="flex justify-center">
                  <div className="flex items-center space-x-4">
                    <label className="w-24 font-medium text-right">District</label>
                    <select
                      className="w-64 h-8 p-1 border border-gray-300 rounded-md"
                      onChange={(e) => setThirdComboBox(e.target.value)}
                      disabled={!secondComboBox}
                    >
                      <option value="">Select District</option>
                      {[...new Set(filteredDistricts.map((item) => item.District))].map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="relative overflow-x-auto overflow-y-auto h-[360px] w-[870px] mt-3">
                <table className="min-w-full bg-white border border-gray-300 table-auto">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      {headers.map((header, index) => (
                        <th key={index} className="p-2 text-sm text-left border-gray-300 whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, i) => (
                      <tr key={i} className="transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                        {headers.map((header, j) => (
                          <td key={j} className="p-2 text-sm border border-gray-300 whitespace-nowrap">
                            {row[header] && row[header] !== "null" ? row[header] : ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end mt-4">
                <button type="button" className="h-8 px-4 py-1 bg-gray-400 rounded-md" onClick={HandleClick}>
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

export default PartyDetailPrint;
