//variable

const list = document.getElementsByTagName("li");

const notOrange = document.getElementsByClassName("not-orange");

// main code

console.log(list);
console.log(list.length)

// changes each list item to orange one by one
for (let i = 0; i < list.length; i++){
    list[i].style.color = "orange";
}

//change the list items with "not-orange" as class items to red

for (let i = 0; i < notOrange.length; i++){
    notOrange[i].style.color = "red";
}