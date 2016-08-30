var path = require('path'),
    express = require('express'),
    app = express(),
    bottleNose = require('./bottle-nose');

//Example VOD playback
app.get('/api/stream/:filename', function (req, res) {
    bottleNose.streamDash(req, res);
});

//Example Live Stream Echo
app.post('api/stream/livestream', function (req, res) {
    req.on('data', function (chunk) {

        options = {
            format: "flv",
            chunk: true,
            data: chunk
        };

        bottleNose.liveStream(res, req, options);

    }).on('end', function () {
        console.log('Got chunk');
    });
});

app.listen(4000);