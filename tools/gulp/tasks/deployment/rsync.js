// Define Dependencies
var gulp = require('gulp')
var rsync = require('gulp-rsync')
var config = require('../../config').rsync

// Deploy Rsync (gulp deploy:rsync)
gulp.task('deploy:rsync', function () {
  return gulp.src(config.src)
    .pipe(rsync(config.options))
})
