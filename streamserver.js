var path = require('path'),
    express = require('express'),
    app = express(),
    bottleNose = require('./bottle-nose');

    app.get('/api/stream/:filename', function (req, res) {
        bottleNose.streamDash(req, res);
    });

    app.listen(4000);