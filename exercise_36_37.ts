// T-Shirt: 
// Write a function called make_shirt() that accepts a size and the text of a message that 
// should be printed on the shirt. The function should print a sentence summarizing the size 
// of the shirt and the message printed on it. Call the function. 

let make_shirt = function(size:number = 40, text:string = 'I love TypeScript.'){
    return `I've a shirt of size ${size} p.s, ${text}`;
};
console.log(make_shirt(38, 'I love this shirt :)')); 

// Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt 
// of any size with a different message.

console.log(`Large shirt - using default message`, make_shirt(40));
console.log(`Medium shirt - using different message`, make_shirt(36));
console.log(`Medium shirt - using different message`, make_shirt(30, "I am a RockStart :)")) 
