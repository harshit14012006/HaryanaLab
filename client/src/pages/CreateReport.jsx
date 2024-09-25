import React, { useState, useEffect } from "react";
import axios from "axios";
const { ipcRenderer } = window.require("electron"); // Import ipcRenderer
const CreateReport = () => {
  const [ffaTime, setFfaTime] = useState(null);
  const [sampleName, setSampleName] = useState(null);
  const [customersbyname, setCustomersbyname] = useState(null);
  const [City, setCity] = useState("");
  const [id, setId] = useState(null);
  const handleFfaChange = (e) => {
    setFfaTime(new Date().toLocaleTimeString()); // Set the current time
  };
  const [formData, setFormData] = React.useState({
    Reportno: 0,
    Samplename: "NA",
    Dated: "NA",
    Selected: "Sealed",
    From: "NA",
    Billeddate: "NA",
    Station: "NA",
    Time: "NA",
    Crude: "NA",
    Moisture: "NA",
    Oil: "NA",
    FFA: "NA",
    Code: "NA",
    Date: "NA",
    Vechileno: "NA",
    Bags: "NA",
    Weight: "NA",
    Itemcategory: "Seal Engraved",
    Remarks1: "",
    Remarks2: "",
    Remarks: "",
    Signature: "NA",
  });

  const handleChange = (event) => {
    // Create a new object with the updated formData
    let newFormData = { ...formData, [event.target.name]: event.target.value };

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
    setFormData(newFormData);
  };

  useEffect(() => {
    FetchData();
    getReportno();
  }, []);

  const FetchData = () => {
    //Fetching Sample Name
    axios
      .get("http://localhost:3001/api/Item")
      .then((response) => {
        // console.log(response.data.id);
        setSampleName(response.data.id);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });

    //Fetching Customer data
    axios
      .get("http://localhost:3001/api/customersbyname")
      .then((response) => {
        // console.log(response.data);
        setCustomersbyname(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const getReportno = () => {
    axios
      .get("http://localhost:3001/api/analysis")
      .then((response) => {
        console.log(response.data.data[0].Reportno);
        setId(response.data.data[0].Reportno + 1);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleSaveAndPrint = () => {
    formData.Remarks = `${formData.Remarks1} ${formData.Remarks2}`;
    formData.Time = ffaTime ? ffaTime.toString() : "NA";
    formData.Reportno = id;
    console.log(formData);

    try {
      axios
        .post("http://localhost:3001/api/analysis", formData)
        .then((response) => {
          console.log("Data submitted successfully:", response.data);

          // Send the event to the main process

          ipcRenderer.send("open-lab-report", formData);
          setFormData({
            Reportno: 0,
            Samplename: "NA",
            Dated: "NA",
            Selected: "Sealed",
            From: "NA",
            Billeddate: "NA",
            Station: "NA",
            Crude: "NA",
            Moisture: "NA",
            Oil: "NA",
            FFA: "NA",
            Code: "NA",
            Date: "NA",
            Vechileno: "NA",
            Bags: "NA",
            Weight: "NA",
            Itemcategory: "Seal Engraved",
            Remarks1: "NA",
            Remarks2: "NA",
            Remarks: "NA",
            Signature: "NA",
          });
        })
        .catch((error) => {
          console.error("There was an error submitting the data!", error);
        });
    } catch (error) {
      console.log("Error adding data:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="p-1 ">
        <fieldset className="p-2 border border-gray-300 rounded">
          <legend className="text-sm">Analysis</legend>
          <div className="border border-gray-300 ">
            <div className="text-center">
              <label htmlFor="reportno" className="block mb-2 text-sm">
                Report No.
              </label>
              <input
                type="number"
                required
                id="reportno"
                value={id}
                disabled
                className="w-40 h-5 border"
              />
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
                      {/* <option value="Sample 1">Sample 1</option>
                      <option value="Sample 2">Sample 2</option>
                      <option value="Sample 3">Sample 3</option> */}
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="flex items-center">
                    <label htmlFor="input2" className="w-1/3 text-sm">
                      Dated
                    </label>
                    <input
                      type="date"
                      id="dated"
                      className="flex-grow h-5 px-2 py-1 border"
                      placeholder="Input 2"
                      name="Dated"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="from" className="w-1/3 text-sm">
                      From Sh/M/s
                    </label>
                    <select
                      id="from"
                      className="flex-grow h-5 px-2 border rounded"
                      name="From"
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
                      {/* <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option> */}
                      {/* Add more options as needed */}
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
                      id="billedDate"
                      className="flex-grow h-5 px-2 py-1 border"
                      name="Billeddate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="sealed-unsealed" className="w-1/3 text-sm">
                      Sealed/Unsealed
                    </label>
                    <select
                      id="sealed-unsealed"
                      className="flex-grow h-5 px-2 border"
                      value="Selected"
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
                      value={City}
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
        defaultValue="Crude"
      />
      <input
        type="text"
        id="editableNumber"
        className="h-5 px-2 py-1 border w-28"
        name="Crude"
        onChange={handleChange}
      />
    </div>
    <div className="flex items-center pl-12">
      <label htmlFor="moisture" className="text-sm whitespace-nowrap">
        Moisture
      </label>
      <input
        type="text"
        id="moisture"
        className="h-5 px-2 py-1 ml-2 border w-28"
        name="Moisture"
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
        onChange={(e) => {
          handleFfaChange();
          handleChange(e);
        }}
      />
      <span className="ml-1">%</span>
    </div>
    {/* Time input after FFA section */}
    <div className="flex items-center pl-6 space-x-2">
      <label htmlFor="ffaTime" className="text-sm">
        Time
      </label>
      <input
        type="time"
        id="ffaTime"
        className="h-5 px-2 py-1 border w-28"
        name="ffaTime"
        onChange={handleChange}
      />
    </div>
  </div>
</div>


          <div className="h-16 p-2 mt-1 border border-gray-300">
            <div className="flex flex-wrap -mx-4">
              {/* Code/Sample No. */}
              <div className="w-1/5 px-4 ">
                <label
                  htmlFor="sampleNo"
                  className="block mb-1 text-sm text-center "
                >
                  Code/Sample No.
                </label>
                <input
                  type="text"
                  id="sampleNo"
                  className="w-full h-5 px-2 py-1 border"
                  name="Code"
                  onChange={handleChange}
                />
              </div>

              {/* Date */}
              <div className="w-1/5 px-4 mb-4">
                <label
                  htmlFor="date"
                  className="block mb-1 text-sm text-center "
                >
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  className="w-full h-5 px-2 py-1 border"
                  name="Date"
                  onChange={handleChange}
                />
              </div>

              {/* Vehicle No. */}
              <div className="w-1/5 px-4 mb-4">
                <label
                  htmlFor="vehicleNo"
                  className="block mb-1 text-sm text-center "
                >
                  Vehicle No.
                </label>
                <input
                  type="text"
                  id="vehicleNo"
                  className="w-full h-5 px-2 py-1 border"
                  name="Vechileno"
                  onChange={handleChange}
                />
              </div>

              {/* Bags */}
              <div className="w-1/5 px-4 mb-4">
                <label
                  htmlFor="bags"
                  className="block mb-1 text-sm text-center "
                >
                  Bags
                </label>
                <input
                  type="number"
                  id="bags"
                  className="w-full h-5 px-2 py-1 border"
                  name="Bags"
                  onChange={handleChange}
                />
              </div>

              {/* Weight(Ql) */}
              <div className="w-1/5 px-4 mb-4">
                <label
                  htmlFor="weight"
                  className="block mb-1 text-sm text-center "
                >
                  Weight (Ql)
                </label>
                <input
                  type="text"
                  id="weight"
                  className="w-full h-5 px-2 py-1 border"
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
                name="Itemcategory"
                onChange={handleChange}
              >
                <option value="Seal Engraved">Seal Engraved</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
                <option value="Rice Mills">Rice Mills</option>
                <option value="Trader">Trader</option>
                <option value="Broker">Broker</option>
              </select>
            </div>

            {/* Row 1, Column 2 */}
            <div>
              <input
                type="text"
                id="space"
                className="w-full h-5 px-2 py-1 border"
                name="Remarks1"
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
                id="space2"
                className="w-full h-5 px-2 py-1 border"
                name="Remarks2"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-right">
            <span className="block mr-6 text-sm">Signature</span>
            <select
              id="signature"
              className="px-2 py-1 mb-2 border"
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
                onClick={handleSaveAndPrint}
                className="px-2 py-1 bg-gray-400 rounded"
              >
                Save and Print
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default CreateReport;
