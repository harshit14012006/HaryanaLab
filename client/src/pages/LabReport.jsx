import React from "react";
import lablogo from "../images/lablogo.png";
function LabReport() {
  const moisture = 111;
  const oil = 148;
  const ffa = 329;
  const digits = `${moisture}${oil}${ffa}`.split("");

  // Function to count the occurrences of each digit
  const countOccurrences = (digit) =>
    digits.filter((d) => d === String(digit)).length;

  // const digitArray = Array.from({ length: 10 }, (_, i) => i);
  const digitArray = Array.from({ length: 9 }, (_, i) => i + 1).concat([0]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gray-500 pointer-events-none"
        style={{
          opacity: 0.1,
          transformOrigin: "center",
        }}
      >
        Analysis Report
      </div>

      <div>
        <div
          className="absolute top-0 bottom-0 left-0 text-center text-white border rounded-md bg-gradient-to-r from-red-800 via-red-900 to-red-950 ml-36"
          style={{
            width: "25px",
            height: "527px",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)", // Flip the text to start from the bottom
            transformOrigin: "bottom right",
            top: "-465px",
            left: "11px",
          }}
        >
          Regd. No. 05/11/03956/P .M.T/SSI/Dt. 11-04-86
        </div>

        <div
          className="p-1 border-2 rounded-md border-red-950"
          style={{ width: "900px", height: "506px", marginLeft: "35px" }}
        >
          <div className="flex items-center w-full p-2 rounded-md h-28 bg-gradient-to-r from-red-800 via-red-900 to-red-950">
            <div className="flex items-center mr-auto">
              <div className="w-[100px] border-white border-2">
                <img src={lablogo} alt="Lab Logo" className="h-20 mr-4 w-28" />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="mb-2 text-5xl font-bold text-white ml-9 whitespace-nowrap">
                  Haryana Laboratory
                </h1>
                <p className="ml-8 -ml-3 text-white">
                  Suvidha Marg, Corner Gali no.3, Aggarsain Colony, Sirsa-125055
                </p>
              </div>
            </div>

            <div
              className="flex flex-col justify-center h-24 border-2 border-white rounded-md"
              style={{ width: "150px" }}
            >
              <div className="flex items-center px-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-4 h-4 mr-2"
                />
                <p className="text-white whitespace-nowrap">86076-23157</p>
              </div>
              <div className="flex items-center px-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="Mobile"
                  className="w-4 h-4 mr-2"
                />
                <p className="text-white whitespace-nowrap">91833-23157</p>
              </div>
              <div className="flex items-center px-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="Mobile"
                  className="w-4 h-4 mr-2"
                />
                <p className="text-white whitespace-nowrap">94655-37157</p>
              </div>
              <div className="flex items-center px-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="Mobile"
                  className="w-4 h-4 mr-2"
                />
                <p className="text-white whitespace-nowrap">81685-26828</p>
              </div>
            </div>

            {/* info  no dt  */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span className="ml-2 text-white">No.</span>
                <input
                  type="text"
                  className="w-20 h-8 ml-1 bg-white rounded-md"
                />
              </div>
              <div className="flex items-center">
                <span className="ml-2 text-white">Dt.</span>
                <input
                  type="text"
                  className="w-20 h-8 ml-2 bg-white rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 text-red-950">
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
              <span className="px-2 py-1 font-bold border rounded text-red-950 border-red-950">
                Sample Not Drawn by Haryana Lab
              </span>
            </span>
            <span className="block mb-3">
              Remarks...........................................................................................................................................................................................
            </span>
          </div>

          <div className="flex space-x-1">
            <div className="flex-1 p-4 px-1 border-2 rounded-lg border-red-950">
              <div>
                <span className="px-5 py-3 font-bold text-white border rounded-md border-red-950 bg-gradient-to-r from-red-800 via-red-900 to-red-950">
                  Moisture
                </span>

                <span className="ml-24">NA</span>
              </div>
            </div>
            <div className="flex-1 p-4 px-1 border-2 rounded-lg border-red-950">
              <div>
                <span className="px-5 py-3 font-bold text-white border rounded-md border-red-950 bg-gradient-to-r from-red-800 via-red-900 to-red-950">
                  Oil
                </span>
                <span className="ml-24">NA</span>
              </div>
            </div>
            <div className="flex-1 p-4 px-1 border-2 rounded-lg border-red-950">
              <div>
                <span className="px-5 py-3 font-bold text-white border rounded-md border-red-950 bg-gradient-to-r from-red-800 via-red-900 to-red-950">
                  FFA
                </span>
                <span className="ml-24">NA</span>
              </div>
            </div>
          </div>

          {/* Signature and other section */}
          <div className="grid grid-cols-6 mt-3">
            {/* Existing Columns */}
            <div className="h-20 col-span-1 p-2 text-center border-t-2 border-b-2 border-l-2 border-red-950 rounded-tl-md rounded-bl-md">
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Code/Sample No.
              </p>
              <p className="mt-2">13A</p>
            </div>

            <div className="h-20 col-span-1 p-2 text-center border-t-2 border-b-2 border-l-2 border-red-950">
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Date
              </p>
              <p className="mt-2">12/12/24</p>
            </div>

            <div className="h-20 col-span-1 p-2 text-center border-t-2 border-b-2 border-l-2 border-red-950">
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Vehicle No.
              </p>
              <p className="mt-2">2346</p>
            </div>

            <div className="h-20 col-span-1 p-2 text-center border-t-2 border-b-2 border-l-2 border-red-950">
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Bags
              </p>
              <p className="mt-2">234</p>
            </div>

            <div className="h-20 col-span-1 p-2 text-center border-2 border-red-950 rounded-tr-md rounded-br-md">
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Weight (Ql.)
              </p>
              <p className="mt-2">123.46</p>
            </div>

            <div
              className="col-span-1 p-2 ml-1 text-center border-2 rounded-md border-red-950"
              style={{ height: "150px", width: "145px" }}
            >
              <p className="font-bold border-b border-red-950">Signature</p>
              <p
                className="text-sm whitespace-nowrap"
                style={{ fontSize: "7px" }}
              >
                All disputes are subject to SRSA jurisdiction
              </p>
              <p className="mt-2 italic">[Signature Image]</p>
              <p
                className="mt-4 text-sm whitespace-nowrap"
                style={{ fontSize: "7px" }}
              >
                Samples will be destroyed after function.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-3">
            {/* Seal Engraved */}
            <div
              className="col-span-1 p-2 -mt-20 text-center border-2 rounded-md border-red-950 "
              style={{ height: "71px", width: "147px" }}
            >
              <p className="font-bold border-b whitespace-nowrap border-red-950">
                Seal Engraved
              </p>
              <p className="mt-2 text-sm">[Seal Image]</p>
            </div>
          </div>

          <div
            className="px-1 -mt-1 text-white border rounded-lg bg-gradient-to-r from-red-800 via-red-900 to-red-950"
            style={{ width: "895px", height: "25px", marginLeft: "-4px" }}
          >
            A House For Analysis of Rice Bran, Oil Seeds, Oil Cakes, Atta,
            Maida, Suzi, Besan, Spices, Condiments, Acids & Fertilizers.
          </div>
          <div className="grid grid-rows-12 gap-1 ml-[898px] -mt-[531px] h-[533px]">
            <div className="h-10 row-span-1 px-2 py-1 text-lg text-white bg-gradient-to-r from-red-800 via-red-900 to-red-950 w-14 rounded-t-md">
              Since
            </div>
            {/*Something working on stars   ^-^ */}

            {digitArray.map((digit) => {
              // Get the count of occurrences for the current digit
              const count = countOccurrences(digit);

              // Create an array of stars with length equal to count
              const starsArray = Array(count).fill("★");

              return (
                <div
                  key={digit}
                  className="h-10 col-span-1 px-5 py-2 text-white bg-gradient-to-r from-red-800 via-red-900 to-red-950 w-14 flex flex-col items-center justify-center"
                >
                  {/* Top stars */}
                  <div className="text-yellow-400 text-xs">
                    {starsArray.slice(0, 5).map((star, index) => (
                      <span key={`top-${index}`}>{star}</span>
                    ))}
                  </div>

                  {/* Number with stars on the sides */}
                  <div className="relative flex items-center justify-center">
                    {/* Left stars */}
                    <div className="absolute left-[-1rem] flex flex-col items-center text-yellow-400 text-xs">
                      {starsArray.slice(5, 7).map((star, index) => (
                        <div key={`left-${index}`}>{star}</div>
                      ))}
                    </div>

                    {/* Right stars */}
                    <div className="absolute right-[-1rem] flex flex-col items-center text-yellow-400 text-xs">
                      {starsArray.slice(7, 9).map((star, index) => (
                        <div key={`right-${index}`}>{star}</div>
                      ))}
                    </div>

                    {/* Number in the center */}
                    <div className="text-base">{digit}</div>
                  </div>
                </div>
              );
            })}

            <div className="col-span-1 px-2 py-1 text-lg text-white bg-gradient-to-r from-red-800 via-red-900 to-red-950 h-9 w-14 rounded-b-md">
              1985
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabReport;
