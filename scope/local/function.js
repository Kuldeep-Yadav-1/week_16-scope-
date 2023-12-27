console.log("<---------FUNCTION SCOPE----------->");

var outer = function () {
    a = 10;
    var b = 20;
    let c = 30;
    const d = 40;
    a = 11 ;
    b = 21 ;
    c = 31 ;
    // d = 41 ; (d is const so reassignment and updation is not allowed for d)
    console.log("a outer:", a);
    console.log("var b outer:", b);
    console.log("let c outer:", c);
    console.log("const d outer:", d);
    var inner = function () {
        a = 12;
        b = 22 ;
        c = 32 ;
        // d = 42 ;(d is const so reassignment and updation is not allowed for d)
        e = 50;
        var f = 60;
        let g = 70;
        const h = 80;
        console.log("a inner:", a);
        console.log("var b inner:", b);
        console.log("let c inner:", c);
        console.log("const d inner:", d);
        console.log("e inner:", e);
        console.log("var f inner:", f);
        console.log("let g inner:", g);
        console.log("const h inner:", h);
    }
    inner();
    console.log("a outside inner function:", a);
    console.log("var b outside inner function:", b);
    console.log("let c outside inner function:", c);
    console.log("const d outside inner function:", d);
    console.log("e outside inner function:", e);
    // console.log("var f outside inner function ... var is function scope so not defined :", f);
    // console.log("let g outside inner function.... let is function scope so not defined :", g);
    // console.log("const h outside inner function  const is block scope so not defined :", h);
}
outer();
console.log("a ,outer of function is accesable with its recent updated value:", a);
// console.log("var b outside of outer function.. var is function scope so not defined :", b); 
// NOTE-(let ,var ,const throughing error b/c b,c,d  is not defined ) 
// console.log("let c outside of outer of function let is function scope so not defined :", c);
// NOTE- (if a is use without keyword, & declare inside a function it can be access outside of the function it don,t through error outside of function if we update the value of a then updated value access) 
// console.log("d outside of outer of function:", d);
console.log("e ,outer of function is accesable with its recent updated valuem b/c without keyword variable is global scope so accessable :", e);
// console.log("var f outside of outer function.. var is function scope so not defined :", f); 
// console.log("let g outside of outer of function let is function scope so not defined :", g);
// console.log("h outside of outer of function:", h);