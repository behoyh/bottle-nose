var path = require('path'),
    express = require('express'),
    app = express(),
    ffmpeg = require('fluent-ffmpeg'),
    fs = require('fs')
    encoder = require('./encoder');


module.exports = {
    streamFlash: function (req, res) {
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
    streamDash: function (req, res) {
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
                    'Transfer-Encoding': 'chunked',
                    "Content-Range": "bytes " + start + "-" + end + "/" + total,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": encoder.encode(req.params.filename)
                });
                var stream = fs.createReadStream(movie, { start: start, end: end, autoClose: true })
                    .on('end', function () {
                        console.log('Stream Done');
                    })
                    .on("error", function (err) {
                        res.end(err);
                    })
                    .pipe(res, { end: true });
            });
    },
    streamHls: function (req, res) {
        var proc = ffmpeg('./public/' + req.params.filename)
            .videoBitrate(1024)
            .videoCodec('libx264')
            .audioBitrate('256k')
            .audioCodec('libfaac')
            .audioChannels(2)
            .addOption('-hls_time', 10)
            .addOption('-hls_list_size', 0)
            .on('end', function () {
                console.log('file has been converted succesfully');
            })
            .on('error', function (err) {
                console.log('an error happened: ' + err.message);
            })
            .pipe(res, { end: true });
    },
    liveStream: function (req, res, options) {

    }
}