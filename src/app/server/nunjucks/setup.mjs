import nunjucks from 'nunjucks'
import path from 'path'

// Setup paths
const paths = [path.resolve('src', 'app', 'views')]

function setup (app) {
  // Set view engine
  app.set('view engine', 'njk')

  // Setup Nunjucks env
  nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: process.env.NODE_ENV === 'dev',
    watch: true,
    lstripBlocks: true,
    trimBlocks: true
  })

  return app
}

function render (content) {
  nunjucks.configure(paths, {
    autoescape: true,
    watch: true,
    lstripBlocks: true,
    trimBlocks: true
  })
  return nunjucks.renderString(content)
}

export default { setup, render }
