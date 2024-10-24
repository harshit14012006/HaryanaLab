import React from "react";
import axios from "axios";
const { ipcRenderer } = window.require("electron");
const ReportAnalysis = () => {
  const [Data, getData] = React.useState({});
  const [time, getTime] = React.useState("");
  const [customersbyname, setCustomersbyname] = React.useState([]);
  const [sampleName, setSampleName] = React.useState([]);
  const [city, setCity] = React.useState(null);
  const [time2, setTime] = React.useState(null);
  const [FFaTime, setFfaTime] = React.useState("");
  let [Repno, setRepno] = React.useState(0);
  const handleChange = (event) => {
    // Create a new object with the updated formData
    let newFormData = { ...Data, [event.target.name]: event.target.value };

    const result =
      event.target.name === "From" &&
      customersbyname.find(
        (person) =>
          person.Name.toLowerCase() === event.target.value.toLowerCase()
      );

    if (result) {
      console.log("Found");
      setCity(result.City);
      newFormData = { ...newFormData, Station: result.City }; // Update newFormData with Station
    } else {
      console.log("not found");
    }

    // Update formData once with the final values
    getData(newFormData);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  React.useEffect(() => {
    getTime(getCurrentTime());
    // Update time every minute
    const intervalId = setInterval(() => {
      getTime(getCurrentTime());
    }, 1000); // Update every minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const HandleData = (event) => {
    const Value = event.target.value;
    setRepno(Value);
    console.log("Handling Data");
    try {
      axios
        .get(`http://localhost:3001/api/analysis/${Value}`)
        .then((response) => {
          console.log(response.data);
          getData({});
          setCity(null);
          setCustomersbyname([]);
          setSampleName([]);
          if (response.data.response) {
            console.log("If working");
            getData(response.data.data[0]);
            const part = response.data.data[0].Remarks;
            part &&
              axios
                .get("http://localhost:3001/api/customersbyname")
                .then((response) => {
                  // console.log(response.data);
                  setCustomersbyname(response.data);
                })
                .catch((error) => {
                  console.error("There was an error fetching the data!", error);
                });
            axios
              .get("http://localhost:3001/api/Item")
              .then((response) => {
                // console.log(response.data.id);
                setSampleName(response.data.id);
              })
              .catch((error) => {
                console.error("There was an error fetching the data!", error);
              });
          }
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleFfaChange = (e) => {
    setFfaTime(new Date().toLocaleTimeString()); // Set the current time
    const hours = String(new Date().getHours()).padStart(2, "0");
    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    e.target.value ? setTime(`${hours}:${minutes}`) : setTime(null);
  };
  const HandleUpdate = (e) => {
    e.preventDefault();
    for (let key in Data) {
      if (
        Data[key] === null ||
        Data[key] === undefined ||
        Data[key] === "" ||
        Data[key] === "NA"
      ) {
        // Assign default value from defaultValues or any other value
        Data[key] = "NA";
      }
    }
    Data.Time =
      FFaTime && Data.FFA !== "NA" && Data.Time ? FFaTime.toString() : "NA";
    console.log(Data);
    try {
      axios
        .put(`http://localhost:3001/api/analysis/${Repno} `, Data)
        .then((response) => {
          console.log(response.data);
          setCustomersbyname([]);
          setSampleName([]);
          setCity(null);
          ipcRenderer.send("open-lab-report", Data);
          getData({});
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="p-1 mx-auto">
        <form>
          <fieldset className="p-2 border border-gray-300 rounded">
            <legend className="text-sm">Analysis</legend>
            <div className="border border-gray-300 ">
              <div className="mt-1 text-center">
                <label htmlFor="reportno" className="block mb-2 text-sm">
                  Report No.
                </label>
                <input
                  type="number"
                  required
                  id="reportno"
                  className="w-40 h-5 border"
                  onChange={HandleData}
                />
              </div>
              <div className="flex justify-end mr-4 -mt-14">
                <div>
                  <label htmlFor="time" className="block mb-2 text-sm">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    readOnly
                    id="time"
                    className="w-40 h-5 border"
                    value={time}
                  />
                </div>
              </div>

              <div className="flex ">
                {/* First container with labels and inputs in rows */}
                <div className="w-1/2 p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <label htmlFor="samplename" className="w-1/3 text-sm">
                        Sample Name
                      </label>
                      <select
                        id="samplename"
                        className="flex-grow h-5 px-2 border rounded"
                        name="Samplename"
                        required
                        value={Data.Samplename || ""}
                        onChange={handleChange}
                      >
                        <option value="">Select a sample</option>
                        {sampleName &&
                          sampleName.map((name) => {
                            return (
                              <option key={name.ID} value={name.ItemName}>
                                {name.ItemName}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label htmlFor="input2" className="w-1/3 text-sm">
                        Dated
                      </label>
                      <input
                        type="date"
                        id="dated"
                        name="Dated"
                        required
                        className="flex-grow h-5 px-2 py-1 border"
                        placeholder="Input 2"
                        value={Data.Dated || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center">
                      <label htmlFor="" className="w-1/3 text-sm">
                        From Sh/M/s
                      </label>
                      <select
                        id="from"
                        className="flex-grow h-5 px-2 border rounded"
                        name="From"
                        required
                        value={Data.From || ""}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        <option value="">Select an option</option>
                        {customersbyname &&
                          customersbyname.map((name, index) => {
                            return (
                              <option key={index} value={name.Name}>
                                {name.Name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Second container with labels and inputs in rows */}
                <div className="w-1/2 p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <label htmlFor="billeddate" className="w-1/3 text-sm">
                        Billed Date
                      </label>
                      <input
                        type="date"
                        id="billeddate"
                        required
                        className="flex-grow h-5 px-2 py-1 border"
                        value={Data.Billeddate || ""}
                        name="Billeddate"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="sealed-unsealed"
                        className="w-1/3 text-sm"
                      >
                        Sealed/Unsealed
                      </label>
                      <select
                        id="sealed-unsealed"
                        className="flex-grow h-5 px-2 border"
                        value={Data.Selected || "sealed"}
                        required
                        name="Selected"
                        onChange={handleChange}
                      >
                        <option value="sealed">Sealed</option>
                        <option value="unsealed">Unsealed</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <label htmlFor="station" className="w-1/3 text-sm">
                        Station
                      </label>
                      <input
                        type="text"
                        id="input6"
                        disabled
                        className="flex-grow h-5 px-2 py-1 border"
                        value={!city ? Data.Station || "" : city}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-12 p-4 mt-1 border border-gray-300">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    id="editableNumber"
                    className="h-5 px-2 py-1 mr-4 border w-28"
                    value={Data.AnotherName || ""}
                    name="AnotherName"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="editableNumber"
                    className="h-5 px-2 py-1 border w-28"
                    value={Data.AnotherValue || ""}
                    name="AnotherValue"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center pl-12">
                  <label
                    htmlFor="moisture"
                    className="text-sm whitespace-nowrap"
                  >
                    Moisture
                  </label>
                  <input
                    type="text"
                    id="moisture"
                    className="h-5 px-2 py-1 ml-2 border w-28"
                    name="Moisture"
                    value={Data.Moisture || ""}
                    onChange={handleChange}
                  />
                  <span className="ml-1">%</span>
                </div>
                <div className="flex items-center pl-16 space-x-2">
                  <label htmlFor="oil" className="text-sm">
                    Oil
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="oil"
                      className="h-5 px-2 py-1 border w-28"
                      name="Oil"
                      value={Data.Oil || ""}
                      onChange={handleChange}
                    />
                    <span className="ml-1">%</span>
                  </div>
                </div>
                <div className="flex items-center pl-16 space-x-2">
                  <label htmlFor="ffa" className="text-sm">
                    FFA
                  </label>
                  <input
                    type="text"
                    id="ffa"
                    className="h-5 px-2 py-1 border w-28"
                    name="FFA"
                    value={Data.FFA || ""}
                    onChange={(e) => {
                      handleChange(e);
                      handleFfaChange(e);
                    }}
                    //
                  />
                  <span className="ml-1">%</span>
                </div>
                {time2 && (
                  <div className="flex items-center pl-6 space-x-2">
                    <label htmlFor="ffaTime" className="text-sm">
                      Time
                    </label>
                    <input
                      type="time"
                      id="ffaTime"
                      className="h-5 px-0 py-1 border w-28"
                      name="ffaTime"
                      value={time2}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="h-16 p-2 mt-1 border border-gray-300">
              <div className="flex flex-wrap -mx-4">
                {/* Code/Sample No. */}
                <div className="w-1/5 px-4 ">
                  <label
                    htmlFor="sampleNo"
                    className="block mb-1 text-sm text-center text-gray-700"
                  >
                    Code/Sample No.
                  </label>
                  <input
                    type="text"
                    id="sampleNo"
                    className="w-full h-5 px-2 py-1 border"
                    value={Data.Code || ""}
                    name="Code"
                    onChange={handleChange}
                  />
                </div>

                {/* Date */}
                <div className="w-1/5 px-4 mb-4">
                  <label
                    htmlFor="date"
                    className="block mb-1 text-sm text-center text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="w-full h-5 px-2 py-1 border"
                    value={Data.Date || ""}
                    name="Date"
                    onChange={handleChange}
                  />
                </div>

                {/* Vehicle No. */}
                <div className="w-1/5 px-4 mb-4">
                  <label
                    htmlFor="vehicleNo"
                    className="block mb-1 text-sm text-center text-gray-700"
                  >
                    Vehicle No.
                  </label>
                  <input
                    type="text"
                    id="vehicleNo"
                    className="w-full h-5 px-2 py-1 border"
                    value={Data.Vechileno || ""}
                    name="Vechileno"
                    onChange={handleChange}
                  />
                </div>

                {/* Bags */}
                <div className="w-1/5 px-4 mb-4">
                  <label
                    htmlFor="bags"
                    className="block mb-1 text-sm text-center text-gray-700"
                  >
                    Bags
                  </label>
                  <input
                    type="number"
                    id="bags"
                    className="w-full h-5 px-2 py-1 border"
                    value={Data.Bags || ""}
                    name="Bags"
                    onChange={handleChange}
                  />
                </div>

                {/* Weight(Ql) */}
                <div className="w-1/5 px-4 mb-4">
                  <label
                    htmlFor="weight"
                    className="block mb-1 text-sm text-center text-gray-700"
                  >
                    Weight (Ql)
                  </label>
                  <input
                    type="text"
                    id="weight"
                    className="w-full h-5 px-2 py-1 border"
                    value={Data.Weight || ""}
                    name="Weight"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid w-3/4 grid-cols-2 gap-4 p-4 mt-2">
              {/* Row 1, Column 1 */}
              <div>
                <select
                  id="sealed-unsealed"
                  className="flex-grow h-5 px-2 border"
                  value={Data.Category || "sealed"}
                  name="Category"
                  onChange={handleChange}
                >
                  <option value="Seal Engraved">Seal Engraved</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Rice Mills">Rice Mills</option>
                  <option value="Trader">Trader</option>
                  <option value="Broker">Broker</option>
                </select>
              </div>

              {/* Row 1, Column 2 */}
              <div>
                <input
                  type="text"
                  id="remarks1"
                  className="w-full h-5 px-2 py-1 border"
                  value={Data.SealEngraved || ""}
                  name="SealEngraved"
                  onChange={handleChange}
                />
              </div>

              {/* Row 2, Column 1 */}
              <div>
                <span>Remarks</span>
              </div>

              {/* Row 2, Column 2 */}
              <div>
                <input
                  type="text"
                  id="remarks2"
                  className="w-full h-5 px-2 py-1 border"
                  value={Data.Remarks}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-right">
              <span className="block mr-6 text-sm">Signature</span>
              <select
                id="signature"
                className="px-2 py-1 mb-2 border"
                value={Data.Signature || ""}
                name="Signature"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="signature1">Signature 1</option>
                <option value="signature2">Signature 2</option>
                <option value="signature3">Signature 3</option>
              </select>
              <div className="flex justify-end">
                <button
                  type="submit"
                  name="Remarks"
                  value={Data.Remarks || ""}
                  className="px-2 py-1 bg-gray-400 rounded"
                  onClick={HandleUpdate}
                >
                  Update and Print
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ReportAnalysis;
