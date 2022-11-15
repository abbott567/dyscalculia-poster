import buildSass from './sass.mjs'
import buildHTML from './html.mjs'
import buildZip from './zip.mjs'

async function runBuild () {
  await buildSass()
  await buildHTML()
  await buildZip()
  process.exit()
}

export default runBuild()
