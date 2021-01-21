exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://crossbrowsertesting.github.io/todo-app.html',
      browser: 'Safari',
      host: 'hub.crossbrowsertesting.com',
      port: 80,
      user: 'YOUR_USERNAME',
      key: 'YOUR_AUTHKEY',
      desiredCapabilities:{
        name: "Codeceptjs Test",
        'browserName': 'Safari',
        'deviceName': 'iPhone 11 Pro',
        'platformVersion': '13.2',
        'platformName': 'iOS',
        'deviceOrientation': 'portrait',
        record_video: true
      }

    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}
