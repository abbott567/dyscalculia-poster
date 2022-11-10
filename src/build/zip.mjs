import colours from 'colors'
import fs from 'fs-jetpack'
import archiver from 'archiver'

function buildZip () {
  const build = new Promise((resolve, reject) => {
    // create a file to stream archive data to.
    const output = fs.createWriteStream('dist/dyscalculia-poster.zip')
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    })

    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function () {
      console.log(colours.cyan(`Zip compiled with a total of ${archive.pointer()} bytes.`))
      resolve()
    })

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
      throw err
    })

    // pipe archive data to the file
    archive.pipe(output)

    // append a file from stream
    archive.file('dist/dyscalculia-poster.html', { name: 'dyscalculia-poster.html' })

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize()
  })
  return build
}

export default buildZip
