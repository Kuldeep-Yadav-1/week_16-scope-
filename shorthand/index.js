console.log( "<---------ES5 key & value pair both are  used------>"  );

function getCar(model, year , name){
    return{
        model: model,
        year : year,  
        name : name
    }
}
let car =getCar("scarpio",2021 ,"mahindra");
console.log( "car :" ,car );
// console.log( "car1 :" ,getCar("scarpio",2021 ,"mahindra") );

console.log( "<---------ES6 Only key used value are repeated so remove in ES6------>"  );
const space = "seat" ;
function getCar1(model, year , name){
    return{
        model ,
        year ,  
        name ,
       [space] : 5
    }
}
let car2 =getCar1("XUV 500",2023 ,"mahindra 2");
console.log( "car2 :" ,car2 );
// console.log( "car3 :" ,getCar1("XUV 500",2023 ,"mahindra 2"));