const express = require('express'); 
const mongoose = require('mongoose'); 
const Note = require('./models/Note.js'); 
const cors = require('cors'); 

mongoose.connect("mongodb://127.0.0.1:27017/NotesG18")

const app = express(); 

app.use(cors());

app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await Note.find()
    res.send(notes);
})
app.post('/notes', async (req, res) => {
    const content = req.body.content; 
    const newNote = new Note({
        content,
    });

    try {
        await newNote.save();
        res.send("Note created"); 
    } catch(err) {
        res.status(400).send("Could not create note"); 
    }
})




app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})