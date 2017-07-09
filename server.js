/*global require, process, console*/
/*jshint esversion: 6*/
var express = require('express'),
    app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on 3000");
});