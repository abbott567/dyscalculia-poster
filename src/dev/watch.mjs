import colours from 'colors'
import watch from 'node-watch'
import buildSass from '../build/sass.mjs'
import buildHTML from '../build/html.mjs'
import buildZip from '../build/zip.mjs'

function watchSass () {
  console.log(colours.yellow('Watching src/app/sass for changes'))
  watch('src/app/sass', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    buildSass()
  })
}

function watchHTML () {
  console.log(colours.yellow('Watching src/app/views for changes'))
  watch('src/app/views', { recursive: true }, (evt, name) => {
    console.log(colours.yellow(`${name} changed.`))
    buildHTML()
    buildZip()
  })
}

function watchAll () {
  watchSass()
  watchHTML()
}

export default watchAll
