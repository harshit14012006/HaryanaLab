import React from "react";

const LedgerReport = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-5 border border-gray-300 rounded-md">
              <legend className="text-sm">Ledger Report</legend>
              <div className="space-y-6">
                {/* Row: State Label and Dropdown */}
                <div className="flex space-x-6">
                  {/* State Label and Dropdown */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="stateDropdown"
                      className="font-medium w-24 text-right"
                    >
                      State
                    </label>
                    <select
                      id="stateDropdown"
                      name="stateDropdown"
                      className="h-8 p-1 border border-gray-300 rounded-md w-64"
                    >
                      <option value="">Select State</option>
                    </select>
                  </div>

                  {/* City Label and Dropdown */}
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="cityDropdown"
                      className="font-medium w-24 text-right"
                    >
                      City
                    </label>
                    <select
                      id="cityDropdown"
                      name="cityDropdown"
                      className="h-8 p-1 border border-gray-300 rounded-md w-64"
                    >
                      <option value="">Select City</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="districtInput"
                      className="font-medium w-24 text-right"
                    >
                      District
                    </label>
                    <input
                      id="districtInput"
                      name="districtInput"
                      type="text"
                      className="h-8 p-1 border border-gray-300 rounded-md w-64"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-md h-80 mt-5"></div>
              <div className="flex justify-end mt-4">
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
