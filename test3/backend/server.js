const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/Note.js');
const cors = require('cors'); 
const app = express();

app.use(cors());


app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
})



app.post('/notes', async (req, res) => {
    const data = req.body;
    const note = new Note(data);

    try {
        await note.save();
        res.status(201).send({
            message: "Note created",
            note,
        });
    } catch(err) {
        res.status(400).send({
            message: "Could not create note",
            reason: err.message,
        });
    }
})



app.listen(3000, () => console.log("http://localhost:3000"));
