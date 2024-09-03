import React from "react";

const RecordReportWithoutSample = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 border border-gray-300 rounded-md">
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
                          name="fromDate"
                          className="h-6 p-2 w-28 border border-gray-300 rounded-md"
                        />{" "}
                        To{" "}
                        <input
                          type="text"
                          id="fromDate"
                          name="fromDate"
                          className="h-6 p-2 w-28 border border-gray-300 rounded-md"
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
                          name="fromDate"
                          className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <p className="space-y-4">
                      We hereby certify that a sample described as
                      <select
                        id="sampleDescription1"
                        name="sampleDescription1"
                        className="h-6 w-28 ml-2 border border-gray-300 rounded-md"
                      >
                        <option value="" disabled selected>
                          Select Option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        id="sampleDescription1"
                        name="sampleDescription1"
                        className="h-6 w-28 ml-2 border border-gray-300 rounded-md"
                      >
                        <option value="" disabled selected>
                          Select Option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <span className="ml-2"> received by us on </span>
                      <input
                        type="date"
                        id="receivedDate"
                        name="receivedDate"
                        className="h-6 p-2 ml-2 border border-gray-300 rounded-md"
                      />
                      <br />
                      <span className="ml-2"> From Sh./Ms </span>
                      <select
                        id="fromName"
                        name="fromName"
                        className="h-6 w-96 border border-gray-300 rounded-md"
                      >
                        <option value="" disabled selected>
                          Select Name
                        </option>
                        <option value="name1">Name 1</option>
                        <option value="name2">Name 2</option>
                        <option value="name3">Name 3</option>
                      </select>
                      <span className="ml-2 w-full">
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
                            name="signature"
                            className="h-6 ml-4 w-36 border border-gray-300 rounded-md"
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
                            name="remarks"
                            className="h-10 p-2 w-96 mt-1 ml-2 border rounded-md "
                          ></input>
                        </div>
                      </div>
                      <br />
                      <span className="ml-2">
                        <select
                          id="additionalInfo1"
                          name="additionalInfo1"
                          className="h-6  w-44 border border-gray-300 rounded-md"
                        >
                          <option value="" disabled selected>
                            Select Option
                          </option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </span>
                      <span className="ml-60">
                        <input
                          type="text"
                          id="additionalInfo2"
                          name="additionalInfo2"
                          className="h-6 p-2 border border-gray-300 rounded-md"
                          style={{ width: "430px" }} // Adjust the width as needed
                        />
                      </span>
                    </p>
                  </div>

                  {/* Buttons for Display and Print */}
                  <div className="flex mt-6 justify-between">
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

              <div className="bg-gray-200 rounded-md h-60 mt-3"></div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecordReportWithoutSample;
