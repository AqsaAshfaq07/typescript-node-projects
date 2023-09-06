// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want 
// to try more comparisons, write more tests. Have at least one True and one False result for each of 
// the following:

import { log } from "console"

let str1:string = "aqsa";
let str2:string = "Ashfaq";

// • Tests for equality and inequality with strings
str1 === str2 ? console.log(`true`): console.log(`false`);  // for equality
str1 !== str2 ? console.log(`true`): console.log(`false`); // for inequality

// • Tests using the lower case function
let isLowerCase = function(str:string){
    let output:string = "";
    for (let i=0; i<str.length; i++){ output += (str[i].toLowerCase());};
    return output;
}

isLowerCase(str1) == str1 ? console.log(`True`) : console.log(`False`);   // returns True
isLowerCase(str2) == str2 ? console.log(`True`) : console.log(`False`);   // returns False

// • Numerical tests involving equality and inequality, greater than and less than, greater than 
let num1:number = 5;
let num2:number = 6;

num1 === num2 ? console.log(`True`) : console.log(`False`);  // equality
num1 !== num2 ? console.log(`True`) : console.log(`False`);  // inequality
num1 > num2 ? console.log(`True`) : console.log(`False`);  // greater than
num1 < num2 ? console.log(`True`) : console.log(`False`);  // less than

// or equal to, and less than or equal to
num1 >= num2 ? console.log(`True`) : console.log(`False`);  // greater than or equal to
num1 <= num2 ? console.log(`True`) : console.log(`False`);  // less than or equal to

// • Tests using "and" and "or" operators
num1 && num2 ? console.log(`True`) : console.log(`False`);  // and
num1 | num2 ? console.log(`True`) : console.log(`False`);  // or

// • Test whether an item is in a array
let nums:number[] = [1,2,3,4,5,6,7,8,9,10];
(7 in nums) ? console.log(`True`) : console.log(`False`);  // returns True
(11 in nums) ? console.log(`True`) : console.log(`False`);  // returns False

// • Test whether an item is not in a array
// Returns True if a number is not in the given nums , if it is - returns false

!(11 in nums) ? console.log(`Not in the array`) : console.log(`Present in the array`);
!(7 in nums) ? console.log(`Not in the array`) : console.log(`Present in the array`);  
