//Basic of javascript
var numberValue = 1;
var stringValue = "Hello world";
var booleanValue = true;  //false is other option
var arrayValue = [1,"String",true,{key:"value"}];
var objectValue = {
  keyNumber:1,
  keyString:"Hello world",
  keyBoolean:false
}

//2 more types, undefined and null

//used to print output to the console or terminal, use for debugging only
console.log("Hello world");

console.log("Number:"+numberValue);
console.log("String:"+stringValue);
console.log("Boolean:"+booleanValue);
console.log("Array:"+arrayValue);

// Exercise: Write a function to print the object type
// print the objectValue
// hint is use JSON.stringify()
console.log("Object:"+objectValue);
console.log("Object:"+JSON.stringify(objectValue));
