// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places_to_visit:string[] = ["Melbourne", "California", "Hawaii", "Spain", "Egypt"];

// • Print your array in its original order.
console.log(places_to_visit);

// • Print your array in alphabetical order without modifying the actual list.
let sorted_list:string[] = [...places_to_visit];
console.log(sorted_list.sort());

// • Show that your array is still in its original order by printing it.
console.log(places_to_visit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
for (let i = sorted_list.length - 1; i >= 0; i --){
    console.log(sorted_list[i])
}

// • Show that your array is still in its original order by printing it again.
console.log(places_to_visit);

// • Reverse the order of your list. Print the array to show that its order has changed.


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



