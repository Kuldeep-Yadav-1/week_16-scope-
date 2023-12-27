console.log("<-------ES5 VERSION OR OLD VERSION----------->");
const lan = "javascript";
const nature = "dynamic";
const statement = lan + nature +" hello worlds "+
"<div>"+
   " <div>  </div>"+
"</div>"
console.log("statement :", statement);

console.log("<-------ES6 VERSION OR LATEST VERSION----------->");
console.log("<-------template litrals----------->");

console.log(`${lan}  ${nature}  hello worlds 
<div>
    <div>  </div>
</div>` );

console.log("<-------REPEATE METHOD----------->");
var str = "java script is a dynamic programming language ...... ";
str1 = str.repeat(3);
console.log( "str :: " ,str);
console.log( "str1 :: " ,str1);

console.log("<-------STARTS WITH METHOD----------->");
console.log("<-------startsWith(searchString, position)----------->");
var str = "java script is a dynamic programming language......";
console.log( "string is :" ,str);

console.log("str.startsWith('java')",str.startsWith('java'));
// Expected output: true
console.log("str1.startsWith('java', 3)",str1.startsWith('java', 3));
// Expected output: false

console.log("<-------ENDS WITH METHOD----------->");
console.log("<-------endsWith(searchString, position)----------->");
console.log("str.endsWith('java')",str.endsWith('java'));
// Expected output: false
console.log("str1.endsWith('language', 45)",str1.endsWith('language', 45));
// Expected output: true

console.log("<-------INCLUDES WITH METHOD----------->");
console.log("<-------includes(searchString)----------->");
console.log("str.includes('java')",str.includes('java'));
// Expected output: true
console.log("str1.includes('language')",str1.includes('language'));
// Expected output: true
