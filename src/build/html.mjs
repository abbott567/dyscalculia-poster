
import colours from 'colors'
import fs from 'fs-jetpack'
import { minify } from 'html-minifier'
import nunjucks from '../app/server/nunjucks/setup.mjs'

function buildHTML () {
  const template = fs.read('src/app/views/index.njk')
  const htmlRaw = nunjucks.render(template)
  const html = minify(htmlRaw, {
    removeComments: true,
    removeCommentsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyCSS: true
  })
  fs.write('dist/index.html', html)
  console.log(colours.cyan('HTML minified'))
}

export default buildHTML
