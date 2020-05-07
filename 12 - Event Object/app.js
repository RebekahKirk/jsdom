const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})

/*New code below*/

document.addEventListener("click", (event) =>
{
    console.log(event);
    console.log(event.target);
})

//changes list items to uppercase when hovered over and back to lowercase when not however this looses the list when you hover over the bullet points.
list.addEventListener("mouseover", (event) =>{
    event.target.textContent = event.target.textContent.toUpperCase();})
list.addEventListener("mouseout", (event) =>{
    event.target.textContent = event.target.textContent.toLowerCase();})

//the below code fixes the formating issue because it looks at the lI rather than the whole UL
list.addEventListener("mouseover", (event)=>{
    if (event.target.tagName == "LI"){
        event.target.textContent = event.target.textContent.toUpperCase();}
})
list.addEventListener("mouseout", (event)=>{
    if (event.target.tagName == "LI"){
        event.target.textContent = event.target.textContent.toLowerCase();}
})