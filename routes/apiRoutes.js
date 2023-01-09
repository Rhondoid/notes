const router = require("express").Router();
const store = require("../db/store");

//Routing. Get/notes should read the 'db.json' file and return all saved notes as JSON
// localhost:3000/api/notes = endpoint
router
  .get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
      return res.json(notes);
  }).catch((err) => res.status(500).json(err));
});
router
  .post("/notes", (req, res) => {
    store.addNote(req.body).then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
  })
  

router
  .delete("/notes/id", (req, res) => {
    store.removeNote(req.params.id).then(() => res.json({ok: true}))
    .catch((err) => res.status(500).json(err));
  })
  


module.exports = router;
