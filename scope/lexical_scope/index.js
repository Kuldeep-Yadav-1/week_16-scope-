console.log("<---------LEXICAL SCOPE----------->");
console.log("CHILD FUNCTION IS LEXICALLY BOUND TO BE PARENT FUNCTION");
console.log("a function scope able to access variable from its parent access");
console.log("LEXICAL SCOPE - ability for a function to access variables from the parent");

var outer = function () {
    a = 10;
    var b = 20;
    let c = 30;
    const d = 40;
    var inner = function () {
        console.log("console of a,b,c & d inside a inner function are lexical scope b/c they access variable from parent. inner function is lexically connected to outer function ie child function is lexically bound to the parent function.");
        console.log("a inner func:", a);
        console.log("var b inner func:", b);
        console.log("let c inner func:", c);
        console.log("const d inner func:", d);
    }
    inner();
}
outer();