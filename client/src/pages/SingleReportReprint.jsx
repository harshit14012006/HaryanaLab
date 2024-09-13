import React from "react";

const SingleReportReprint = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-4xl">
          <form>
            <fieldset className="w-full p-3 mt-5 border border-gray-300 rounded-md">
              <legend className="text-sm">Reprint</legend>
              <div className="flex justify-center space-x-14">
                <div className="flex flex-col space-y-10">
                  <div className="flex items-center space-x-6 whitespace-nowrap">
                    <label
                      htmlFor="enterno"
                      className="font-medium text-gray-600"
                    >
                      Enter No.
                    </label>
                    <input
                      type="number"
                      id="enterno"
                      name="enterno"
                      className="h-8 p-2 w-96 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Buttons for Display and Print */}
                  <div className="flex space-x-80  mt-10">
                    <button
                      type="button"
                      className="bg-gray-400  py-1 px-4 rounded-md h-8"
                    >
                      Display
                    </button>
                    <button
                      type="button"
                      className="bg-gray-400  py-1 px-4 rounded-md h-8"
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-md h-96 mt-6"></div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleReportReprint;
