const input = document.querySelector("input"); 
const ul = document.querySelector("ul"); 
const addBtn = document.querySelector("#add-btn"); 
const getBtn = document.querySelector("#get-btn"); 

const url = "http://localhost:3000/notes"

addBtn.addEventListener("click", async () => {
    const content = input.value; 
    const newNote = {
        content
    }
    try {
        await axios.post(url, newNote)
        alert("Note created"); 
    } catch(err) {
        alert("Couldn't create note"); 
    }
})