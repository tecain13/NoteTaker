var journalData = require("../db/journal.json");
var dbData = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/journal", function (req, res) {
        res.json(journalData)
    });

    app.get("/api/db", function (req, res) {
        res.json(dbData)
    });
}