// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.

let person_name:string = "Aqsa"; 

console.log(`Your name in UpperCase is: ${person_name.toUpperCase()}`);
console.log(`Your name in LowerCase is: ${person_name.toLowerCase()}`);
console.log(`Your name in TitleCase is: ${person_name[0].toUpperCase()}${person_name.slice(1, )}`)
