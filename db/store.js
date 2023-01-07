const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuid');

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
//add note, remove note
    addNote(note) {
        return this.write(note).then((newNote) =>{
            let newNote;

            try{
                newNote = [].concat(JSON.stringify(newNote));
            }catch(err){
                newNote = []
            }

            return newNote;
        })
    }
    removeNote(){
        return this.read().then((notes,'uuid') => {
            let removedNote;

            try{
                removedNote = [].concat(JSON.parse(notes));
            } catch(err){
                removedNote = [];
            }
        return removedNote
        })
    }
}

module.exports = {Store}