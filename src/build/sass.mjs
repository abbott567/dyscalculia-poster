import colours from 'colors'
import sass from 'sass'
import fs from 'fs-jetpack'

function buildSass () {
  const result = sass.compile('src/app/sass/app.scss')
  const css = result.css
  fs.write('src/app/views/style.css', css)
  console.log(colours.cyan('Sass compiled'))
}

export default buildSass
