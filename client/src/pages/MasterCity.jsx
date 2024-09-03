import React, { useState } from 'react';

// State and City data to be displayed in the table and dropdown
const itemData = [
  { id: 1, name: 'State A', city: 'City 1' },
  { id: 2, name: 'State B', city: 'City 2' },
  { id: 3, name: 'State C', city: 'City 3' },
  { id: 4, name: 'State D', city: 'City 4' },
  { id: 5, name: 'State E', city: 'City 5' },
  { id: 6, name: 'State F', city: 'City 6' },
  { id: 7, name: 'State G', city: 'City 7' },
  { id: 8, name: 'State H', city: 'City 8' },
  { id: 9, name: 'State I', city: 'City 9' },
  { id: 10, name: 'State J', city: 'City 10' },
  // Add more data as needed
];

const states = [...new Set(itemData.map(item => item.name))]; // Extract unique state names

const MasterCity = () => {
  const [hoveredCell, setHoveredCell] = useState({ row: null, column: null });
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleMouseEnter = (rowIndex, columnIndex) => {
    setHoveredCell({ row: rowIndex, column: columnIndex });
  };

  const handleMouseLeave = () => {
    setHoveredCell({ row: null, column: null });
  };

  const handleCityClick = (city, state) => {
    setSelectedCity(city);
    setSelectedState(state);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <fieldset className="border border-gray-300 p-4 rounded-md w-full max-w-lg">
          <legend className="px-2">City</legend>
          <form>
            {/* State Dropdown */}
            <div className="flex items-center space-x-14 mb-4">
              <label htmlFor="stateName" className="text-gray-700 whitespace-nowrap">
                State:
              </label>
              <select
                id="stateName"
                name="stateName"
                className="border border-gray-300 rounded-md h-8 flex-grow focus:outline-none"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                required
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* City Input */}
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="cityName" className="text-gray-700 whitespace-nowrap">
                City Name:
              </label>
              <input
                type="text"
                id="cityName"
                name="cityName"
                className="border border-gray-300 rounded-md h-8 p-2 flex-grow focus:outline-none"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mb-4">
              <button type="submit" className="bg-gray-300 py-1 px-4 rounded-md h-8">
                Add
              </button>
              <button type="button" className="bg-gray-300 py-1 px-4 rounded-md h-8">
                Update
              </button>
              <button type="button" className="bg-gray-300 py-1 px-4 rounded-md h-8">
                Delete
              </button>
            </div>

            {/* Table */}
            <div className="relative max-h-64 overflow-auto">
              <table className="min-w-full border border-black divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Item ID
                    </th>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      State
                    </th>
                    <th className="border border-black px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      City
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {itemData.map((item, rowIndex) => (
                    <tr
                      key={item.id}
                      onClick={() => handleCityClick(item.city, item.name)}
                    >
                      <td
                        onMouseEnter={() => handleMouseEnter(rowIndex, 0)}
                        onMouseLeave={handleMouseLeave}
                        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${
                          hoveredCell.row === rowIndex &&
                          hoveredCell.column === 0
                            ? 'bg-blue-500 text-white'
                            : 'text-black'
                        }`}
                      >
                        {item.id}
                      </td>
                      <td
                        onMouseEnter={() => handleMouseEnter(rowIndex, 1)}
                        onMouseLeave={handleMouseLeave}
                        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${
                          hoveredCell.row === rowIndex &&
                          hoveredCell.column === 1
                            ? 'bg-blue-500 text-white'
                            : 'text-black'
                        }`}
                      >
                        {item.name}
                      </td>
                      <td
                        onMouseEnter={() => handleMouseEnter(rowIndex, 2)}
                        onMouseLeave={handleMouseLeave}
                        className={`border border-black px-2 py-1 text-xs whitespace-nowrap ${
                          hoveredCell.row === rowIndex &&
                          hoveredCell.column === 2
                            ? 'bg-blue-500 text-white'
                            : 'text-black'
                        }`}
                      >
                        {item.city}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-gray-700 text-sm font-medium">
                Total No. of Items: {itemData.length}
              </span>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default MasterCity;
