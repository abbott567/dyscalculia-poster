import buildSass from '../build/sass.mjs'
import buildHTML from '../build/html.mjs'
import watch from '../dev/watch.mjs'
import browserSync from '../dev/browser-sync.mjs'
import nodemon from '../dev/nodemon.mjs'

function runDev () {
  buildSass()
  buildHTML()
  watch()
  browserSync()
  nodemon()
}

runDev()
