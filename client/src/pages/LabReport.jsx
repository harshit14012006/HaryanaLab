    import React from "react";

    function LabReport() {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div
            className="border-2 border-red-950 rounded-lg p-1"
            style={{ width: "900px", height: "600px" }}
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
  <span className="block mb-2 ml-10">
    We hereby certify that the sample described as........................................................................................... received by us 
  </span>
  <span className="block mb-2">
    on dt.   .............................................. From Sh.M/s..........................................................................................................................
  </span>
  <span className="block mb-2">
    ..............................................................................being particular and result as under. 
    <span className="font-bold text-red-950 border border-red-950 px-2 py-1 rounded">
      Sample Not Drawn by Haryana Lab
    </span>
  </span>
  <span className="block">
    Remarks...........................................................................................................................................................................................
  </span>
</div>

<div className="flex space-x-2">
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


        </div>
        </div>
    );
    }

    export default LabReport;
