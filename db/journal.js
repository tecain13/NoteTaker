const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Journal {
    constructor() {
        this.lastid = 0;
    }
    getNotes() {
        return readFileAsync("db/db.json", "utf8").then(notes => {
            let allnotes;
            try {
                allnotes = [].concat(JSON.parse(notes));
            } catch (err) {
                allnotes = [];
            }
            return allnotes;
        })
    }

    addNote(note) {
        const { title, text } = note;
        const newNote = { title, text, id: ++this.lastid }
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(changednotes => writeFileAsync("db/db.json", JSON.stringify(changednotes)))
            .then(() => newNote);
    }

    deleteNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(filterednotes => writeFileAsync("db/db.json", JSON.stringify(filterednotes)))
    }

};

module.exports = new Journal();
