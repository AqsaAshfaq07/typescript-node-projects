import { magicians } from "./exercise_41";

// Great Magicians: 
// Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

export {make_great};

let make_great = () => { 
    let new_magicians:string[] = [];
    for (let magician of magicians){ 
        new_magicians.push(`The Great ${magician}`);
    };
    return new_magicians;
};

make_great()
