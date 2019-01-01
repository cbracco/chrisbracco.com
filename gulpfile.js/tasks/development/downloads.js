// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const config = require('../../config').downloads
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function downloads () {
  browserSync.notify('Rebuilding Downloads&hellip;')

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(dest(config.dest))
}

module.exports = downloads
