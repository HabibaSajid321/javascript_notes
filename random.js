// math.random in js
// it will generate random values its values is always in between 0 and 1.
console.log(Math.random())
// as its value is between 0 and 1 it have decimal in it.
console.log((Math.random()*10)+1)
//  now to avoid decimal we can use floor in it 
console.log(Math.floor((Math.random()*10)+1))

// Question: let say we have a max and min values min as 10 and max as 20 now handle it.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() *(max-min + 1) +min));
// now it will return the value between 10 to 20 
