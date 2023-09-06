// Sandwiches: 
// Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it 
// should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

function orderSandwich(...ingredients) {
    console.log("Sandwich Order Summary:");
    console.log("Bread: Sliced Whole Wheat");

    if (ingredients.length > 0) {
        console.log("Ingredients:");
        for (let ingredient of ingredients) {
            console.log(`- ${ingredient}`);
        }
    } else {
        console.log("No additional ingredients specified.");
    }

    console.log("Enjoy your sandwich!");
    console.log("-----------------------");
}

// Call the function with different numbers of arguments
orderSandwich("Lettuce", "Tomato", "Turkey");
orderSandwich("Bacon", "Egg", "Cheese");
orderSandwich();
