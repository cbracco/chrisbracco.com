// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../../config').downloads
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Fonts (gulp downloads)
gulp.task('downloads', function () {
  browserSync.notify('Rebuilding Downloads&hellip;')

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
