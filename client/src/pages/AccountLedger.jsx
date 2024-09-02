import React from "react";

function AccountLedger() {
  return (
    <div>
      <div style={{ textAlign: "center", color: "brown" }}>
        <u>
          <h3 className="text-2xl">Account Ledger</h3>
        </u>
        <h1 className="text-3xl font-semibold">Haryana Laboratory</h1>
        <h4 className="text-1xl">Suvidha Marg, Corner Gali No.3, Aggarsain Colony, Sirsa-125055</h4>
        <h4>098133-23157, 094665-37157, 01666-223157</h4>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "brown",
          margin: "0 17px",
        }}
      >
        <div>
          <h4 style={{fontSize:"17px"}}>M/s/Sh.: JAI JAGDAMBE RICE MILLS</h4>
          <b>
            <p style={{ marginLeft: "56px" }}>GURUHARSAHAI</p>
          </b>
        </div>
        <div style={{ textAlign: "right", alignSelf: "center" }}>
          <h4 style={{ margin: 0 }}>(FROM 01-04-2023 to 06-03-2024)</h4>
          <b>
            <p>Opening Balance: 14400</p>
          </b>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div
        style={{
          padding: "10px 13px",
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "450px", // Adjust as needed
          maxWidth: "100%", // Adjust as needed
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 2fr 1fr 1fr", // Adjusted for larger Remarks/Narration column
            gap: "10px",
            color: "black",
            borderTop: "4px solid black",
            borderBottom: "4px solid black",
            padding: "5px 0",
          }}
        >
          <div>Date</div>
          <div>Type</div>
          <div>Particulars</div>
          <div>Remarks/Narration</div>
          <div>Debit</div>
          <div>Credit</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 2fr 1fr 1fr", // Same column configuration
            gap: "10px",
            color: "black",
            padding: "5px 0",
          }}
        >
          <div>12-Apr-23</div>
          <div>Amt</div>
          <div>Cash</div>
          <div>PNB A/C MADAN GUPTA</div>
          <div></div>
          <div>14400</div>

          <div>28-Dec-23</div>
          <div>Rpt</div>
          <div>2793</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>28-Dec-23</div>
          <div>Rpt</div>
          <div>2794</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>06-Jan-24</div>
          <div>Rpt</div>
          <div>2979</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>16-Jan-24</div>
          <div>Rpt</div>
          <div>3177</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>16-Jan-24</div>
          <div>Rpt</div>
          <div>3178</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>29-Jan-24</div>
          <div>Rpt</div>
          <div>3394</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>29-Jan-24</div>
          <div>Rpt</div>
          <div>3395</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>29-Jan-24</div>
          <div>Rpt</div>
          <div>3431</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>29-Jan-24</div>
          <div>Rpt</div>
          <div>3432</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>05-Feb-24</div>
          <div>Rpt</div>
          <div>3516</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>05-Feb-24</div>
          <div>Rpt</div>
          <div>3517</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>09-Feb-24</div>
          <div>Rpt</div>
          <div>3573</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>09-Feb-24</div>
          <div>Rpt</div>
          <div>3574</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>09-Feb-24</div>
          <div>Rpt</div>
          <div>3575</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>15-Feb-24</div>
          <div>Rpt</div>
          <div>3693</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>15-Feb-24</div>
          <div>Rpt</div>
          <div>3694</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>15-Feb-24</div>
          <div>Rpt</div>
          <div>3695</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>15-Feb-24</div>
          <div>Rpt</div>
          <div>3737</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>15-Feb-24</div>
          <div>Rpt</div>
          <div>3738</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>21-Feb-24</div>
          <div>Rpt</div>
          <div>3826</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>21-Feb-24</div>
          <div>Rpt</div>
          <div>3827</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>23-Feb-24</div>
          <div>Rpt</div>
          <div>3890</div>
          <div></div>
          <div>400</div>
          <div></div>

          <div>23-Feb-24</div>
          <div>Rpt</div>
          <div>3891</div>
          <div></div>
          <div>400</div>
          <div></div>

        </div>

        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "brown",
          margin: "10px 0px 0",
          borderTop: "4px solid black",
          borderBottom: "4px solid black",
          paddingTop: "10px",
        }}
      >
        {/* Footer Section */}
        <div>
          <h4>Total Number of Samples: 23</h4>
        </div>
        <div style={{ textAlign: "right" }}>
          <h4>Closing Balance: 9200</h4>
        </div>
      </div>
      </div>

    </div>
  );
}

export default AccountLedger;
