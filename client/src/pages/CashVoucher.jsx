import React from 'react';

function CashVoucher() {
  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="bg-gray-100 flex justify-between h-[620px] box-border ">
      <div className="flex-1 mx-2 bg-gray-100 p-3 box-border rounded-lg flex flex-col items-center">
        <div className="border-2 border-black p-4 rounded-lg bg-white font-bold w-full max-w-lg text-center text-xl mb-8">
          Cash Voucher
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <fieldset className="border border-gray-300 rounded-lg p-6 box-border mb-8">
            <legend className="font-bold mb-4">Day Detail</legend>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-bold whitespace-nowrap min-w-[120px]">
                Date:
              </label>
              <input 
                type="date" 
                required 
                className="flex-1 p-2 rounded-md w-full border border-gray-300 box-border" 
                min={new Date().toISOString().split('T')[0]} 
              />
            </div>
          </fieldset>
          <fieldset className="border border-gray-300 rounded-lg p-6 box-border mb-8">
            <legend className="font-bold mb-4">Voucher Details</legend>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-bold whitespace-nowrap min-w-[120px]">
                Party Name:
              </label>
              <div className="relative flex-1">
                <select 
                  required 
                  className="appearance-none p-2 rounded-md w-full border border-gray-300 box-border cursor-pointer">
                  <option value="">Select Party</option>
                  <option value="party1">Party 1</option>
                  <option value="party2">Party 2</option>
                  <option value="party3">Party 3</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-bold whitespace-nowrap min-w-[120px]">
                Amount:
              </label>
              <input 
                type="number" 
                required 
                className="flex-1 p-2 rounded-md w-full border border-gray-300 box-border" 
                min="0" 
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-bold whitespace-nowrap min-w-[120px]">
                Remarks:
              </label>
              <input 
                type="text" 
                required 
                className="flex-1 p-2 rounded-md w-full border border-gray-300 box-border" 
                pattern=".{3,}" 
                title="Remarks should be at least 3 characters long" 
              />
            </div>
          </fieldset>
          <div className="flex justify-between w-full">
            <button type="submit" className="px-6 py-2 rounded-md border-none bg-gray-300 font-bold cursor-pointer">
              Add
            </button>
            <button type="button" className="px-6 py-2 rounded-md border-none bg-gray-300 font-bold cursor-pointer">
              Delete
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 mx-2 bg-gray-100 p-3 box-border rounded-lg flex flex-col items-center">
        <div className="w-full">
          <u><h1 className="text-left mb-1">Party:</h1></u>
        </div>
        <div className="w-full">
          <u><h1 className="text-left mb-2">City:</h1></u>
        </div>
        <div className="w-full">
          <h7 className="text-left">Day Cash Details</h7>
        </div>
        <div className="w-full h-[450px] bg-gray-200 rounded-lg box-border p-2 mt-4 overflow-auto">
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
}

export default CashVoucher;
