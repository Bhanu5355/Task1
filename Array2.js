let products = [
    {id:201, Name: "Monitor", qty: 12, price: 7000},
        {id:202, Name: "Magic pen", qty: 13, price: 500},
                {id:203, Name: "Keyboard", qty: 14, price: 5000},

                        {id:204, Name: "Laptop", qty: 15, price: 70000},
];
products.forEach((p) => {
console.log(`${p.id} - ${p.Name} - ${p.qty} - ${p.price}`);//not sorted it displays all in a sequence manner

});

productsSortByPrice = products.sort((a, b)=> a.price - b.price)
console.log("\n\nProducts sort by price");
productsSortByPrice.forEach((p)=>{
    console.log(`${p.id} - ${p.Name} - ${p.qty} - ${p.price}`); // sorted here
    
});

let productsPrice = [45, 500, 23, 788];
sortedProductPrice = productsPrice.sort();
sortedProductPrice.forEach((p) => {
    console.log(p);
    
})





//1 Map() - Transorm Data 
//Get product names
let productNames = products.map((p)=> p.Name);
console.log(productNames);

//Add totalValue (qty * price)

let prductsWithTotal = products.map((p) => ({
...p,
totalValue: p.qty * p.price,
}));
console.log(prductsWithTotal);

//2.Filter() - Select Data
//Products price > 10000

let costlyProducts = products.filter((p) => p.price>10000);
console.log("\n\n Products more than 10000");
console.log(costlyProducts);


//3.Reduce()- Calculate
//Total invetory value

let totalInventoryValue = products.reduce(
    (total, p) => total + p.qty * p.price,
    0
);
console.log(totalInventoryValue);

//sort by name(A-Z)

let sortByName = [...products].sort((a,b)=> a.Name.localeCompare(b.Name));
console.log(sortByName);



console.log("\n\n Befoire reverse \n");
console.log(...products);

let reverseProducts = [...products].reverse();
console.log(reverseProducts);






