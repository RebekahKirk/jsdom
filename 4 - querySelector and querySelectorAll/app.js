//Shows how many even numbers there are within the list

const listItems = document.querySelectorAll("li:nth-child(even)");

console.log(listItems);
console.log(listItems.length);

//use a for loop to change all of the even numbers within the list to lightgreen

for(let i=0; i<listItems.length; i++){
    listItems[i].style.color="lightgreen";
}