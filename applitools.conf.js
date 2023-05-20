module.exports = {
  testConcurrency: 5,
  batchName: "Cypress Vetlog",
  browser: [
    { width: 1280, height: 1024, name: "chrome" },
    { width: 1600, height: 1200, name: "firefox" },
    { width: 1280, height: 1024, name: "edge" },
    { width: 1024, height: 768, name: "safari" },
    { deviceName: "Pixel 5", screenOrientation: "portrait" },
    { deviceName: "iPhone 11", screenOrientation: "portrait" },
  ],
}
