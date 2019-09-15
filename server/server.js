const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const multer  = require('multer')
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const live_streaming_server = exec('node gpac-dash.js -cors');

live_streaming_server.on('exit', function (code, signal) {
  console.error('Streaming server exited with ' + `${code} and signal ${signal}`);
});

app.use(express.static(path.join(__dirname, 'public')))

// this is cors this allows my angular app to call this node backend even though they are both on local host 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

var storage = multer.diskStorage(
  {
      destination: './uploads/',
      filename: function ( req, file, cb ) {
          //req.body is empty... here is where req.body.new_file_name doesn't exists
          cb( null, file.originalname );
      }
  });

 var upload = multer( { storage: storage } );


app.get('/video/:filename', function(req, res) {
  const path = 'uploads/' + req.params.filename
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

app.get('/videos', function(req, res) {
  const path = './uploads/'

  fs.readdir(path, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    res.send(files);
})
})

app.put('/video', upload.single('upl'), (req, res, next) => {
    res.end('{"resp":"Your file Uploaded"}'); 
    console.log('Video Uploaded'); 
})

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})