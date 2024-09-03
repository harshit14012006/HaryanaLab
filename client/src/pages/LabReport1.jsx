import React from 'react';

function CenteredThreeColumnLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex">
        <div className="h-20 flex items-center justify-center ">
        <div className="flex items-center justify-center  overflow-hidden">
        <div
  className="border rounded-lg bg-red-950 text-white  mt-[1000px] mb-[1057px] text-center"
  style={{
    width: "25px", // Fits the vertical layout
    height: "530px", // Height to match the previous width
    writingMode: "vertical-rl", // Rotates the text vertically
    transform: "rotate",
    transformOrigin: "bottom right", // Aligns the text from the bottom
  }}
>
  Regd. No. 05/11/03956/P .M.T/SSI/Dt. 11-04-86
</div>

        </div>

        {/* Column 2 */}
        <div className="h-40 w-[960px]  flex items-center justify-center ">


      <div
        className="border-2 border-red-950 rounded-lg p-1"
        style={{ width: "900px", height: "504px" }}
      >
        <div className="h-24 w-full bg-red-950 flex items-center p-4 rounded-lg">
          <div className="flex flex-col items-start mr-4 ml-28">
            <h1 className="text-4xl ml-20 text-white mb-2 font-bold">
              Haryana Laboratory
            </h1>
            <p className="text-white -ml-3">
              Suvidha Marg, Corner Gali no.3, Aggarsain Colony, Sirsa-125055
            </p>
          </div>
          <div
            className="border-2 border-white p-4 h-20 flex flex-col justify-center rounded-lg"
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
                className="bg-white w-20 h-8 ml-1 rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <span className="text-white ml-2">Dt.</span>
              <input
                type="text"
                className="bg-white w-20 h-8 ml-2 rounded-lg"
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
          <div className="flex-1 border-2 rounded-lg border-red-950 p-4">
            <div>
              <span className=" font-bold text-white border border-red-950 bg-red-950 px-2 py-1 rounded-lg">
                Moisture
              </span>
              <span className="ml-24">NA</span>
            </div>
          </div>
          <div className="flex-1  border-2 rounded-lg border-red-950 p-4">
            <div>
              <span className=" font-bold text-white border border-red-950 bg-red-950 px-2 py-1 rounded-lg">
                Oil
              </span>
              <span className="ml-24">NA</span>
            </div>
          </div>
          <div className="flex-1 p-4 border-2 rounded-lg border-red-950 ">
            <div>
              <span className=" font-bold text-white border border-red-950 bg-red-950 px-2 py-1 rounded-lg">
                FFA
              </span>
              <span className="ml-24">NA</span>
            </div>
          </div>
        </div>

        {/* Signature and other section */}
        <div className="max-w-4xl  p-1">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="col-span-1 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Code/Sample No</p>
              <p className="text-lg">13A</p>
            </div>
            <div className="col-span-1 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Date</p>
              <p className="text-lg">12/12/24</p>
            </div>
            <div className="col-span-1 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Vehicle No.</p>
              <p className="text-lg">2346</p>
            </div>
            <div className="col-span-1 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold">Bags</p>
              <p className="text-lg">234</p>
            </div>
            <div className="col-span-1 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Weight (QI)</p>
              <p className="text-lg">123.46</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mb-1">
            <div className="col-span-2 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Seal Engraved</p>
              <p className="text-lg">S.P.P.P.L</p>
            </div>
            <div className="col-span-3 border-2 border-red-950 p-2 rounded-lg">
              <p className="text-sm font-bold ">Signature</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">
                  All disputes are subject to GSPFA jurisdiction
                </p>
                <p className="text-lg italic">[Signature Image]</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Sample will be destroyed after function
              </p>
            </div>
          </div>
        </div>
        <div
          className="border rounded-lg bg-red-950 text-white px-1"
          style={{ width: "895px", height: "25px",marginLeft: "-4px" }}
        >
          A House For Analysis of Rice Bran, Oil Seeds, Oil Cakes, Atta, Maida,
          Suzi, Besan, Spices, Condiments, Acids & Fertilizers.
        </div>
      </div>
    </div>
        </div>

        {/* Column 3 */}
        <div className="h-40 w-1/4  flex items-center justify-center ">
          Column 3
        </div>
      </div>
    </div>
  );
}

export default CenteredThreeColumnLayout;
