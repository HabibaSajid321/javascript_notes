// higher order functions.
// function which use a funcion inside it like map filter etc.
 // Higher-order function that takes in a function as an argument
function higherOrderFunction(func) {
    // Returning a new function
    return function (x) {
      return func(x) + 1; // Manipulating the input function
    };
  }
  
  // Function to be passed as an argument to the higher-order function
  function inputFunction(x) {
    return x * 2;
  }
  
  // Using the higher-order function with the input function
  const modifiedFunction = higherOrderFunction(inputFunction);
  
  // Calling the modified function
  const result = modifiedFunction(5); // 5 * 2 + 1 = 11
  console.log(result); // Output: 11
  