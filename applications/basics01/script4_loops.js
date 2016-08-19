//supports many types of loops
console.log("For loop");
for(var i=0;i<10;i++){
  console.log(i);
}

//while loop
console.log("While loop");
var j=0;
while(j<10){
  console.log(j);
  j++;
}

//for in
//NOTE: its index not the object
console.log("For in loop")
var arrayValues = ['Hello',"World","!!!!"];
for(var index in arrayValues){
  console.log(index+","+arrayValues[index]);
}

var arrayOfObjects = [{key:'1'},{key:'2'},{key:'3'}]
for(var index in arrayOfObjects){
  console.log(index+","+JSON.stringify(arrayOfObjects[index]));
}
