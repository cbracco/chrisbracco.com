// Define Dependencies
const config = require('../../config').ghPages
const ghPages = require('gh-pages')
const path = require('path')

// Task
function deployGhPages (done) {
  ghPages.publish(
    path.join(process.cwd(), config.dir),
    config.options,
    done
  )
}

module.exports = deployGhPages
