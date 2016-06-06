// Define Dependencies
var atImport = require('postcss-import')
var browserSync = require('browser-sync')
var cssnext = require('postcss-cssnext')
var config = require('../../config').styles
var gulp = require('gulp')
var handleErrors = require('../../utilities/handleErrors')
var mqpacker = require('css-mqpacker')
var plumber = require('gulp-plumber')
var postcss = require('gulp-postcss')
var removeRoot = require('postcss-remove-root')
var size = require('gulp-size')
var sourcemaps = require('gulp-sourcemaps')
var url = require('postcss-url')

// Styles (gulp styles)
gulp.task('styles', function () {
  browserSync.notify('Rebuilding Styles&hellip;')

  var process = [
    atImport,
    url,
    cssnext(config.processors.cssnext),
    mqpacker(config.processors.mqpacker),
    removeRoot
  ]

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourcemaps.init())
    .pipe(postcss(process))
    .pipe(size({
      title: 'Total CSS (unminified): ',
      showFiles: true,
      pretty: true
    }))
    .pipe(size({
      title: 'Total CSS (unminified & gzipped): ',
      showFiles: true,
      pretty: true,
      gzip: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
