const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation-mobile',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      host: '127.0.0.1',
      port: 4723,
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        appPackge: process.env.PACKAGE,
        appActivity: process.env.ACTIVITY,
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_pages.js",
    home_page: './pages/home_page.js'
  },
  bootstrap: null,
  mocha: {},

}