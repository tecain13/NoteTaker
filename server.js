const http = require("http");
const express = require("express");
const util = require("util");
const path = require("path");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extend: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);




app.listen(PORT, function () {
    console.log("I'm listening on PORT" + PORT);
})