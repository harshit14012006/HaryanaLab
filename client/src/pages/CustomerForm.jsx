import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const headers = [
  "Party Id ",
  "Name",
  "Address 1",
  "Address 2",
  "Landmark",
  "State",
  "Pincode",
  "City",
  "District",
  "Print Name",
  "Landline1",
  "Landline2",
  "Landline3",
  "Mobile1",
  "Mobile2",
  "Mobile3",
  "Email",
  "Fax",
  "Website",
  "Opening Balance",
  "Mobile 1",
  "Designation",
  "Mobile 2",
  "Remarks1",
  "Remarks2",
  "Remarks3",
];

const initialData = [
  {
    "Party Id": 867,
    Name: "Alpha Corp",
    "Address 1": "Suite 101",
    "Address 2": "hljkhk",
    Landmark: "Near Alpha Park",
    State: "California",
    Pincode: "90001",
    City: "Los Angeles",
    District: "LA County",
    "Print Name": "Alpha Corporation",
    Landline1: "123-456-7890",
    Landline2: "876-87-87876",
    Landline3: "98787-87-877",
    Mobile1: "987-654-3210",
    Mobile2: "",
    Mobile3: "",
    Email: "contact@alphacorp.com",
    Fax: "123-456-7891",
    Website: "www.alphacorp.com",
    "Opening Balance": "$5000",
    "Mobile 1": "987-654-3210",
    Designation: "Manager",
    "Mobile 2": "",
    Remarks1: "Important client",
    Remarks2: "",
    Remarks3: "",
  },
  {
    "Party Id": "868",
    Name: "Beta Ltd",
    "Address 1": "Floor 2",
    "Address 2": "Building B",
    Landmark: "Opposite Beta Mall",
    State: "New York",
    Pincode: "10001",
    City: "New York",
    District: "NY County",
    "Print Name": "Beta Limited",
    Landline1: "234-567-8901",
    Landline2: "",
    Landline3: "",
    Mobile1: "876-543-2109",
    Mobile2: "",
    Mobile3: "",
    Email: "info@betaltd.com",
    Fax: "234-567-8902",
    Website: "www.betaltd.com",
    "Opening Balance": "$3000",
    "Mobile 1": "876-543-2109",
    Designation: "Director",
    "Mobile 2": "",
    Remarks1: "Regular partner",
    Remarks2: "",
    Remarks3: "",
  },
  // Add more rows as needed
];

const CustomerForm = () => {
  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      const nameA = a["Name"].toLowerCase();
      const nameB = b["Name"].toLowerCase();

      return newSortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setData(sortedData);
    setSortOrder(newSortOrder);
  };

  const getSortIcon = () => {
    if (sortOrder === "asc") {
      return <FontAwesomeIcon icon={faSortUp} />;
    } else if (sortOrder === "desc") {
      return <FontAwesomeIcon icon={faSortDown} />;
    }
    return <FontAwesomeIcon icon={faSort} />;
  };

  return (
    <div className="bg-gray-100">
      <form>
        <div className="flex space-x-4">
          <div className="w-1/2 pl-2">
            {/* First div content */}
            <fieldset className="border p-2 ">
              <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
                Party Name
              </legend>
              <div className="flex items-center">
                <label
                  htmlFor="partyname"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Party Name
                </label>
                <input
                  type="text"
                  id="partyname"
                  className="border w-2/3 h-5"
                  required
                />
                <p
                  id="partyNameError"
                  className="text-red-500 text-sm absolute top-full left-0 mt-1 hidden"
                >
                  Please fill out this field
                </p>
              </div>
            </fieldset>
            <fieldset className="border p-2">
              <legend>Address Details</legend>
              {/* Address Details Inputs */}
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="address1"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="border  w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="address2"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="landmark"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Landmark
                </label>
                <input
                  type="text"
                  id="landmark"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="state"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  State
                </label>
                <select
                  id="state"
                  className="border w-2/3 h-5 px-2  text-sm"
                  required
                >
                  <option value="">Select a state</option>
                  <option value="haryana">Haryana</option>
                  <option value="punjab">Punjab</option>
                  <option value="delhi">Delhi</option>
                  <option value="up">Uttar Pradesh</option>
                  <option value="rajasthan">Rajasthan</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="pincode"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="city"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  State
                </label>
                <select
                  id="city"
                  className="border w-2/3 h-5 px-2  text-sm"
                  required
                >
                  <option value="">Select a City</option>
                  <option value="haryana">Sirsa</option>
                  <option value="punjab">Chandigarh</option>
                  <option value="delhi">Delhi</option>
                  <option value="up">Lucknow</option>
                  <option value="rajasthan">Jaipur</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="email"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  District
                </label>
                <input
                  type="email"
                  id="email"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="email"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Print Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
            </fieldset>
          </div>

          <div className="w-1/2 pl-2">
            {/* Contact details content */}
            <fieldset className="border p-2 h-72">
              <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
                Contact Details
              </legend>
              {/* Contact Details Inputs */}
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="landline1"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Landline 1
                </label>
                <input
                  type="text"
                  id="landline1"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="landline2"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Landline 2
                </label>
                <input
                  type="text"
                  id="landline2"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="landline3"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Landline 3
                </label>
                <input
                  type="text"
                  id="landline3"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="mobile1"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Mobile 1
                </label>
                <input
                  type="text"
                  id="mobile1"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="mobile2"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Mobile 2
                </label>
                <input
                  type="text"
                  id="mobile2"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="mobile3"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Mobile 3
                </label>
                <input
                  type="text"
                  id="mobile3"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="email"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="fax"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Fax
                </label>
                <input
                  type="text"
                  id="fax"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="website"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="opening_balance"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Opening Balance
                </label>
                <input
                  type="text"
                  id="opening_balance"
                  className="border w-2/3 h-5"
                  required
                />
              </div>
            </fieldset>
          </div>
          {/* Control Panel */}
          <div className="w-1/4 pl-2 pr-4 pt-10">
            <fieldset className="border p-2">
              <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
                Control Panel
              </legend>
              <div className="flex flex-col space-y-2">
                <button className="bg-gray-200 text-black px-2 py-1 rounded ">
                  Add
                </button>
                <button className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full">
                  Update
                </button>
                <button className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full">
                  Delete
                </button>
                <button className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full">
                  Close
                </button>
              </div>
            </fieldset>
            <div className="mt-4 text-sm pl-2">
              Total No. of Customer: <span className="font-semibold">N</span>
            </div>
          </div>
        </div>
        {/* Two new divs in a row */}
        <div className="flex space-x-4 pl-2">
          <div className="w-1/2">
            {/* Contact person details div */}
            <fieldset className="border p-2">
              <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
                Contact Person Details
              </legend>

              <div className="flex space-x-2 mb-2">
                <div className="w-1/2 flex space-x-2">
                  <label
                    htmlFor="name"
                    className="w-1/3"
                    style={{ fontSize: "13px", fontWeight: "normal" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border w-2/3 h-5"
                    required
                  />
                </div>
                <div className="w-1/2 flex space-x-2">
                  <label
                    htmlFor="mobile1"
                    className="w-1/3"
                    style={{ fontSize: "13px", fontWeight: "normal" }}
                  >
                    Mobile 1
                  </label>
                  <input
                    type="text"
                    id="mobile1"
                    className="border w-2/3 h-5"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-2 mb-2">
                <div className="w-1/2 flex space-x-2">
                  <label
                    htmlFor="designation"
                    className="w-1/3"
                    style={{ fontSize: "13px", fontWeight: "normal" }}
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="border w-2/3 h-5"
                    required
                  />
                </div>
                <div className="w-1/2 flex space-x-2">
                  <label
                    htmlFor="mobile2"
                    className="w-1/3"
                    style={{ fontSize: "13px", fontWeight: "normal" }}
                  >
                    Mobile 2
                  </label>
                  <input
                    type="text"
                    id="mobile2"
                    className="border w-2/3 h-5"
                    required
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <div className="w-1/2 pr-4">
            {/* Review section div */}
            <fieldset className="border  p-2">
              <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
                Review
              </legend>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor=""
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Remarks1
                </label>
                <input
                  type="text"
                  id=""
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor=""
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Remarks2
                </label>
                <input
                  type="text"
                  id=""
                  className="border w-2/3 h-5"
                  required
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor=""
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Remarks3
                </label>
                <input
                  type="text"
                  id=""
                  className="border w-2/3 h-5"
                  required
                />
              </div>
            </fieldset>
          </div>
        </div>
      </form>

      {/* Table Content */}
      <div className="pl-2 pr-4">
        <fieldset className="border p-1">
          <legend style={{ fontSize: "13px", fontWeight: "normal" }}>
            Party Details
          </legend>
          <div className="container mx-auto">
            <div className="relative overflow-x-auto overflow-y-auto h-[137px] w-[1200px] ">
              <table className=" bg-white border border-gray-300 table-auto">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className=" border-gray-300 text-left text-sm px-4 py-2 whitespace-nowrap"
                        style={{
                          fontSize: "13px",
                          fontWeight: "normal",
                          width: "100px",
                        }}
                        onClick={header === "Name" ? handleSort : undefined}
                      >
                        {header} {header === "Name" && getSortIcon()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      {headers.map((header, j) => (
                        <td
                          key={j}
                          className={`border-gray-300 border text-sm whitespace-nowrap ${
                            j < headers.length - 1 ? "pr-4" : ""
                          }`}
                          style={{
                            width: header === "Name" ? "200px" : "120px",
                            fontSize: "11px",
                          }}
                        >
                          {row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </fieldset>
      </div>

      {/* <div className="pl-2 pr-4">
      <fieldset className='border p-1'>
    <legend style={{ fontSize: '13px', fontWeight: 'normal' }}>Party Details</legend>
    <div className="container mx-auto">
      <div className="relative overflow-x-auto overflow-y-auto max-h-[196px] w-full lg:w-[1220px]">
        <table className="min-w-full bg-white border border-gray-300 table-auto">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="border-gray-300 text-left text-sm px-4 py-2 whitespace-nowrap"
                  style={{ fontSize: '13px', fontWeight: 'normal', width: '100px' }}
                  onClick={header === 'Name' ? handleSort : undefined}
                >
                  {header} {header === 'Name' && getSortIcon()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-blue-500 hover:text-white transition-colors duration-300">
                {headers.map((header, j) => (
                  <td
                    key={j}
                    className={`border-gray-300 border text-sm whitespace-nowrap ${j < headers.length - 1 ? 'pr-4' : ''}`}
                    style={{ width: header === 'Name' ? '200px' : '120px', fontSize: '11px' }}
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </fieldset>
      </div> */}
    </div>
  );
};

export default CustomerForm;
