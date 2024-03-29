/* INSTRUCTIONS
To run this file, click in the Console below and type: node 1_object.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an object named book using object literal syntax
let book = {};

// 2. Add a title property to the book object and assign it a string value
book.title = "The Noise of Time";

// 3. Add an author property to the book object and assign it a string value
book.author = "Jules Barnes";

// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published
book.publish_year = "2016";

/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/
for(key in book) {
    console.log(key + ": ", book[key]);
}
// 6. Run your code by typing node 1_object.js in the console below