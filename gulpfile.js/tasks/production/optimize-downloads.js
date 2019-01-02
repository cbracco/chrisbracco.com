// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').optimize.downloads
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Task
function optimizeDownloads () {
  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(dest(config.dest))
}

module.exports = optimizeDownloads
