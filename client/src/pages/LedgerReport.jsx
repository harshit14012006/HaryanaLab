import React from 'react';

const LedgerReport = () => {
  return (
    <div className='bg-gray-100' >
    <div className='flex justify-center min-h-screen'>
      <div className="w-full max-w-4xl">
        <form>
          <fieldset className='w-full p-3 border border-gray-300 rounded-md'>
            <legend className='text-sm'>Ledger Report</legend>
            <div className="flex justify-center space-x-14">
              <div className="flex items-center space-x-6">
                <label htmlFor="fromDate" className="font-medium text-gray-600">From</label>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  className="h-5 p-2 border border-gray-300"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label htmlFor="toDate" className="font-medium text-gray-600">To</label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  className="h-5 p-2 border border-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-end mt-2 mr-24 ">
              <button
                type="submit"
                className="h-8 px-4 py-1 bg-gray-400 rounded-md"
              >
                Display
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-36">
            <div className="flex items-center space-x-4">
                <label htmlFor="party" className="font-medium text-gray-600">Party</label>
                <input
                  type="text"
                  id="party"
                  name="party"
                  className="h-5 p-2 border border-gray-300"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="city" className="font-medium text-gray-600">City:</label>
                
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="totalSamples" className="font-medium text-gray-600">Total no. of samples:</label>
                
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="openingBalance" className="font-medium text-gray-600">Opening balance:</label>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md h-80">

</div>
<div className="flex flex-wrap gap-4 mt-2">
  <div className="flex-1">
    <label htmlFor="totalAmount" className="block font-medium text-gray-600">Total Amount</label>
  </div>
  <div className="flex-1">
    <label htmlFor="paidAmount" className="block font-medium text-gray-600">Paid Amount</label>
  </div>
  <div className="flex-1">
    <label htmlFor="openingBalance" className="block font-medium text-gray-600">Opening Balance</label>
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
