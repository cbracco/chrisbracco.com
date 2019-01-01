// Define Dependencies
const { src } = require('gulp')
const ghPages = require('gulp-gh-pages')
const config = require('../../config').ghPages

// Deploy gh-pages (gulp deploy:gh-pages)
function deployGhPages () {
  return src(config.src)
    .pipe(ghPages(config.options))
}

module.exports = deployGhPages
