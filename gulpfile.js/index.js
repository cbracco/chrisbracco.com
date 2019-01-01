// Define Dependencies
const { series } = require('gulp')
const buildDevelopment = require('./tasks/development/build')
const serveDevelopment = require('./tasks/development/serve')
const buildProduction = require('./tasks/production/build')
const serveProduction = require('./tasks/production/serve')
const deployGhPages = require('./tasks/deploy/gh-pages')

// Tasks
const development = series(
  buildDevelopment,
  serveDevelopment
)

const production = series(
  buildProduction,
  serveProduction
)

const deploy = series(
  buildProduction,
  deployGhPages
)

exports.build = buildDevelopment
exports.buildProduction = buildProduction
exports.development = development
exports.production = production
exports.deploy = deploy

exports.default = development
