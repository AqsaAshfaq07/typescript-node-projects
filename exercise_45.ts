// Cars: 
// Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such 
// as a color or an optional feature. Print the Object that’s returned to make sure all the 
// information was stored correctly.

function cars_information(manufacturer:string, model:string, color?, size?){
    let car : { manufacturer_name:string, model_name:string, color?:string, size?:number} = {
        manufacturer_name: manufacturer, 
        model_name: model
    }
    if (color !== undefined) { car.color = color};
    if (size !== undefined) { car.size = size};
    return car
}

console.log(cars_information('Tesla', 'Y80edj', 'black', 23))

