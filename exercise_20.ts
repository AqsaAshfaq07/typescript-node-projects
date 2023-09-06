// Think of something you could store in a array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates 
// a list containing these items.

import * as readline from 'readline';

// Create a readline interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt the user to enter cities, one per line, until they press Enter twice
console.log("Enter the names of famous cities (one per line). Press Enter twice to finish.");

const cities: string[] = [];

rl.on('line', (input: string) => {
    if (input === '') {
        // User pressed Enter twice, so stop reading input
        rl.close();
    } else {
        // Add the entered city to the array
        cities.push(input);
    }
});

rl.on('close', () => {
    // Display the list of cities entered by the user
    console.log("\nList of Famous Cities:");
    for (const city of cities) {
        console.log(city);
    }
});
