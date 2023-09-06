// Stripping Names: 
// Store a person’s name, and include some whitespace characters at the beginning and 
// end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print 
// the name once, so the whitespace around the name is displayed. Then print the name after striping 
// the white spaces.

// import re
let person2:string = "\t Aqsa \t"
let strip_name = (person2:string) => {
    const pattern = /\s|\t|\n/g;
    return person2.replace(pattern, "");
}
console.log(strip_name(person2)) 
