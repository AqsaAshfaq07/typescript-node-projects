// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

import { invited_people } from "./exercise_14";

console.log(`Dear ${invited_people[1]}! I'm sorry to inform you that ${invited_people[1]} can't make it to the dinner!`)
invited_people[1] = "Jimmy";
for (let people of invited_people){
    console.log(`Dear ${people}! You're invited to the dinner!`)
}
