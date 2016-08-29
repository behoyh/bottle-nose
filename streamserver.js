var path = require('path'),
    express = require('express'),
    app = express(),
    bottleNose = require('./bottle-nose');

    app.get('/api/stream/:filename', function (req, res) {
        bottleNose.stream(req, res);
    });

    app.listen(4000);