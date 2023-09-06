// Album: 
// Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object 
// containing these two pieces of information. Use the function to make three dictionaries 
// representing different albums. Print each return value to show that Objects are storing the 
// album information correctly. Add an optional parameter to make_album() that allows you to store 
// the number of tracks on an album. If the calling line includes a value for the number of tracks, 
// add that value to the album’s Object. Make at least one new function call that includes the number 
// of tracks on an album.

let make_album = function(name:string, title:string, tracks?:number){
    let album : {artist_name: string; album_title: string; number_of_tracks?:number } = 
        {artist_name: name, album_title: title};
    if (tracks !== undefined){ album.number_of_tracks = tracks;}
    return album
}

console.log(make_album('Artist1', 'Title1'));
console.log(make_album('Artist2', 'Title2'));
console.log(make_album('Artist3', 'Title3'));
console.log(make_album('Artist3', 'Title3', 3));
