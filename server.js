const express = require("express");
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute)


app.listen(PORT, function () {
    console.log("I'm listening on PORT" + PORT);
})