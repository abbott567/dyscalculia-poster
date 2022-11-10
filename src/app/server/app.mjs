import express from 'express'
import path from 'path'
import nunjucks from './nunjucks/setup.mjs'

// Create Express App
const app = express()

// Use Distribution folder as static
app.use(express.static('dist'))

// Setup Nunjucks
nunjucks.setup(app)

// Use router
app.get('/', (req, res) => {
  const template = path.resolve('dist/dyscalculia-poster.html')
  res.sendFile(template)
})

// Export app
export default app
