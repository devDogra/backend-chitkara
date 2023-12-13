const mongoose = require('mongoose'); 

const NoteSchema = mongoose.Schema({
    content: {
        type: String, 
        minLength: 4,
        required: true,
    }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note; 
