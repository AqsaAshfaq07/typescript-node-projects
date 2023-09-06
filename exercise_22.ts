// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. Make 
// sure you correct the error before closing the program.

let people:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

try{
    console.log(`Element at index 100`, people[100]);
}
catch (error){
    console.error(`Index Error!`);
}
