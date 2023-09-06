// Conditional Tests: 
// Write a series of conditional tests. Print a statement describing each test and 
// your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to 
// False.

let test_array:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Five Test Cases resulting to True
console.log(`Test Case 1`);
test_array[0] == 1 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 2`)
test_array[3] == 4 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 3`)
test_array[5] == 6 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 4`)
test_array[7] == 8 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 5`)
test_array[9] == 10 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

// Five Test Cases resulting to False
console.log(`Test Case 6`);
test_array[1] == 3 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 7`)
test_array[2] == 4 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 8`)
test_array[4] == 6 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 9`)
test_array[6] == 8 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);

console.log(`Test Case 10`)
test_array[8] == 10 ? console.log(`Wuhuu, I predicted True`) : console.log(`Alas! It's False`);
