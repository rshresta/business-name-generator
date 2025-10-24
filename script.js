// make a name generator using 

/*adjuctive=['crazy','amazing','fire']
shopname=['engine','food' ,'garment']
word=['bors','limited','hub'] */

let rand = Math.random(); // generates a random number between 0 and 1
if (rand < 0.33) {
    var adj = 'crazy';
} else if (rand < 0.66) {
    var adj = 'amazing';
} else {
    var adj = 'fire';
}
let rand2 = Math.random();// generates a random number between 0 and 1
if (rand2 < 0.33) {
    var shop = 'engine';
} else if (rand2 < 0.66) {
    var shop = 'food';
} else {
    var shop = 'garment';
}
let rand3 = Math.random();// generates a random number between 0 and 1
if (rand3 < 0.33) {
    var word = 'bors';
} else if (rand3 < 0.66) {
    var word = 'limited';
} else {
    var word = 'hub';
}   
function generateBusinessName(adj, shop, word) /* function to generate business name*/
 {
    return adj + " " + shop + " " + word;
}

console.log("Generated Business Name: " + generateBusinessName(adj, shop, word));// outputs a random business name each time the code is run