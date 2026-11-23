// Modify function to only add item if it is not already in array
let shoppingList = []

function addItem(item){
    if(!shoppingList.includes(item)){
        shoppingList.push(item)
    }
}

// Function that removes last item from shoppingList array
function removeLastItem(){
    shoppingList.pop();
}


// Function that logs all items in the shoppingList array to the console
function displayList(){
    let list = document.getElementById("shoppingList");

    list.innerHTML = "";
    for (let i = 0; i < shoppingList.length; i++){
    let newItem = document.createElement("li");
    newItem.textContent = shoppingList[i];
    list.appendChild(newItem);
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


// Connects add item button on html with js and adds item once clicked
document.getElementById("addButton").addEventListener("click", function(){
    let item = document.getElementById("itemInput").value;

    addItem(item);
    displayList();
});


// Connects remove item button on html with js and removes item once clicked
document.getElementById("removeButton").addEventListener("click", function(){
    removeLastItem();

    displayList();
});

displayList();