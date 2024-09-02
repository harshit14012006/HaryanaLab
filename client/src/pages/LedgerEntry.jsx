import React from 'react';

function LedgerEntry() {
  return (
    <div className="bg-gray-100 flex h-screen">
      <div className="flex-1 p-4">
      <div className="border border-gray-300 pb-4 mb-4 text-4xl font-bold text-center h-24 flex items-center justify-center">
    Ledger Entry
  </div>
      <form>
        <div>
      <fieldset className='border p-4 rounded'>
      <legend className='font-normal text-sm mb-2'>Day Details</legend>
      <div className="flex items-center space-x-4">
        <label htmlFor="date" className="w-1/3 text-sm">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
    </fieldset>
    </div>
    <div>
    <fieldset className='border p-4 rounded'>
      <legend className='font-normal text-sm mb-2'>Ledger Details</legend>
      <div className='space-y-4'>
      <div className="flex items-center space-x-4">
        <label htmlFor="date" className="w-1/3 text-sm">
          Party Name
        </label>
        <input
          type="partyname"
          id="partyname"
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="reportno" className="w-1/3 text-sm">
          Report No.
        </label>
        <input
          type="number"
          id="reportno"
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="amount" className="w-1/3 text-sm">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="remarks" className="w-1/3 text-sm">
          Remarks
        </label>
        <input
          type="remarks"
          id="remarks"
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
      </div>
    </fieldset>
    </div>
      </form>
      <div className='mt-5'>
  <fieldset className='border p-4 rounded '>
    <legend className='font-normal text-sm mb-4'>Control Panel</legend>
    <div className="flex justify-between">
      <button className="bg-gray-400  py-1 px-4 rounded h-8 ">
        Add New
      </button>
      <button className="bg-gray-400  py-1 px-4 rounded h-8 ">
        Delete
      </button>
    </div>
  </fieldset>
</div>

      </div>
      <div className="flex-1 p-2">
  <fieldset className="border p-4 h-full w-full flex flex-col">
    <legend className="font-normal">Day Cash Details</legend>
    <div className="flex flex-col space-y-2 mb-4">
      <div>
        <span >Party:</span>
      </div>
      <div>
        <span >City:</span>
      </div>
    </div>
    
    <div className="bg-gray-200 h-96">
  <div className="h-full overflow-auto">
    <div className="min-w-full">
      <table className="w-full border-collapse">
        <thead className="bg-gray-300">
          </thead>
      </table>
    </div>
  </div>
</div>
  </fieldset>
</div>



    </div>
  );
}

export default LedgerEntry;
