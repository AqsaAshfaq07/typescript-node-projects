"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invited_people = void 0;
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your 
// list to print a message to each person, inviting them to dinner.
console.log("Exercise 14");
var invited_people = ["Jane", "John", "Jenna"];
exports.invited_people = invited_people;
for (var _i = 0, invited_people_1 = invited_people; _i < invited_people_1.length; _i++) {
    var people = invited_people_1[_i];
    console.log("Dear ".concat(people, "! You're invited to the dinner!"));
}
;
console.log("Dear ".concat(invited_people[1], "! I'm sorry to inform you that ").concat(invited_people[1], " can't make it to the dinner!"));
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("Exercise 15");
invited_people[1] = "Jimmy";
for (var _a = 0, invited_people_2 = invited_people; _a < invited_people_2.length; _a++) {
    var people = invited_people_2[_a];
    console.log("Dear ".concat(people, "! You're invited to the dinner!"));
}
;
console.log("I found a bigger dinner table!");
// More Guests: You just found a bigger dinner table, so now more space is available. Think of 
// three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("Exercise 16");
invited_people.unshift("Aman");
var n = invited_people.length;
invited_people.splice((Math.floor(n / 2)), 0, "Meson");
invited_people.push("Enid");
console.log(invited_people);
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
// dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each 
// time you pop a name from your list, print a message to that person letting them know you’re sorry 
// you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program.
console.log("Exercise 17");
console.log("Sorry, I can invite only two people for dinner!");
var removed = "";
while (invited_people.length > 2) {
    var popped = invited_people.pop();
    if (typeof popped === 'string') {
        removed = popped;
        console.log("Dear ".concat(removed, "! Sorry, you're no longer invited to the dinner!"));
    }
    else {
        // Handle the case where pop() returned undefined if needed.
        console.log("Error: Couldn't remove a guest.");
    }
}
console.log(invited_people);
