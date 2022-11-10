import buildSass from './sass.mjs'
import buildHTML from './html.mjs'

function runBuild () {
  buildSass()
  buildHTML()
}

export default runBuild()
