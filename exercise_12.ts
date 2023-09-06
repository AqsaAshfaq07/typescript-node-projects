// Greetings: 
// Start with the array you used in Exercise 11, but instead of just printing each 
// person’s name, print a message to them. The text of each message should be the same, but each 
// message should be personalized with the person’s name.

import {friends_names} from "./exercise_11";

for (let friend_name of friends_names){
    console.log(`Dear ${friend_name}! Welcome to PIAIC AI BootCamp!`);
};  
