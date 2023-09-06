import {usernames} from './exercise_30';

// No Users: 
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

if (usernames.length == 0){console.log(`We need to find some Users!`)}
else{
    for (let user of usernames){
        if (user == 'admin'){ console.log(`Hello admin, would you like to see a status report?`) } 
        else {console.log(`Hello ${user}, thank you for logging in again.`)};}
};

// • Remove all of the usernames from your array, and make sure the correct message is printed.  
while (usernames.length > 0){
    usernames.pop();   
};
if (usernames.length == 0){console.log(`We need to find some Users!`)};
