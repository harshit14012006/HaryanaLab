import React from "react";

const styles = {
  container: {
    textAlign: "center",
    color: "brown",
  },
  headerTitle: {
    textDecoration: "underline",
  },
  headerMain: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  address: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  contact: {
    fontWeight: "bold",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    color: "brown",
    margin: "0 17px",
  },
  leftSection: {
    fontSize: "17px",
    fontWeight: "normal",
  },
  rightSection: {
    textAlign: "right",
    alignSelf: "center",
  },
  scrollableTable: {
    padding: "10px 13px",
    overflowX: "auto",
    overflowY: "auto",
    maxHeight: "450px",
    maxWidth: "100%",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 2fr 1fr 1fr",
    gap: "10px",
    color: "black",
    borderTop: "4px solid black",
    borderBottom: "4px solid black",
    padding: "5px 0",
    fontWeight: "bold",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 2fr 1fr 1fr",
    gap: "10px",
    color: "black",
    padding: "5px 0",
  },
  footerSection: {
    display: "flex",
    justifyContent: "space-between",
    color: "brown",
    margin: "10px 0px 0",
    borderTop: "4px solid black",
    borderBottom: "4px solid black",
    paddingTop: "10px",
  },
  totalSamples: {
    textAlign: "right",
  },
};

function AccountLedger() {
  return (
    <div>
      <div style={styles.container}>
        <u style={styles.headerTitle}>
          <h3 className="text-2xl">Account Ledger</h3>
        </u>
        <h1 style={styles.headerMain}>Haryana Laboratory</h1>
        <h4 style={styles.address}>
          Suvidha Marg, Corner Gali No.3, Aggarsain Colony, Sirsa-125055
        </h4>
        <h4 style={styles.contact}>
          098133-23157, 094665-37157, 01666-223157
        </h4>
      </div>

      <div style={styles.headerSection}>
        <div style={styles.leftSection}>
          <h4>M/s/Sh.: JAI JAGDAMBE RICE MILLS</h4>
          <b>
            <h4 style={{ marginLeft: "56px" }}>GURUHARSAHAI</h4>
          </b>
        </div>
        <div style={styles.rightSection}>
          <h4>(FROM 01-04-2023 to 06-03-2024)</h4>
          <b>
            <p>Opening Balance: 14400</p>
          </b>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div style={styles.scrollableTable}>
        <div style={styles.tableHeader}>
          <div>Date</div>
          <div>Type</div>
          <div>Particulars</div>
          <div>Remarks/Narration</div>
          <div>Debit</div>
          <div>Credit</div>
        </div>

        {/* Table Data Rows */}
        {[...Array(20)].map((_, index) => (
          <div style={styles.tableRow} key={index}>
            <div>{`12-Apr-23`}</div>
            <div>{`Amt`}</div>
            <div>{`Cash`}</div>
            <div>{`PNB A/C MADAN GUPTA`}</div>
            <div>{index % 2 === 0 ? `14400` : ``}</div>
            <div>{index % 2 !== 0 ? `2000` : ``}</div>
          </div>
        ))}

        <div style={styles.footerSection}>
          <div>
            <h4>Total Number of Samples: 23</h4>
          </div>
          <div style={styles.totalSamples}>
            <h4>Closing Balance: 9200</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLedger;
