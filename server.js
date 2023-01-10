// GET / notes should return the notes.html file. GET * should return the index.html file

const express = require("express");
const apiRoutes = require ("./routes/apiRoutes")
const htmlRoutes = require ("./routes/htmlRoutes")
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

