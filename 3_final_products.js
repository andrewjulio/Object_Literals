/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
let products = [
    {
        name: "Alienware Area 51",
        inventory: 5,
        unit_price: 3999.99
    },
    {
        name: "Asus G531",
        inventory: 9,
        unit_price: 1499.99
    },
    {
        name: "Lenovo Yoga 530",
        inventory: 23,
        unit_price: 499.00
    }
];
console.log(products)

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.
let array = [];
function listProducts(products) {
    for(let i = 0; i < products.length; i++) {
        array.push(products[i].name);
    }
};

// 4. Call the listProducts() function and log the returned value to the console.
listProducts(products);
console.log(array);

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value
let value = 0;
function totalValue(products) {
    for(let i =0; i < products.length; i++) {
        value += (products[i].inventory * products[i].unit_price);
    }
};

// 6. Call the totalValue() function and log the returned value to the console.
totalValue(products);
console.log("the total value of the inventory is $ " + value);

// 7. Run your code by typing node 3_final_products.js in the console below