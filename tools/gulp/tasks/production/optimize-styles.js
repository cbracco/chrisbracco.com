// Define Dependencies
var config = require('../../config').optimize.styles
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var cssnano = require('cssnano')
var plumber = require('gulp-plumber')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')
var size = require('gulp-size')

// Optimize Styles (gulp optimize:styles)
gulp.task('optimize:styles', function () {
  var minify = [cssnano]

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(postcss(minify))
    .pipe(rename(config.processors.rename))
    .pipe(size({
      title: 'Total CSS (minified): ',
      showFiles: true,
      pretty: true
    }))
    .pipe(size({
      title: 'Total CSS (minified & gzipped): ',
      showFiles: true,
      pretty: true,
      gzip: true
    }))
    .pipe(gulp.dest(config.dest))
})
