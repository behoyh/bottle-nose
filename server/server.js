const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(express.static(path.join(__dirname, 'public')))

app.get('/video/:filename', function(req, res) {
  const path = 'assets/' + req.params.filename
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})

app.put('/video', upload.single('video'), function (req, res, next) {

})

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})