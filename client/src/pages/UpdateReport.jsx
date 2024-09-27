import React from "react";
import axios from "axios";
const ReportAnalysis = () => {
  const [Data, getData] = React.useState(null);

  const HandleData = (event) => {
    const Value = event.target.value;

    try {
      axios
        .get(`http://localhost:3001/api/analysis/${Value}`)
        .then((response) => {
          console.log(response.data.data);
          getData(response.data.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const HandleUpdate = () => {
    console.log(Data);
  };

  return (
    <div className="bg-gray-100">
      <div className="p-1 mx-auto">
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
                  id="time"
                  className="w-40 h-5 border"
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
                    <input
                      type="text"
                      id="samplename"
                      className="flex-grow h-5 px-2 border"
                    />
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
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="" className="w-1/3 text-sm">
                      From Sh/M/s
                    </label>
                    <input
                      type="text"
                      id="from"
                      className="flex-grow h-5 px-2 py-1 border"
                    />
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
                      type="text"
                      id="billeddate"
                      className="flex-grow h-5 px-2 py-1 border"
                    />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="sealed-unsealed" className="w-1/3 text-sm">
                      Sealed/Unsealed
                    </label>
                    <select
                      id="sealed-unsealed"
                      className="flex-grow h-5 px-2 border"
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
                      className="flex-grow h-5 px-2 py-1 border"
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
                  type="date"
                  id="date"
                  className="w-full h-5 px-2 py-1 border"
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
              >
                <option value="sealed">Seal Engraved</option>
                <option value="unsealed">Buyer</option>
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
              />
            </div>
          </div>
          <div className="text-right">
            <span className="block mr-6 text-sm">Signature</span>
            <select id="signature" className="px-2 py-1 mb-2 border">
              <option value=""></option>
              <option value="signature1">Signature 1</option>
              <option value="signature2">Signature 2</option>
              <option value="signature3">Signature 3</option>
            </select>
            <div className="flex justify-end">
              <button
                className="px-2 py-1 bg-gray-400 rounded"
                onClick={HandleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ReportAnalysis;
