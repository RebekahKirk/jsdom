// set variables
const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

//main code
// submit.addEventListener("click", () =>{
//     placeholder.style.color = "goldenrod";
//     placeholder.textContent = input.value;
// })

//updates the title and the list with what is submitted in the box
submit.addEventListener("click", () =>{
    placeholder.style.color="goldenrod";
    placeholder.textContent=`<li>${input.value}</li>`;
    list.innerHTML = `<li>${input.value}</li>`;
})