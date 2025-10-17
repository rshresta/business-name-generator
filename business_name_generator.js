// i want  make a bussiness name generator without using array 
adjuctive=['crazy','amazing','fire']
shopname=['engine','food' ,'garment']
word=['bors','limited','hub']
function generateBusinessName(adj, shop, word) {
    const randomAdjIndex = Math.floor(Math.random() * adj.length);
    const randomShopIndex = Math.floor(Math.random() * shop.length);
    const randomWordIndex = Math.floor(Math.random() * word.length);
    return adj[randomAdjIndex] + " " + shop[randomShopIndex] + " " + word[randomWordIndex];
}
const businessName = generateBusinessName(adjuctive, shopname, word);
console.log("Generated Business Name: " + businessName);


