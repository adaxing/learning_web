var fake = require("faker");

console.log("=============================");
console.log("WELCOME TO MY SHOP!");
console.log("=============================");

// 10 random product name and price
// product name - $$$
for (var i=0; i<10; i++) {
    var ranProName = fake.commerce.productName();
    var ranPrice = fake.commerce.price();
    console.log(ranProName + " - " + "$"+ ranPrice);
}

