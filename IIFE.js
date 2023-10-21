// immwdiately invoked function Expressions.
// why we use IIFE 
// to avoid pollution from global scoped code IIFE can be used. 
(function code(){
    console.log("habiba");
})();
// after every IIFE should write ; otherwise it will produce error.
(()=>{
    console.log("bushra");
})();

((name)=>{
      console.log(`my name is ${name}`);
})("khizra")
