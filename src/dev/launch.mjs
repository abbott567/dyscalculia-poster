import buildSass from '../build/sass.mjs'
import buildHTML from '../build/html.mjs'
import watch from '../dev/watch.mjs'
import browserSync from '../dev/browser-sync.mjs'
import nodemon from '../dev/nodemon.mjs'
import buildZip from '../build/zip.mjs'

function runDev () {
  buildZip()
  buildSass()
  buildHTML()
  watch()
  browserSync()
  nodemon()
}

runDev()
