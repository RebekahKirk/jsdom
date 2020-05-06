//create a barivable called image 
const image = document.getElementById("image");
const input  =document.getElementById("input");
const button = document.getElementById("submit");

// main code, change the image 

button.addEventListener("click", () =>{
    image.src = input.value;
});