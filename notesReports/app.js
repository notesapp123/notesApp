const express = require('express')
const app = express();
const port  = process.env.PORT || 3001;
const notesData = require('./notes.json');
const notes = notesData.notes;

app.get("/", (req,res) => {
    const index = req.query.index || 0;
    //const randomNum = Math.floor(Math.random() * notes.length);
    //res.json({note:notes[randomNum]});
    if(!(index < notes.length ))
        return res.json({error:`index ${index} is more the array length ${notes.length}`});
    res.json({note:notes[index]});
});

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
}); 

