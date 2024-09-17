import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
// const headers = [
//   "Party Id ",
//   "Name",
//   "Address 1",
//   "Address 2",
//   "Landmark",
//   "State",
//   "Pincode",
//   "City",
//   "District",
//   "Print Name",
//   "Landline1",
//   "Landline2",
//   "Landline3",
//   "Mobile1",
//   "Mobile2",
//   "Mobile3",
//   "Email",
//   "Fax",
//   "Website",
//   "Opening Balance",
//   "Mobile 1",
//   "Designation",
//   "Mobile 2",
//   "Remarks1",
//   "Remarks2",
//   "Remarks3",
// ];

const headers = [
  "Partyid",
  "Partyname",
  "Address1",
  "Address2",
  "Landmark",
  "State",
  "Pincode",
  "City",
  "District",
  "Printname",
  "Landline1",
  "Landline2",
  "Landline3",
  "Mobile1",
  "Mobile2",
  "Mobile3",
  "Fax",
  "Email",
  "Website",
  "Openingbalance",
  "Name",
  "Designation",
  "Remarks",
  "Remarks1",
  "Remarks2",
];

const CustomerForm = () => {
  const [dataa, getdata] = useState([]);
  const [StateCity, setStateCity] = useState([]);
  const [Update, setUpdate] = useState([]);
  const [formdata, setFormdata] = useState({
    Partyname: "",
    Address1: "",
    Address2: "",
    Landmark: "",
    State: "",
    Pincode: "",
    City: "",
    District: "",
    Printname: "",
    Landline1: "",
    Landline2: "",
    Landline3: "",
    Mobile1: "",
    Mobile2: "",
    Mobile3: "",
    Fax: "",
    Email: "",
    Website: "",
    Openingbalance: "",
    Name: "",
    Designation: "",
    Remarks: "",
    Remarks1: "",
    Remarks2: "",
  });
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    try {
      //Customers Api Call

      axios
        .get("http://localhost:3001/api/customers")
        .then((response) => {
          getdata(response.data.id);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });

      axios
        .get("http://localhost:3001/api/mastercity")
        .then((response) => {
          console.log(response.data);
          setStateCity(response.data.id);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...dataa].sort((a, b) => {
      const nameA = a["Name"].toLowerCase();
      const nameB = b["Name"].toLowerCase();

      return newSortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    getdata(sortedData);
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

  const handleChange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const HandleClick = (data) => {
    console.log(data);
    setFormdata(data);
    setUpdate(data);
  };

  const handleDelete = () => {
    try {
      axios
        .delete(`http://localhost:3001/api/customers/${Update.Partyid}`)
        .then((response) => {
          console.log("Data Deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("There was an error Deleting the data!", error);
        });
      setUpdate([]);
      FetchData();
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const HandleAddData = () => {
    try {
      axios
        .post("http://localhost:3001/api/customers", formdata)
        .then((response) => {
          console.log("Data submitted successfully:", response.data);
        })
        .catch((error) => {
          console.error("There was an error submitting the data!", error);
        });
      FetchData();
      setFormdata({
        Partyname: "",
        Address1: "",
        Address2: "",
        Landmark: "",
        State: "",
        Pincode: "",
        City: "",
        District: "",
        Printname: "",
        Landline1: "",
        Landline2: "",
        Landline3: "",
        Mobile1: "",
        Mobile2: "",
        Mobile3: "",
        Fax: "",
        Email: "",
        Website: "",
        Openingbalance: "",
        Name: "",
        Designation: "",
        Remarks: "",
        Remarks1: "",
        Remarks2: "",
      });
    } catch (error) {
      console.log("Error adding data:", error);
    }
  };

  const HandleUpdate = () => {
    try {
      axios
        .put(`http://localhost:3001/api/customers/${Update.Partyid}`, formdata)
        .then((response) => {
          console.log("Data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("There was an error updating the data!", error);
        });
      setUpdate([]);
      FetchData();
      setFormdata({
        Partyname: "",
        Address1: "",
        Address2: "",
        Landmark: "",
        State: "",
        Pincode: "",
        City: "",
        District: "",
        Printname: "",
        Landline1: "",
        Landline2: "",
        Landline3: "",
        Mobile1: "",
        Mobile2: "",
        Mobile3: "",
        Fax: "",
        Email: "",
        Website: "",
        Openingbalance: "",
        Name: "",
        Designation: "",
        Remarks: "",
        Remarks1: "",
        Remarks2: "",
      });
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the clicked button's value
    const clickedButton = e.nativeEvent.submitter.value;

    // Handle based on the button clicked
    switch (clickedButton) {
      case "Add":
        HandleAddData();
        break;
      case "Update":
        HandleUpdate();
        // Open specific handler for button 2
        break;
      case "Delete":
        handleDelete();
        break;
      default:
        console.log("Unknown button clicked");
    }
  };

  return (
    <div className="bg-gray-100">
      <form onSubmit={handleSubmit}>
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
                  name="Partyname"
                  value={formdata.Partyname}
                  onChange={handleChange}
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
                  name="Address1"
                  value={formdata.Address1}
                  onChange={handleChange}
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
                  name="Address2"
                  value={formdata.Address2}
                  onChange={handleChange}
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
                  name="Landmark"
                  value={formdata.Landmark}
                  onChange={handleChange}
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
                  name="State"
                  value={formdata.State}
                  onChange={handleChange}
                >
                  <option value="">Select a state</option>
                  {StateCity.length !== 0 &&
                    StateCity.map((item, index) => (
                      <option key={index} value={item.State}>
                        {item.State}
                      </option>
                    ))}
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
                  id="Pincode"
                  className="border w-2/3 h-5"
                  required
                  name="Pincode"
                  value={formdata.Pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="city"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  City
                </label>
                <select
                  id="city"
                  className="border w-2/3 h-5 px-2  text-sm"
                  required
                  name="City"
                  value={formdata.City}
                  onChange={handleChange}
                >
                  <option value="">Select a City</option>
                  {StateCity.length !== 0 &&
                    StateCity.map((item, index) => (
                      <option key={index} value={item.City}>
                        {item.City}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="text"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  District
                </label>
                <input
                  type="text"
                  id="District"
                  className="border w-2/3 h-5"
                  required
                  name="District"
                  value={formdata.District}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <label
                  htmlFor="text"
                  className="w-1/3"
                  style={{ fontSize: "13px", fontWeight: "normal" }}
                >
                  Print Name
                </label>
                <input
                  type="text"
                  className="border w-2/3 h-5"
                  required
                  name="Printname"
                  value={formdata.Printname}
                  onChange={handleChange}
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
                  name="Landline1"
                  value={formdata.Landline1}
                  onChange={handleChange}
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
                  name="Landline2"
                  value={formdata.Landline2}
                  onChange={handleChange}
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
                  name="Landline3"
                  value={formdata.Landline3}
                  onChange={handleChange}
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
                  name="Mobile1"
                  value={formdata.Mobile1}
                  onChange={handleChange}
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
                  name="Mobile2"
                  value={formdata.Mobile2}
                  onChange={handleChange}
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
                  name="Mobile3"
                  value={formdata.Mobile3}
                  onChange={handleChange}
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
                  name="Email"
                  value={formdata.Email}
                  onChange={handleChange}
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
                  name="Fax"
                  value={formdata.Fax}
                  onChange={handleChange}
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
                  name="Website"
                  value={formdata.Website}
                  onChange={handleChange}
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
                  name="Openingbalance"
                  value={formdata.Openingbalance}
                  onChange={handleChange}
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
                <button
                  type="submit"
                  value="Add"
                  className="bg-gray-200 text-black px-2 py-1 rounded "
                >
                  Add
                </button>
                <button
                  type="submit"
                  value="Update"
                  className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full"
                >
                  Update
                </button>
                <button
                  type="submit"
                  value="Delete"
                  className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full"
                >
                  Delete
                </button>
                <button
                  type="submit"
                  value="Close"
                  className="bg-gray-200 text-black px-2 py-1 rounded max-w-xs w-full"
                  onClick={() => window.close()}
                >
                  Close
                </button>
              </div>
            </fieldset>
            <div className="mt-4 text-sm pl-2">
              Total No. of Customer:{" "}
              <span className="font-semibold">{dataa.length}</span>
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
                    name="Name"
                    value={formdata.Name}
                    onChange={handleChange}
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
                    value={formdata.Mobile1}
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
                    name="Designation"
                    value={formdata.Designation}
                    onChange={handleChange}
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
                    value={formdata.Mobile2}
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
                  name="Remarks"
                  value={formdata.Remarks}
                  onChange={handleChange}
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
                  name="Remarks1"
                  value={formdata.Remarks1}
                  onChange={handleChange}
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
                  name="Remarks2"
                  value={formdata.Remarks2}
                  onChange={handleChange}
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
            <div className="relative overflow-x-auto overflow-y-auto h-[177px] w-[1200px] ">
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
                  {dataa.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      onClick={() => HandleClick(row)}
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
