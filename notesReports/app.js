const express = require('express')
const app = express();
const port  = process.env.PORT || 3001;
const notesData = require('./notes.json');
const notes = notesData.notes;

app.get("/", (req,res) => {
    const randomNum = Math.floor(Math.random() * notes.length);
    res.json({note:notes[randomNum]});
});

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
}); 

