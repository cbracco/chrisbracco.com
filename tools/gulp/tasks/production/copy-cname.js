// Define Dependencies
var config = require('../../config').copy.cname
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Copy CNAME file (gulp copy:cname)
gulp.task('copy:cname', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
