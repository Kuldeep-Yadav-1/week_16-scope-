console.log("<--------SHALLOW COPY & DEEP COPY------->");
console.log("<--------SHALLOW COPY------->");
let arr1 = [1,2,3,4,true, "ajay" ];
let arr2 = arr1;
console.log( 'arr1 :' ,arr1);
console.log( 'arr2 :' ,arr2);
arr1.push("new data");
console.log('after push arr1 :' ,arr1);
console.log('arr2 ::' ,arr2);
arr2.push("shallow copy");
console.log( 'arr1 :' ,arr1);
console.log( 'afer push arr2 ::' ,arr2);
console.log('if you change in one array then other ARRAY impacted due to change in first IE called SHALLOW COPY');


console.log("<--------DEEP COPY------->");
let arr3 = [1,2,3,4,true, "ajay"];
let arr4 = [...arr3];
console.log("from method is also used in place of spread operator as a DEEP COPY");
console.log( 'arr3 :' ,arr3);
console.log( 'arr4 :' ,arr4);
arr3.push("deep copy 1");
console.log('after push arr3 :' ,arr3);
console.log('arr4 ::' ,arr4);
arr4.push("DEEP copy 2...");
console.log( 'arr3 :' ,arr3);
console.log( 'afer push arr4 ::' ,arr4);
console.log('if you change in one array then other ARRAY DON`T impacted due to change in first ie called DEEP COPY ');



