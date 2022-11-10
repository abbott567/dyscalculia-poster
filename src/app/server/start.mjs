import colours from 'colors'
import http from 'http'
import app from './app.mjs'

function serverStart () {
  const server = http.createServer(app)
  server.listen(3001)
  console.log(colours.green(`Server started on http://localhost:${3001}`))
  return server
}

export default serverStart()
