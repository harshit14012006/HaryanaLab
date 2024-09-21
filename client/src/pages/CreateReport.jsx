import React from "react";
const { ipcRenderer } = window.require("electron"); // Import ipcRenderer
const CreateReport = () => {
  const [formData, setFormData] = React.useState({
    Samplename: "",
    Dated: "",
    Selected: "Sealed",
    From: "",
    Station: "",
    Crude: "",
    Moisture: "",
    Oil: "",
    FFA: "",
    Code: "",
    Date: "",
    Vechileno: "",
    Bags: "",
    Weight: "",
    Itemcategory: "Seal Engraved",
    Remarks: "",
    Signature: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSaveAndPrint = () => {
    // Send the event to the main process
    ipcRenderer.send("open-lab-report");
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
                defaultValue={1}
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
                      name="Samplename"
                      className="flex-grow h-5 px-2 border rounded"
                      onChange={handleChange}
                    >
                      <option value="">Select a sample</option>
                      <option value="Sample 1">Sample 1</option>
                      <option value="Sample 2">Sample 2</option>
                      <option value="Sample 3">Sample 3</option>
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
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
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
                      name="Station"
                      onChange={handleChange}
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
                  onChange={handleChange}
                />
                <span className="ml-1">%</span>
              </div>
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
                  name="Vehicleno"
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
                value="ItemCategory"
                onChange={handleChange}
              >
                <option value="sealed">Seal Engraved</option>
                <option value="unsealed">Buyer</option>
                <option value="ricemills">Seller</option>
                <option value="ricemills">Rice Mills</option>
                <option value="trader">Trader</option>
                <option value="broker">Broker</option>
              </select>
            </div>

            {/* Row 1, Column 2 */}
            <div>
              <input
                type="text"
                id="space"
                className="w-full h-5 px-2 py-1 border"
                value="Remarks"
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
                value="Remarks"
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
