// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your 
// list to print a message to each person, inviting them to dinner.

export {invited_people}

let invited_people:string[] = ["Jane", "John", "Jenna"];
for (let people of invited_people){
    console.log(`Dear ${people}! You're invited to the dinner!`)
}
