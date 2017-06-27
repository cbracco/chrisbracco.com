// Define Dependencies
var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')
var config = require('../../config').ghPages

// Deploy Rsync (gulp deploy:ghPages)
gulp.task('deploy:ghPages', function () {
  return gulp.src(config.src)
    .pipe(ghPages())
})
