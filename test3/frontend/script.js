const ul = document.querySelector("ul");
const getAllBtn = document.querySelector("#get-all-notes"); 
const addBtn = document.querySelector("#search");


const url = 'http://localhost:3000/notes';


function display(notes) {
    ul.innerHTML = '';
    for (let note of notes) {
        const li = document.createElement("li");
        li.innerText = note.content;
        ul.append(li);
    }
}

getAllBtn.addEventListener("click", async (event) => {
    const response = await axios.get(url);
    const notes = response.data;
    display(notes);
})

addBtn.addEventListener("click", async (event) => {
    const newNote = {
        content: document.querySelector("input").value,
    }

    try {
        const response = await axios.post(url, newNote)
        const data = response.data; 
    } catch(error) {
        
    }

    if (response.status == 201) {
        const response = await axios.get(url);
        const notes = response.data;
        display(notes);
    } else {
        alert(data.message + "REASON: " + data.reason);
    }
})