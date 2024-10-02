import React, { useState, useEffect } from "react";
import axios from "axios";
const headers = ["Entry Date", "Report Number", "Amount", "Remarks"];
const LedgerReport = () => {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [Dates, getDates] = useState({});
  const [PartyName, setPartyName] = useState("");
  const [Party, setSelectedParty] = useState([]);
  const [reportData, setReportData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/api/customers")
        .then((response) => {
          console.log(response.data);
          setCustomer(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = (data) => {
    try {
      console.log("FetchData working");
      axios
        .get(`http://localhost:3001/api/analysises/${data}`)
        .then((response) => {
          console.log(response.data);
          setReportData(response.data.length);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePartySelect = (event) => {
    const partyName = event.target.value;
    const party = customer.find((p) => p.Partyname === partyName);
    console.log(party);
    setSelectedParty(party);
    setPartyName(partyName);
    party ? fetchData(party.Name) : setReportData("");

    if (!party) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.PartyName === partyName));
    }
  };

  const findData = async () => {
    try {
      await axios
        .get(
          `http://localhost:3001/api/usersDate/${Dates.fromDate}/${Dates.toDate}`
        )
        .then((response) => {
          if (response) {
            console.log(response.data);
            setData(response.data);
            setFilteredData(response.data);
          } else {
            console.log("No Data Found");
            setData([]);
            setFilteredData([]);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  };

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
                    onChange={(e) => {
                      getDates({ ...Dates, [e.target.name]: e.target.value });
                    }}
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
                    onChange={(e) => {
                      getDates({ ...Dates, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-2 mr-24 ">
                <button
                  type="submit"
                  className="h-8 px-4 py-1 bg-gray-400 rounded-md"
                  onClick={findData}
                >
                  Display
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-36">
                <div className="flex items-center space-x-4">
                  <label htmlFor="party" className="font-medium ">
                    Party
                  </label>
                  <select
                    required
                    className="box-border w-[70%] h-8 p-1 border border-gray-300 rounded-md appearance-none cursor-pointer"
                    onChange={handlePartySelect}
                    value={PartyName || ""}
                  >
                    <option value="">Select Party</option>
                    {customer &&
                      customer.map((party, index) => (
                        <option key={index} value={party.Partyname}>
                          {party.Partyname}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="city" className="font-medium ">
                    City : {Party ? Party.City : ""}
                  </label>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="totalSamples" className="font-medium ">
                    Total no. of samples: {reportData ? reportData : ""}
                  </label>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="openingBalance" className="font-medium ">
                    Opening balance: {Party ? Party.Openingbalance : ""}
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
                    {filteredData.map((row, i) => (
                      <tr
                        key={i}
                        className="transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                      >
                        <td
                          className="border-gray-300 border text-sm whitespace-nowrap"
                          style={{ minWidth: "150px" }}
                        >
                          {row.Date}
                        </td>
                        <td
                          className="border-gray-300 border text-sm whitespace-nowrap"
                          style={{ minWidth: "150px" }}
                        >
                          {row.Reportno}
                        </td>
                        <td
                          className="border-gray-300 border text-sm whitespace-nowrap"
                          style={{ minWidth: "150px" }}
                        >
                          {row.Amount}
                        </td>
                        <td
                          className="border-gray-300 border text-sm whitespace-nowrap"
                          style={{ minWidth: "150px" }}
                        >
                          {row.Remarks}
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
