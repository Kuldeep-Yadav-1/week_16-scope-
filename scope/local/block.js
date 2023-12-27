console.log("<---------BLOCK SCOPE----------->");

{
    a = 10;
    var b = 20;
    let c = 30;
    const d = 40;
}

console.log("a :", a);
console.log("b :", b);
// console.log("c :", c);
// (c is const & d is let so both are block scope so it showes Uncaught ReferenceError: c is not defined)
// console.log("d :", d);

var outer = function () {

    {
        e = 50;
        var f = 60;
        let g = 70;
        const h = 80;
    }
    console.log("a outer:", a);
    console.log("var b outer:", b);
    // console.log("c outer  is not accessbale b/c let are block scope:", c);
    // console.log("d outer is not accessbale b/c const are block scope:", d);
    console.log("e outer:", e);
    console.log("var f outer:", f);
    // console.log("g outer is not accessbale b/c let are block scope:", g);
    // console.log("h outer is not accessbale b/c const are block scope:", h);
    // console.log("ne outer accessable b/c without keyword is global scope:", ne);
    // console.log("var nf outer accessable b/c var is function scope:", nf);
    // console.log("let ng outer  is not accessbale b/c let are block scope:", ng);
    // console.log("const nh outer is not accessbale b/c const are block scope:", nh);
    
    var inner = function () {
        {
            ne = 90;
            var nf = 100;
            let ng = 120;
            const nh = 130;
        }
        console.log("a inner:", a);
        console.log("var b inner:", b);
        // console.log("c inner is not accessbale b/c let are block scope:", c);
        // console.log("d inner is not accessbale b/c const are block scope:", d);
        console.log("e inner accessable b/c without keyword is global scope:", e);
        console.log("var f inner accessable b/c var is function scope:", f);
        // console.log("g inner  is not accessbale b/c let are block scope:", g);
        // console.log("h inner is not accessbale b/c const are block scope:", h);
        console.log("ne inner accessable b/c without keyword is global scope:", ne);
        console.log("var nf inner accessable b/c var is function scope:", nf);
        // console.log("let ng inner  is not accessbale b/c let are block scope:", ng);
        // console.log("const nh inner is not accessbale b/c const are block scope:", nh);
        
    }
    inner();
}
outer();
console.log("a out side of outer function is accesable with its recent updated value:", a);
console.log("var b out side of outer function is accesable with its recent updated value:", b);
console.log("e without keyword out side the function:", e);
// console.log("f out side the function is not accessable b/c var f is function scope :", f);
// console.log("g out side the function is not accessbale b/c let are block scope:", g);
// console.log("h out side the function is not accessbale b/c const are block scope:", h);
console.log("ne outside accessable b/c without keyword is global scope:", ne);
// console.log("var nf outside accessable b/c var is function scope:", nf);
// console.log("let ng outside  is not accessbale b/c let are block scope:", ng);
// console.log("const nh outside is not accessbale b/c const are block scope:", nh);