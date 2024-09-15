//Coding Challenge 4
//Task 1: Create an Inventory Array of Product Objects
let Inventory = [{name: "Schutt F7", Price: 499.99, Quantity: 150, lowStockLevel: 10},
{name: "Riddell Speedflex", Price: 459.99, Quantity: 200, lowStockLevel: 20},
{name: "VICIS Zero2", Price: 799.99, Quantity: 75, lowStockLevel: 5},
{name: "Xenith Varsity Shadow", Price: 449.99, Quantity: 50, lowStockLevel: 5},
{name: "Riddell Axiom", Price: 750.00, Quantity: 75, lowStockLevel: 5}
] //These are all the top of the line football helmets
console.log(Inventory);

// Task 2: Create a Function to Display Product Details
function displayProductDetails(Product) {
    const stockLevel = Product.Quantity <= Product.lowStockLevel ? "Low Stock" : "In Stock";
    console.log(`Product Name: ${Product.name}`);
    console.log(`Price: $${Product.Price}`);
    console.log(`Quantity in Stock: ${Product.Quantity}`);
    console.log(`Stock Status: ${stockLevel}`);
}

//Task 3: Create a Function to Update Product Stock After Sales
function updateStock (Inventory, unitsSold) {
    let newStock = Inventory.Quantity -= unitsSold
    return `Updated ${Inventory.name} quantity after the sales is: ${newStock}`
}
console.log(`${updateStock(Inventory[0],50)} 
Helmet Availability: ${DetermineLowStock(Inventory[0])}`)

