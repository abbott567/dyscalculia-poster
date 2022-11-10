import colours from 'colors'
import browserSync from 'browser-sync'

function alertReload () {
  console.log(colours.green('Browser Sync proxy re-loaded on http://localhost:3000'))
}

function runBrowserSync () {
  const bs = browserSync.create()
  bs.watch('src/app/views/**/*.njk').on('change', () => {
    bs.reload()
    alertReload()
  })
  bs.watch('dist/**/*.html').on('change', () => {
    bs.reload()
    alertReload()
  })
  bs.init({
    ui: false,
    port: 3000,
    proxy: 'localhost:3001',
    ghostMode: false,
    open: false,
    notify: false,
    logLevel: 'error'
  })
  bs.emitter.on('init', function () {
    console.log(colours.green('Browser Sync proxy started on http://localhost:3000'))
  })
  bs.emitter.on('reload', function () {
  })
}

export default runBrowserSync
