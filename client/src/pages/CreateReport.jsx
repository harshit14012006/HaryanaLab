import React from 'react';

const CreateReport = () => {
  return (
    <div className='bg-gray-100' >
    <div className=" p-1">
      <form>
        <fieldset className="border border-gray-300 p-2 rounded">
          <legend className="text-sm">
           Analysis
          </legend>
          <div className='border border-gray-300 '>
          <div className="text-center">
          <label htmlFor="reportno" className="block mb-2 text-sm">
  Report No.
</label>
<input
  type="number"
  required
  id="reportno"
  defaultValue={63}
  className="border h-5 w-40"
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
        <input
          type="text"
          id="samplename"
          className="border px-2  flex-grow h-5"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="input2" className="w-1/3 text-sm">
          Dated
        </label>
        <input
          type="date"
          id="dated"
          className="border px-2 py-1 flex-grow h-5"
          placeholder="Input 2"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="" className='w-1/3 text-sm'>
          From Sh/M/s
        </label>
        <input
          type="text"
          id="from"
          className="border px-2 py-1 flex-grow h-5"
         
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
          className="border px-2 py-1 flex-grow h-5"
          
        />
      </div>
      <div className="flex items-center">
  <label htmlFor="sealed-unsealed" className="w-1/3 text-sm">
    Sealed/Unsealed
  </label>
  <select
    id="sealed-unsealed"
    className="border px-2  flex-grow h-5"
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
          className="border px-2 py-1 flex-grow h-5"
        />
      </div>
    </div>
  </div>
</div>
</div>
<div className="border border-gray-300 p-4 mt-1 h-12">
  <div className="flex space-x-4">
    <div className="flex items-center">
      <label htmlFor="moisture" className="w-1/3 text-sm whitespace-nowrap">
        Moisture
      </label>
      <input
        type="text"
        id="moisture"
        className="border px-2 py-1 w-28 h-5"
      />
      <span className="ml-1">%</span>
    </div>
    <div className="flex items-center space-x-2 pl-16">
  <label htmlFor="oil" className="w-1/3 text-sm">
    Oil
  </label>
  <div className="flex items-center">
    <input
      type="text"
      id="oil"
      className="border px-2 py-1 w-28 h-5"
    />
    <span className="ml-1">%</span>
  </div>
</div>

    <div className="flex items-center space-x-2 pl-20">
      <label htmlFor="ffa" className="w-1/3 text-sm">
        Ffa
      </label>
      <input
  type="text"
  id="ffa"
  className="border px-2 py-1 w-28 h-5" // Adjust the width here
/>
<span className="ml-1">%</span>
    </div>
  </div>
</div>

<div className="border border-gray-300 p-2 mt-1 h-16">
  <div className="flex flex-wrap  -mx-4">
    {/* Code/Sample No. */}
    <div className="w-1/5 px-4 ">
      <label htmlFor="sampleNo" className="block text-gray-700 text-sm mb-1 text-center">
        Code/Sample No.
      </label>
      <input
        type="text"
        id="sampleNo"
        className="border px-2 py-1 w-full h-5"
      />
    </div>
    
    {/* Date */}
    <div className="w-1/5 px-4 mb-4">
      <label htmlFor="date" className="block text-gray-700 text-sm mb-1 text-center">
        Date
      </label>
      <input
        type="date"
        id="date"
        className="border px-2 py-1 w-full h-5"
      />
    </div>

    {/* Vehicle No. */}
    <div className="w-1/5 px-4 mb-4">
      <label htmlFor="vehicleNo" className="block text-gray-700 text-sm mb-1  text-center">
        Vehicle No.
      </label>
      <input
        type="text"
        id="vehicleNo"
        className="border px-2 py-1 w-full h-5"
       
      />
    </div>

    {/* Bags */}
    <div className="w-1/5 px-4 mb-4">
      <label htmlFor="bags" className="block text-gray-700 text-sm mb-1 text-center">
        Bags
      </label>
      <input
        type="number"
        id="bags"
        className="border px-2 py-1 w-full h-5"
        
      />
    </div>

    {/* Weight(Ql) */}
    <div className="w-1/5 px-4 mb-4">
      <label htmlFor="weight" className="block text-gray-700 text-sm mb-1 text-center">
        Weight (Ql)
      </label>
      <input
        type="text"
        id="weight"
        className="border px-2 py-1 w-full h-5"
        
      />
    </div>
</div>
</div>
<div className="p-4 mt-2 grid grid-cols-2 gap-4 w-3/4">
  {/* Row 1, Column 1 */}
  <div >
  <select
    id="sealed-unsealed"
    className="border px-2  flex-grow h-5"
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
      className="border px-2 py-1 w-full h-5"
    />
  </div>

  {/* Row 2, Column 1 */}
  <div >
    <span>Remarks</span>
  </div>

  {/* Row 2, Column 2 */}
  <div >
   
    <input
      type="text"
      id="space2"
      className="border px-2 py-1 w-full h-5"
     
    />
  </div>
</div>
<div className='text-right'>
  <span className='block mr-6 text-sm'>Signature</span>
  <select
    id="signature"
    className='border px-2 py-1 mb-2'
  >
    <option value=""></option>
    <option value="signature1">Signature 1</option>
    <option value="signature2">Signature 2</option>
    <option value="signature3">Signature 3</option>
  </select>
  <div className='flex justify-end'>
    <button className='bg-gray-400 px-2 py-1 rounded'>
      Save and Print
    </button>
  </div>
</div>
        </fieldset>
      </form>
      </div>
      
    </div>
  );
};

export default CreateReport;
