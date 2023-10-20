let myDate = new Date();
console.log(myDate)   // 2023-10-19T06:21:49.722Z return this which is not readable.
//  so we will aply some methods. 

console.log(myDate.toString())  // Wed Oct 18 2023 23:23:03 GMT-0700 (Pacific Daylight Time) output.

console.log(myDate.toDateString())   // Wed Oct 18 2023 output

console.log(myDate.toLocaleString())   // output : 10/18/2023, 11:24:45 PM 

// the type of date is object
console.log(typeof myDate);   // for interview.


//  we can also create our own 

let myCreatedDate = new Date(2023,0,12)
console.log(myCreatedDate);  // output 1906-07-16T08:00:00.000Z 
// to understand we can use other methods.
console.log(myCreatedDate.toDateString()); 

// 
console.log(myCreatedDate.toJSON()); 

// 
let date = new Date()
console.log(date.toLocaleString());
// we can also find month year using some methods.
console.log(`Day:${date.getDay()}`);
console.log(date.getMonth());

// time stamp with date 
let mytimeStamp =Date.now();
console.log(` TimeStamp: ${mytimeStamp}`);
