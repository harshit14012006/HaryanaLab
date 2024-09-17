const {
  app,
  Menu,
  BrowserWindow,
  globalShortcut,
  ipcMain,
} = require("electron");
const path = require("path");
const { spawn } = require("child_process");

require("electron-reload")(__dirname);

let mainWindow;
let backendServer;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // Load the main page (HomePage)
  const menuFilePath = path.join(__dirname, "public", "menu.html");
  mainWindow.loadURL(`file://${menuFilePath}`);
  mainWindow.loadURL("http://localhost:3000/");
  // mainWindow.loadURL(path.join(__dirname, "homenew.html"));

  // Optional: Open the DevTools automatically (for development only)
  // mainWindow.webContents.openDevTools();
};

const createCustomerFormPopup = () => {
  const popupWindow = new BrowserWindow({
    width: 1300,
    height: 650,
    parent: mainWindow,
    modal: true,
    frame: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Customer Form",
  });

  // Load the Customer Form page
  popupWindow.loadURL("http://localhost:3000/customer-form");

  popupWindow.webContents.on("did-finish-load", () => {
    popupWindow.setTitle("Customer Form");
  });

  // Optional: Open the DevTools automatically (for development only)
  // popupWindow.webContents.openDevTools();
};

const createItemPopup = () => {
  const popupWindow = new BrowserWindow({
    width: 700,
    height: 573,
    parent: mainWindow,
    modal: true,
    frame: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Item",
  });

  // Load the Customer Form page
  popupWindow.loadURL("http://localhost:3000/create-item");

  popupWindow.webContents.on("did-finish-load", () => {
    popupWindow.setTitle("Item");
  });

  // Optional: Open the DevTools automatically (for development only)
  // popupWindow.webContents.openDevTools();
};

const cityPopup = () => {
  const popupWindow = new BrowserWindow({
    width: 700,
    height: 573,
    parent: mainWindow,
    modal: true,
    frame: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "AddCity",
  });

  // Load the Customer Form page
  popupWindow.loadURL("http://localhost:3000/master-city");

  popupWindow.webContents.on("did-finish-load", () => {
    popupWindow.setTitle("AddCity");
  });

  // Optional: Open the DevTools automatically (for development only)
  // popupWindow.webContents.openDevTools();
};

const createReportsAnalysisWindow = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 573,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Reports Analysis",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/reports-analysis");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Reports Analysis");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

// Handle opening the labreport.html file in a popup window
ipcMain.on("open-lab-report", (event) => {
  const labReportWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    title: "Report Print", // Initial title
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });

  // Correctly construct the path to the HTML file in the client/public directory
  const labReportPath = path.resolve(__dirname, "labreport.html");

  // Load the file
  labReportWindow
    .loadFile(labReportPath)
    .then(() => {
      // Set the title after the file has been loaded
      labReportWindow.setTitle("Report Print");
    })
    .catch((err) => console.log("Failed to load file:", err));
});

const updateReportsAnalysisWindow = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 573,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Single Report Update",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/update-analysis");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Single Report Update");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const ledgerentryPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 573,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Ledger Entry",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/ledger-entry");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Ledger Entry");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const ledgerreortPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 600,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Ledger Report",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/ledger-report");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Ledger Report");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const cashvoucherPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 600,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Cash Voucher",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/cash-voucher");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Cash Voucher");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const singlereportreprintPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 615,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Reprint",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/single-report-reprint");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Reprint");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const printmultireportPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 615,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Print Multi Report",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/print-multi-report");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Print Multi Report");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const recordreportPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 615,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Record Report",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/record-report");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Record Report");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const partydetailprintPopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 615,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Party Detail Print",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL("http://localhost:3000/party-detail-print");

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Party Detail Print");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const recordreportwihtoutsamplePopup = () => {
  const reportsAnalysisWindow = new BrowserWindow({
    width: 950,
    height: 615,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: "Record Report Without Sample",
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL(
    "http://localhost:3000/record-report-without-sample"
  );

  reportsAnalysisWindow.webContents.on("did-finish-load", () => {
    reportsAnalysisWindow.setTitle("Record Report Without Sample");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

function startbackend() {
  backendServer = spawn("nodemon", ["index.js"], {
    cwd: path.join(__dirname, "../../server"),
    stdio: "inherit", // To display the server logs in the Electron console
  });

  backendServer.on("close", (code) => {
    console.log(`Backend process exited with code ${code}`);
  });

  backendServer.on("error", (err) => {
    console.error("Failed to start server:", err);
  });
}
function stopbackend() {
  backendServer.kill();
  if (backendServer) {
    console.log("Backend server stopped.");
  } else {
    console.log("No backend server is running.");
  }
}

app.whenReady().then(() => {
  createWindow();
  // startbackend();
  // Register a shortcut to toggle DevTools
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.webContents.toggleDevTools();
    }
  });

  // Create the application menu
  const menuTemplate = [
    {
      label: "Account",
      submenu: [
        {
          label: "Company Profile",
          click: () => {},
        },
        {
          label: "User Profile",
          click: () => {
            /* Handle User Profile */
          },
        },
      ],
    },
    {
      label: "Master",
      submenu: [
        {
          label: "Item",
          click: () => {
            createItemPopup();
          },
        },
        {
          label: "Customer",
          click: () => {
            createCustomerFormPopup();
          },
        },
        {
          label: "Session",
          click: () => {
            /* Handle Session */
          },
        },
        {
          label: "City",
          click: () => {
            cityPopup();
          },
        },
      ],
    },
    {
      label: "Report Analysis",
      submenu: [
        {
          label: "Generate Report",
          click: () => {
            createReportsAnalysisWindow();
          },
        },
        {
          label: "Update Report",
          click: () => {
            updateReportsAnalysisWindow();
          },
        },
      ],
    },
    {
      label: "Ledger",
      submenu: [
        {
          label: "Entry",
          click: () => {
            ledgerentryPopup();
          },
        },
        {
          label: "Report",
          click: () => {
            ledgerreortPopup();
          },
        },
        {
          label: "Cash Voucher",
          click: () => {
            cashvoucherPopup();
          },
        },
      ],
    },
    {
      label: "Reports",
      submenu: [
        {
          label: "Reprint Single Report",
          click: () => {
            singlereportreprintPopup();
          },
        },
        {
          label: "Print Multiple Report",
          click: () => {
            printmultireportPopup();
          },
        },
        {
          label: "Record Report",
          click: () => {
            recordreportPopup();
          },
        },
        {
          label: "Party Detail Print",
          click: () => {
            partydetailprintPopup();
          },
        },
        {
          label: "Record Report Without Sample",
          click: () => {
            recordreportwihtoutsamplePopup();
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    // stopbackend(); // Stop the backend server when the application quits
  }
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
