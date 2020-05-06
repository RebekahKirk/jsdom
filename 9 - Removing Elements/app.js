const input = document.getElementById('input');
const button = document.getElementById('submit');
/*add new const below*/
const remove = document.getElementById('remove');

/*from previous ex*/
//add an item to the bottom of the list
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/
//remove the last item from the list when the button is clicked
remove.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(lastItem);
})