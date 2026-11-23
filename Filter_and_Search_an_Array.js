// Modify function to only add item if it is not already in array
let shoppingList = []

function addItem(item){
    if(!shoppingList.includes(item)){
        shoppingList.push(item)
    }
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


// Function that takes a search term as a parameter and returns all items in shoppingList that contains that search term
function filterItems(search){
    let results = [];

    for (let i = 0; i < shoppingList.length; i++){
        if (shoppingList[i].toLowerCase().includes(search.toLowerCase())) {
            results.push(shoppingList[i]);
        }
    }
    return results;
}
console.log(filterItems("orange"));