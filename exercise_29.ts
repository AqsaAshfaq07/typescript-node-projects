// Favorite Fruit: 
// Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruits:string[] = ['peach', 'mango', 'apple', 'cherry', 'pear'];

if (fruits.includes('peach')){ console.log(`Yes this is one of my favorite fruits. :)`)};
if (fruits.includes('mango')){ console.log(`Yes this is one of my favorite fruits. :)`)};
if (fruits.includes('banana')) {console.log(`No, I don't like this fruit :(`)};
if (fruits.includes('pie')) {console.log(`No, I don't like this fruit :(`)};
if (fruits.includes('apple')) {console.log(`Yes this is one of my favorite fruits. :)`)};
