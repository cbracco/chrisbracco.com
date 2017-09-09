// Define Dependencies
var gulp = require('gulp')
var ghPages = require('gulp-gh-pages')
var config = require('../../config').ghPages

// Deploy gh-pages (gulp deploy:gh-pages)
gulp.task('deploy:gh-pages', function () {
  return gulp.src(config.src)
    .pipe(ghPages(config.options))
});
