const mongoose = require('mongoose'); 


const NoteSchema = mongoose.Schema({
    content: {
        type: String,
        required: true, 
        minLength: 6,
    },
})


const Note = mongoose.model("Note", NoteSchema);


module.exports = Note; 