import React from "react";

function LabReport() {
  return (
    <div className="flex items-center justify-center h-screen">

      <div
        className="absolute inset-0 flex items-center justify-center text-gray-500 text-5xl font-bold pointer-events-none"
        style={{
          opacity: 0.1,
          transformOrigin: "center",
        }}
      >
        Analysis Report
      </div>

      <div>
        <div
          className="absolute top-0 bottom-0 left-0 border rounded-md   bg-gradient-to-r from-red-800 via-red-900 to-red-950 ml-36 text-white text-center"
          style={{
            width: "25px",
            height: "516px",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)", // Flip the text to start from the bottom
            transformOrigin: "bottom right",
            top: "-450px",
            left: "11px",
          }}
        >
          Regd. No. 05/11/03956/P .M.T/SSI/Dt. 11-04-86
        </div>

        <div
          className="border-2 border-red-950 rounded-md p-1"
          style={{ width: "900px", height: "491px", marginLeft: "35px" }}
        >
          <div className="h-24 w-full  bg-gradient-to-r from-red-800 via-red-900 to-red-950 flex items-center p-4 rounded-md">
            <div className="flex flex-col items-start mr-4 ml-28">
              <h1 className="text-4xl ml-20 text-white mb-2 font-bold">
                Haryana Laboratory
              </h1>
              <p className="text-white -ml-3">
                Suvidha Marg, Corner Gali no.3, Aggarsain Colony, Sirsa-125055
              </p>
            </div>
            <div
              className="border-2 border-white p-4 h-20 flex flex-col justify-center rounded-md"
              style={{ width: "150px" }}
            >
              <p className="text-white">091833-23157</p>
              <p className="text-white ">094655-37157</p>
              <p className="text-white ">01666-223157</p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="text-white ml-2">No.</span>
                <input
                  type="text"
                  className="bg-white w-20 h-8 ml-1 rounded-md"
                />
              </div>
              <div className="flex items-center">
                <span className="text-white ml-2">Dt.</span>
                <input
                  type="text"
                  className="bg-white w-20 h-8 ml-2 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="text-red-950 mt-4">
            <span className="block mb-3 ml-10">
              We hereby certify that the sample described
              as...........................................................................................
              received by us
            </span>
            <span className="block mb-3">
              on dt. .............................................. From
              Sh.M/s..........................................................................................................................
            </span>
            <span className="block mb-3">
              ..............................................................................being
              particular and result as under.
              <span className="font-bold text-red-950 border border-red-950 px-2 py-1 rounded">
                Sample Not Drawn by Haryana Lab
              </span>
            </span>
            <span className="block mb-3">
              Remarks...........................................................................................................................................................................................
            </span>
          </div>

          <div className="flex space-x-1">
            <div className="flex-1 border-2 rounded-lg border-red-950 p-4 px-1">
              <div>
                <span className="font-bold text-white border border-red-950  bg-gradient-to-r from-red-800 via-red-900 to-red-950 px-5 py-3 rounded-md">
                  Moisture
                </span>

                <span className="ml-24">NA</span>
              </div>
            </div>
            <div className="flex-1  border-2 rounded-lg border-red-950 p-4 px-1">
              <div>
                <span className=" font-bold text-white border border-red-950 px-5 py-3  bg-gradient-to-r from-red-800 via-red-900 to-red-950 rounded-md">
                  Oil
                </span>
                <span className="ml-24">NA</span>
              </div>
            </div>
            <div className="flex-1 p-4 border-2 rounded-lg border-red-950 px-1">
              <div>
                <span className=" font-bold text-white border border-red-950 px-5 py-3  bg-gradient-to-r from-red-800 via-red-900 to-red-950  rounded-md">
                  FFA
                </span>
                <span className="ml-24">NA</span>
              </div>
            </div>
          </div>

          {/* Signature and other section */}
          <div className="grid grid-cols-6 mt-3">
            {/* Existing Columns */}
            <div className="col-span-1 border-l-2 border-t-2 border-b-2 border-red-950 p-2 text-center rounded-tl-md rounded-bl-md h-20">
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Code/Sample No.
              </p>
              <p className="mt-2">13A</p>
            </div>

            <div className="col-span-1 border-l-2 border-t-2 border-b-2 border-red-950 p-2 text-center h-20">
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Date
              </p>
              <p className="mt-2">12/12/24</p>
            </div>

            <div className="col-span-1 border-l-2 border-t-2 border-b-2 border-red-950 p-2 text-center h-20">
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Vehicle No.
              </p>
              <p className="mt-2">2346</p>
            </div>

            <div className="col-span-1 border-l-2 border-t-2 border-b-2 border-red-950 p-2 text-center h-20">
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Bags
              </p>
              <p className="mt-2">234</p>
            </div>

            <div className="col-span-1 border-2 border-red-950 p-2 text-center rounded-tr-md rounded-br-md h-20">
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Weight (Ql.)
              </p>
              <p className="mt-2">123.46</p>
            </div>

            <div
              className="col-span-1 border-2 rounded-md border-red-950 p-2 text-center ml-1"
              style={{ height: "150px", width: "145px" }}
            >
              <p className="font-bold border-b border-red-950">Signature</p>
              <p
                className="whitespace-nowrap text-sm"
                style={{ fontSize: "7px" }}
              >
                All disputes are subject to SRSA jurisdiction
              </p>
              <p className="mt-2 italic">[Signature Image]</p>
              <p
                className="whitespace-nowrap text-sm mt-4"
                style={{ fontSize: "7px" }}
              >
                Samples will be destroyed after function.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-3">
            {/* Seal Engraved */}
            <div
              className="col-span-1 border-2 border-red-950 p-2 text-center rounded-md -mt-20 "
              style={{ height: "71px", width: "147px" }}
            >
              <p className="font-bold whitespace-nowrap border-b border-red-950">
                Seal Engraved
              </p>
              <p className="mt-2 text-sm">[Seal Image]</p>
            </div>
          </div>

          <div
            className="border rounded-lg  bg-gradient-to-r from-red-800 via-red-900 to-red-950 text-white px-1 -mt-1"
            style={{ width: "895px", height: "25px", marginLeft: "-4px" }}
          >
            A House For Analysis of Rice Bran, Oil Seeds, Oil Cakes, Atta,
            Maida, Suzi, Besan, Spices, Condiments, Acids & Fertilizers.
          </div>
          <div className="grid grid-rows-12 gap-1 ml-[898px] -mt-[518px]">
            <div className="row-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 rounded-t-md text-white py-1 px-2 text-lg">
              Since
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              1
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              2
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              3
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              4
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              5
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              6
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              7
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              8
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              9
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-10 w-14 text-white py-2 px-5 text-lg">
              0
            </div>
            <div className="col-span-1  bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-9 w-14 rounded-b-md text-white py-1 px-2 text-lg">
              1985
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabReport;
