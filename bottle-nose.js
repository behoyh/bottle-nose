var express = require('express'),
    app = express(),
    ffmpeg = require('fluent-ffmpeg');


module.exports = {
    stream: function stream(req, res) {
        res.contentType('flv');
        var pathToMovie = '/public/' + req.params.filename;
        var proc = ffmpeg(pathToMovie)
            .preset('flashvideo')
            .on('end', function () {
                console.log('file has been converted succesfully');
            })
            .on('error', function (err) {
                console.log('an error happened: ' + err.message);
                res.send(err.message);
            })
            .pipe(res, { end: true });
    }
}