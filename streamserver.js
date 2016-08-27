var path = require('path'),
    express = require('express'),
    app = express(),
    encoder = require('./encoder');

    app.get('/api/stream', function (req, res) {
        encoder.stream(req, res);
    });

app.listen(4000);