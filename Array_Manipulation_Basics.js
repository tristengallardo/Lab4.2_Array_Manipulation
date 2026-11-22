// Function that takes item as a parameter and adds it to shoppingList array
let shoppingList = []

function addItem(item){
    shoppingList.push(item);
}

addItem("tomato");
addItem("orange");

console.log(shoppingList);


// Function that removes last item from shoppingList array
function removeLastItem(){
    shoppingList.pop();
}

removeLastItem();

// Function that logs all items in the shoppingList array to the console
function displayList(){
    for (let i = 0; i < shoppingList.length; i++){
    console.log(shoppingList);
}
}

displayList();