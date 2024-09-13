import React from "react";

const RecordReportWithoutSample = () => {
  const [formdata, setFormData] = React.useState({
    fromDate: "",
    toDate: "",
  });
  function HandleChange(event) {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
    console.log(event.target.name);
  }
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-3 border border-gray-300 rounded-md">
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
                        onChange={(e) => {
                          HandleChange(e);
                        }}
                      />
                      {/* From Label and Date Input */}
                      <label htmlFor="fromDate" className="font-medium">
                        To
                      </label>
                      <input
                        type="date"
                        id="fromDate"
                        name="toDate"
                        className="h-8 p-2 border border-gray-300 rounded-md"
                        onChange={(e) => {
                          HandleChange(e);
                        }}
                      />
                    </div>

                    {/* Fieldset for Search */}
                    <fieldset className="border border-gray-300 p-4 rounded-md">
                      <legend className="font-medium">Search</legend>

                      {/* Flex Container for Labels and Dropdowns */}
                      <div className="flex space-x-6">
                        {/* Party Name Dropdown */}
                        <div className="flex flex-col">
                          <label
                            htmlFor="partyName"
                            className="font-medium mb-2"
                          >
                            Party Name
                          </label>
                          <select
                            id="partyName"
                            name="partyName"
                            className="h-8 p-1 w-52 border border-gray-300 rounded-md"
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
                  <div className="flex space-x-80 mt-10">
                    <button
                      type="button"
                      className="bg-gray-400 py-1 px-4 rounded-md h-8"
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="bg-gray-400 py-1 px-4 rounded-md h-8"
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-md h-64 mt-6"></div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecordReportWithoutSample;
