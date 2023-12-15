const ul = document.querySelector("ul"); 
const input = document.querySelector("input"); 
const createBtn = document.querySelector("#create-btn"); 
const getBtn = document.querySelector("#get-btn"); 

const url = 'http://localhost:3000/notes';

createBtn.addEventListener("click", async (event) => {
    const content = input.value; 
    const note = {
        content,
    }

    try {
        const response = await axios.post(url, note)
        const msg = response.data; 
        alert(msg);
    } catch(err) {
       const msg = err.response.data; 
       alert(msg);
    }

})

getBtn.addEventListener("click", async (event) => {
    const response = await axios.get(url);
    const notes = response.data; 

    ul.replaceChildren();
    for (let note of notes) {
        const li = `
            <li id=${note._id}>
                <p>${note.content}</p>    
                <button class="del">Delete</button>
            </li>
        `
        ul.innerHTML = li; 
    }
    console.log(response); 
})


document.addEventListener("click", async e => {
    const clickedElement = e.target; 
    if (clickedElement.matches(".del")) {
        const btn = e.target; 
        const li = btn.parentElement; 
        const id = li.id; 

        await axios.delete(`http://localhost:3000/notes/${id}`)

    }
})