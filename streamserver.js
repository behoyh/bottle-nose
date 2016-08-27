var path = require('path'),
    express = require('express'),
    app = express(),
    routes = require('routes.js')(app),
    ffmpeg = require('fluent-ffmpeg');

module.exports = function (app) {
    app.get('/api/stream', function (req, res) {
        encoder.stream(req, res);
    });
};

app.listen(4000);