//create a variable
const image = document.getElementById("cat");
const button = document.getElementById("submit");

// main code
//when the hide button is clicked hide the image and change the button text to show & vice versa
button.addEventListener("click", () => {
    if (image.style.display == "none") {
        image.style.display = "block";
        button.textContent= "hide";
    } else {
        image.style.display = "none";
        button.textContent = "show";
    }
})
