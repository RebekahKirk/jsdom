//variables
const input = document.getElementById('input');
const button = document.getElementById('submit');
let list = document.getElementsByTagName("ul")[0];
const showhide = document.getElementById("showhide-btn");

//create a list item when the person presses the submit button adding it to the
button.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
})
showhide.addEventListener("click", () => {
    //let list=document.getElementsByTagName("ul")[0]; 
    if (list.style.display == "none") {
        list.style.display = "block";
        showhide.textContent= "hide";
    } else {
        list.style.display = "none";
        showhide.textContent = "show";
    }
})