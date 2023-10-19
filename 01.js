// define thw type of a var in js 
const balance = new Number(100);
console.log(balance);
// this will define its type automatically as a number and print it.
// also show the values available in prototype.
console.log(balance.toString());
// this will change the type to string.
console.log(balance.toString().length);  // we cam also apply string functions here.
console.log(balance.toFixed(2)); // this will print 100.00 

// precision value.
const newBalance = new Number(123.989281)
console.log(newBalance.toPrecision(3))  // this will return the 3 precision values. 


// math library in js
console.log(Math)  // object [Math] {} this is the output math is the object having properties.
// absolute in maths

console.log(Math.abs(-43));  // this will convert the negative value to positive valur.

// round in maths
console.log(Math.round(4.586))   // this will round off the values.

// celi in maths: it will also round the value but if the value is 4.2 it will convert it to 5.
console.log(Math.ceil(4.2))


// floor in maths : it will  also round the value but if the value is 4.2 or 4.9 it will convert it to 4.
console.log(Math.floor(4.2))

// square rot in maths:

console.log(Math.sqrt(49))

// power in maths
console.log(Math.pow(7,2))  // to multiply with power.

// min and max
console.log(Math.max(2,4,5,67,8))
console.log(Math.min(2,4,5,67,8))


// math.random in js
// it will generate random values its values is always in between 0 and 1.
console.log(Math.random())