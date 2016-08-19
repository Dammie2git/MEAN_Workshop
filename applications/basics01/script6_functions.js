//functions can be passed and called
var f2 = function(value){
  console.log("Value: "+value);
}

var f1 = function(f2){
  var a = 10,b = 15;
  var c = a + b;
  f2(c);
}

//f1(f2())  is wrong!!!
f1(f2);

//anonymous function
f1(function(value){
  var temp = value+10;
  console.log("Temp value: "+temp);
})

//explain anonymous functions and how its useful
//explain callbacks
//explain how API's can be written on top of this
