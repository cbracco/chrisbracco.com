// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const config = require('../../config').styles
const handleErrors = require('../../utilities/handle-errors')
const mqpacker = require('css-mqpacker')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const postcssImport = require('postcss-import')
const postcssCssnext = require('postcss-cssnext')
const postcssRemoveRoot = require('postcss-remove-root')
const postcssUrl = require('postcss-url')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')

// Task
function styles () {
  browserSync.notify('Rebuilding Styles&hellip;')

  var process = [
    postcssImport,
    postcssUrl,
    postcssCssnext(config.processors.cssnext),
    mqpacker(config.processors.mqpacker),
    postcssRemoveRoot
  ]

  return src(config.src)
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
    .pipe(dest(config.dest))
    .pipe(browserSync.stream())
}

module.exports = styles
