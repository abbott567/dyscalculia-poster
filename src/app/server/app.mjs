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
  const template = path.resolve('src/app/views/index.html')
  res.sendFile(template)
})

// Export app
export default app
