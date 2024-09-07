import React from 'react';

function CashVoucher() {
  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="box-border flex justify-between bg-gray-100 ">
      <div className="flex flex-col items-center flex-1 h-full p-3 mx-2 bg-gray-100 rounded-lg">
        <div className="w-full max-w-lg p-4 mb-8 text-4xl font-bold text-center border border-gray-300 rounded-lg">
          Cash Voucher
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <fieldset className="box-border p-2 mb-3 border border-gray-300 rounded-lg h-28">
            <legend className="mb-4 font-normal">Day Detail</legend>
            <div className="flex items-center mb-4">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Date:
              </label>
              <input 
                type="date" 
                required 
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md" 
                min={new Date().toISOString().split('T')[0]} 
              />
            </div>
          </fieldset>
          <fieldset className="box-border p-6 mb-8 border border-gray-300 rounded-lg">
            <legend className="mb-4 font-normal">Voucher Details</legend>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Party Name:
              </label>
              <div className="relative flex-1">
                <select 
                  required 
                  className="box-border w-full h-8 p-1 border border-gray-300 rounded-md appearance-none cursor-pointer">
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
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Amount:
              </label>
              <input 
                type="number" 
                required 
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md" 
                min="0" 
              />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-4 font-normal whitespace-nowrap min-w-[120px]">
                Remarks:
              </label>
              <input 
                type="text" 
                required 
                className="box-border flex-1 w-full h-8 p-2 border border-gray-300 rounded-md" 
                pattern=".{3,}" 
                title="Remarks should be at least 3 characters long" 
              />
            </div>
          </fieldset>
          <div className="flex justify-between w-full">
            <button type="submit" className="h-8 px-6 py-1 font-bold bg-gray-300 border-none rounded-md cursor-pointer">
              Add
            </button>
            <button type="button" className="h-8 px-6 py-1 font-bold bg-gray-300 border-none rounded-md cursor-pointer">
              Delete
            </button>

            
          </div>
        </form>
      </div>
      <div className="box-border flex flex-col items-center flex-1 p-3 mx-2 bg-gray-100 rounded-lg">
        <div className="w-full">
          <u><h1 className="mb-1 text-left">Party:</h1></u>
        </div>
        <div className="w-full">
          <u><h1 className="mb-2 text-left">City:</h1></u>
        </div>
        <div className="w-full">
          <h7 className="text-left">Day Cash Details</h7>
        </div>
        <div className="w-full h-[438px] bg-gray-200 rounded-lg box-border p-2 mt-4 overflow-auto">
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
}

export default CashVoucher;
