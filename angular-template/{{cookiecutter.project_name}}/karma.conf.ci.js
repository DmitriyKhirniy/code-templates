// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const timeout = 10 * 60 * 1000; // 10 minutes

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--no-sandbox'
        ]
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    codeCoverage: false,
    client:{
      clearContext: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    processKillTimeout: timeout,
    browserDisconnectTimeout: timeout,
    captureTimeout: timeout
  });
};
