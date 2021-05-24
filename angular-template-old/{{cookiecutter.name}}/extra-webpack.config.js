const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  // angularWebpackConfig.output.jsonpFunction = 'starter';
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}
