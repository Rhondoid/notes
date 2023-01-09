const fs = require('fs');
const util = require('util');
const uuid = require('uuid').v4;

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);


// Promise version of fs.writeFile
const writeFromFile = util.promisify(fs.writeFile);
class Store{
    read(){
        return readFromFile('db/db.json', 'utf8');
    }
    write(note){
        return writeFromFile('db/db.json', JSON.stringify(note));
    }
    
    getNotes(){
        return this.read().then((notes) => {
            let readNotes;

            try{
                readNotes = [].concat(JSON.parse(notes));
            }catch(err){
                readNotes = []
        }

        return readNotes;})}
//add note, remove note. when testing add new note, use throw new error
    addNote(note) {
        const {title, text} = note;
        if (!title || !text) {
            throw new Error("add title and text")
        }
        const newNote = {title, text, id: uuid()}

        return this.getNotes().then((notes) => [...notes, newNote])
        .then((notesupdated)=>this.write(notesupdated))
        .then(() => newNote)
    }
    removeNote(id){
        return this.getNotes().then((notes) => notes.filter((note) => note.id !== id))
        .then((noteRemoved) => this.write(noteRemoved))
    }
}

module.exports = new Store()