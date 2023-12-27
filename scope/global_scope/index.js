console.log("<---------scope----------->");
console.log("window :", window);
console.log("this :", this);

console.log("<---------GLOBAL SCOPE----------->");
a = 10;
var b = 20;
let c = 30;
const d = 40;
console.log("a :", a);
console.log("b :", b);
console.log("c :", c);
console.log("d :", d);
var outer = function () {
    console.log("a outer:", a);
    console.log("b outer:", b);
    console.log("c outer:", c);
    console.log("d outer:", d);
    var inner = function () {
        console.log("a inner:", a);
        console.log("b inner:", b);
        console.log("c inner:", c);
        console.log("d inner:", d);
    }
    inner();
    console.log("a outside the inner:", a);
    console.log("b outside the inner:", b);
    console.log("c outside the inner:", c);
    console.log("d outside the inner:", d);
}
outer();
console.log("a outside the outer:", a);
console.log("b outside the outer:", b);
console.log("c outside the outer:", c);
console.log("d outside the outer:", d);