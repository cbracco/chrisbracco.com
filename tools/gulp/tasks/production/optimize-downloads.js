// Define Dependencies
var config = require('../../config').optimize.downlaods
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Optimize downlaods (gulp optimize:downlaods)
gulp.task('optimize:downlaods', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
