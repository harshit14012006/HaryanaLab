import React, { useState } from 'react';

// city data to be displayed in the table
const cityData = [
  { id: 1, name: 'city A', date: '2024-08-30' },
  { id: 2, name: 'city B', date: '2024-08-31' },
  { id: 3, name: 'city C', date: '2024-09-01' },
  { id: 4, name: 'city D', date: '2024-09-02' },
  { id: 5, name: 'city E', date: '2024-09-03' },
  { id: 6, name: 'city F', date: '2024-09-04' },
  { id: 7, name: 'city G', date: '2024-09-05' },
  { id: 8, name: 'city H', date: '2024-09-06' },
  { id: 9, name: 'city I', date: '2024-09-07' },
  { id: 10, name: 'city J', date: '2024-09-08' },
  // Add more data as needed
];

const MasterCity = () => {
  const [hoveredCell, setHoveredCell] = useState({ row: null, column: null });

  const handleMouseEnter = (rowIndex, columnIndex) => {
    setHoveredCell({ row: rowIndex, column: columnIndex });
  };

  const handleMouseLeave = () => {
    setHoveredCell({ row: null, column: null });
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <fieldset className="border border-gray-300 p-4 rounded-md w-full max-w-lg">
          <legend className=" px-2">City</legend>
          <form>
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="itemName" className="text-gray-700 whitespace-nowrap">
                City Name:
              </label>
              <input
                type="text"
                id="cityName"
                name="cityName"
                className="border border-gray-300 rounded-md h-8 p-2 flex-grow focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <button type="submit" className="bg-gray-300 py-1 px-4 rounded-md h-8">
                Add
              </button>
              <button type="button" className="bg-gray-300  py-1 px-4 rounded-md h-8">
                Update
              </button>
              <button type="button" className="bg-gray-300 py-1 px-4 rounded-md h-8">
                Delete
              </button>
            </div>
            <div className="relative max-h-64 overflow-auto">
              <table className="min-w-full border border-black divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">City ID</th>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">City Name</th>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Insert Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
  {cityData.map((city, rowIndex) => (
    <tr key={city.id}>
      <td
        onMouseEnter={() => handleMouseEnter(rowIndex, 0)}
        onMouseLeave={handleMouseLeave}
        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${hoveredCell.row === rowIndex && hoveredCell.column === 0 ? 'bg-blue-500 text-white' : 'text-black'}`}
      >
        {city.id}
      </td>
      <td
        onMouseEnter={() => handleMouseEnter(rowIndex, 1)}
        onMouseLeave={handleMouseLeave}
        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${hoveredCell.row === rowIndex && hoveredCell.column === 1 ? 'bg-blue-500 text-white' : 'text-black'}`}
      >
        {city.name}
      </td>
      <td
        onMouseEnter={() => handleMouseEnter(rowIndex, 2)}
        onMouseLeave={handleMouseLeave}
        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${hoveredCell.row === rowIndex && hoveredCell.column === 2 ? 'bg-blue-500 text-white' : 'text-black'}`}
      >
        {city.date}
      </td>
    </tr>
  ))}
</tbody>

              </table>
            </div>
            <div className="mt-4 flex justify-end">
          <span className="text-gray-700 text-sm font-medium">
            Total No. of Items: 25
          </span>
        </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default MasterCity;
