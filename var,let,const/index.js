// var without keyword decleration of variable
//  var is functional scope
//  let & const is block scope
//  const : mutable is allowed and reassignment are not allout


// a ; 
console.log("a : is not defined");
var b ;
let c ;
// const d; 
console.log("const d : it showes missing initialiser");
console.log("var b :", b);
console.log("let c :", c);


// const : mutable is allowed means non-primitve data type some updation is allowed and reassignment are not allowed
console.log( "<------ const : mutable is allowed and re-assignment are not allowed----------> ");
console.log( "<------Example----------> ");
const person ={
    firstName : "kuldeep" ,
    lastName : "yadav" 
}

person.firstName = 'sandeep';
console.log( "person :", person);
console.log( "person.firstName :", person.firstName);
// person = {}; console.log( "Uncaught TypeError: Assignment to constant variable");

// person ={
//     firstName : "deep" ,
//     lastName : "singh" 
// } console.log( "Uncaught TypeError: Assignment to constant variable");

for(var cout = 0 ; cout<5 ; cout++){
    setTimeout(()=>{
        console.log("cout :" ,cout);
        //output when use var it has refrence keep hold the old value =>  console.log("5 cout : 5");
    },2000)
}


console.log("cout : for let " );
for(let cout = 0 ; cout<5 ; cout++){
    setTimeout(()=>{
        console.log("cout :" ,cout);
        //output for let it update its value every time this loop altrate & sets its new value it not holds the previous value means create its lexical enviroment and bind its value =>  console.log("5 cout : 5");
        //  cout : 0   index.js:44
        //  cout : 1   index.js:44
        //  cout : 2   index.js:44
        //  cout : 3   index.js:44
        //  cout : 4   index.js:44
        
    },3000)
}