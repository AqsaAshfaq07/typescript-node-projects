// Names: Store the names of a few of your friends in a array called names. Print each person’s name 
// by accessing each element in the list, one at a time.

export {friends_names};

let friends_names:string[] = ["John", "Jane", "Mary", "Peter", "Katie"]; 
for (let friend_name of friends_names){
    console.log(friend_name);
};
