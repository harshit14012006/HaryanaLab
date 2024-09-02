const { app, Menu, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
require('electron-reload')(__dirname);

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 400,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // Load the main page (HomePage)
  const menuFilePath = path.join(__dirname, 'public', 'menu.html');
  mainWindow.loadURL(`file://${menuFilePath}`);
  mainWindow.loadURL('http://localhost:3000/');

  // Optional: Open the DevTools automatically (for development only)
  // mainWindow.webContents.openDevTools();
};



const createCustomerFormPopup = () => {
  const popupWindow = new BrowserWindow({
    width: 700,
    height: 400,
    parent: mainWindow,
    modal: true,
    frame: true, 
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    title: 'Customer Form', 
  });

  // Load the Customer Form page
  popupWindow.loadURL('http://localhost:3000/customer-form');

  popupWindow.webContents.on('did-finish-load', () => {
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
    title: 'Item', 
  });

  // Load the Customer Form page
  popupWindow.loadURL('http://localhost:3000/create-item');

  popupWindow.webContents.on('did-finish-load', () => {
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
    title: 'City', 
  });

  // Load the Customer Form page
  popupWindow.loadURL('http://localhost:3000/master-city');

  popupWindow.webContents.on('did-finish-load', () => {
    popupWindow.setTitle("City");
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
    title: 'Reports Analysis',
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL('http://localhost:3000/reports-analysis');

  reportsAnalysisWindow.webContents.on('did-finish-load', () => {
    reportsAnalysisWindow.setTitle("Reports Analysis");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

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
    title: 'Update Analysis',
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL('http://localhost:3000/update-analysis');

  reportsAnalysisWindow.webContents.on('did-finish-load', () => {
    reportsAnalysisWindow.setTitle("Update Analysis");
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
    title: 'Ledger Entry',
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL('http://localhost:3000/ledger-entry');

  reportsAnalysisWindow.webContents.on('did-finish-load', () => {
    reportsAnalysisWindow.setTitle("Ledger Entry");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

const partyprintPopup = () => {
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
    title: 'Party Detail Print',
  });

  // Load the Reports Analysis page
  reportsAnalysisWindow.loadURL('http://localhost:3000/party-detail-print');

  reportsAnalysisWindow.webContents.on('did-finish-load', () => {
    reportsAnalysisWindow.setTitle("Party Detail Print");
  });

  // Optional: Open the DevTools automatically (for development only)
  // reportsAnalysisWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  // Register a shortcut to toggle DevTools
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.webContents.toggleDevTools();
    }
  });

  // Create the application menu
  const menuTemplate = [
    {
      label: 'Account',
      submenu: [
        {
          label: 'Company Profile',
          click: () => {
            
          },
        },
        { label: 'User Profile', click: () => { /* Handle User Profile */ } },
      ],
    },
    {
      label: 'Master',
      submenu: [
        { label: 'Item', click: () => { createItemPopup() } },
        { label: 'Customer', click: () => { createCustomerFormPopup() } },
        { label: 'Session', click: () => { /* Handle Session */ } },
        { label: 'City', click: () => { cityPopup() } }
      ],
    },
    {
      label: 'Report Analysis',
      submenu: [
        {
          label: 'Generate Report',
          click: () => {
            createReportsAnalysisWindow();
          },
        },
        { label: 'Update Report', click: () => { updateReportsAnalysisWindow() } },
      ],
    },
    {
      label: 'Ledger',
      submenu: [
        { label: 'View Ledger', click: () => { ledgerentryPopup() } },
        { label: 'Update Ledger', click: () => { /* Handle ledger update */ } },
      ],
    },
    {
      label: 'Reports',
      submenu: [
        { label: 'Reprint Single Report', click: () => {  } },
        { label: 'Print Multiple Report', click: () => {  } },
        { label: 'Record Report', click: () => {  } },
        { label: 'Party Detail Print', click: () => { partyprintPopup() } },
        { label: 'Record Report Without Sample', click: () => {  } },
      ],
    },
  ];
  
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
