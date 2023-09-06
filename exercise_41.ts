// Magicians: 
// Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

export {magicians, show_magicians};

let magicians:string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "David Blaine", "Derren Brown", "Criss Angel", "Lance Burton", "Hans Klok", "Dynamo"];

let show_magicians = (magicians) => { 
    for (let magician of magicians){ console.log(magician)};};
    
show_magicians(magicians)
