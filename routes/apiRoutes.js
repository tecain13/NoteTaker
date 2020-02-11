var journal = require("../db/journal.js");
const router = require("express").Router();


router.get("/notes", function (req, res) {
    journal.getNotes()
        .then(notes => res.json(notes))
        .catch(error => res.status(500).json(error))
});

router.post("/notes", function (req, res) {
    journal.addNote(req.body)
        .then((note) => res.json(note))
        .catch(error => res.status(500).json(error))
});

router.delete("/notes/:id", function (req, res) {
    journal.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(error => res.status(500).json(error))
});


module.exports = router