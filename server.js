// GET / notes should return the notes.html file. GET * should return the index.html file

const express = require("express");
const path = require("path");
const notesData = require("./db/db.json");
const routes = require ("./routes")
const PORT = 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes)

app.get("/api/notes.html", (req, res) => res.json(notesData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
