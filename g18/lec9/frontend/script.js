const ul = document.querySelector("ul"); 
const input = document.querySelector("input"); 
const addBtn = document.querySelector("#add-btn"); 
const getBtn = document.querySelector("#get-btn"); 

const url = 'http://localhost:3000/notes'

addBtn.onclick = async () => {
    const content = input.value; 
    const newNote = {
        content
    }
    try {
        await axios.post(url, newNote);
        alert("Note created successfully"); 
    } catch(err) {
        alert("Couldn't create note"); 
    }

}

getBtn.onclick = async () => {
    // Fetch Notes
    const response = await axios.get(url);
    const notes = response.data

    // Display Notes
    for (let note of notes) {
        const noteHTML = `
            <li id=${note._id}>
                <p>${note.content}</p>
                <button class="del">Delete</button>
            </li>
        `
        ul.innerHTML += noteHTML; 
    }
}