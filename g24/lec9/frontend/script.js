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