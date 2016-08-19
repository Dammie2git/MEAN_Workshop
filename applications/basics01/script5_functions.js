//functions are the most important basic feature of JavaScript
//defining the function
function sayFoo(name){
  console.log("sayFoo : "+name);
}

//calling the function
sayFoo("Foo");

//functions are first class objects
var sayBar = function(name){
  console.log("sayBar : "+name)
}
sayBar("Bar");

//returns object of type function
console.log(sayBar);
