var path = require('path'),
    express = require('express'),
    app = express(),
    ffmpeg = require('fluent-ffmpeg'),
    fs = require('fs')
    encoder = require('./encoder');


module.exports = {
    streamFlash: function (req, res, options) {
        res.contentType('flv');
        var pathToMovie = './public/' + req.params.filename;
        var proc = ffmpeg(pathToMovie)
            .preset('flashvideo')
            .on('end', function () {
                console.log('Stream Done');
            })
            .on('error', function (err) {
                console.log('an error happened: ' + err.message);
                res.send(err.message);
            })
            .pipe(res, { end: true });
    },
    streamDash: function (req, res, options) {
        var movie = path.resolve('./public/' + req.params.filename);
            fs.stat(movie, function (err, stats) {
                if (err) {
                    if (err.code === 'ENOENT') {
                        return res.sendStatus(404);
                    }
                    res.end(err);
                }
                var range = req.headers.range;
                if (!range) {
                    return res.sendStatus(416);
                }
                var positions = range.replace(/bytes=/, "").split("-");
                var start = parseInt(positions[0], 10);
                var total = stats.size;
                var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
                var chunksize = (end - start) + 1;

                res.writeHead(206, {
                    "Content-Range": "bytes " + start + "-" + end + "/" + total,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": encoder.encode(req.params.filename)
                });

                var stream = fs.createReadStream(movie, { start: start, end: end, autoClose: true })
                    .on('end', function () {
                        console.log('Stream Done');
                    })
                    .on("open", function () {
                        stream.pipe(res, { end: true });
                    }).on("error", function (err) {
                        res.end(err);
                    });
            });
    },
    streamHls: function (req, res, options) {

    }
}
