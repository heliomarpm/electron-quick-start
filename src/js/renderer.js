/**
  * This file is loaded via the <script> tag in the index.html file and will
  * be executed in the renderer process for that window. Node.js APIs are
  * available in this process because `nodeIntegration` is turned off and
  * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
  * to expose Node.js functionality from the main process.
  */

let $ = document.querySelector.bind(document);
$("#r-node-version").innerText = versions.node;
$("#r-chrome-version").innerText = versions.chrome;
$("#r-electron-version").innerText = versions.electron;