const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => {
    const validChannels = [
      "open-lab-report",
      "open-Party-report",
      "open-MultiReport-report",
    ];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  // New method to receive data
  on: (channel, callback) => {
    const validChannels = [
      "render-lab-report",
      "render-Party-report",
      "render-MultiReport-report",
    ];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, data) => callback(event, data));
    }
  },
});