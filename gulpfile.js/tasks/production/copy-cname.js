// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../../config').copy.cname
const handleErrors = require('../../utilities/handle-errors')
const plumber = require('gulp-plumber')

// Copy CNAME file (gulp copy:cname)
function copyCname () {
  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(dest(config.dest))
}

module.exports = copyCname
