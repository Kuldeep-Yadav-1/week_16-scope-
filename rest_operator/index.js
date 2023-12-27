console.log("<----------DESTRACTURE OF OBJECT------>" );

const employee ={
    name : 'jhon' ,
    title : "software eng" ,
    city : "lucknow",
    age : 26 ,
}
const{name ,title ,city ,age } = employee ;
console.log("employee ::" ,employee);
console.log("name :" ,name);
console.log("title :" ,title);
console.log("city :" ,city);
console.log("age :" ,age);

const getEmployee = (name,age ,title,city)=>{
    console.log('name' , name );
    console.log('age' , age );
    console.log('title' , title );
    console.log('city' , city);
}
getEmployee("kuldeep" , 25, "software eng" ,"lucknow");
const getEmployeeData = ({name,age ,title,city})=>{
    console.log('name:' , name );
    console.log('age :' , age );
    console.log('title :' , title );
    console.log('city :' , city);
}
getEmployeeData(employee);


console.log("<----------DESTRACTURE OF ARRAY------>");
const arr = ["a" , "b" ,"c", "d", "e",true ,"kuldeep" ,123];
const [ zerothindex , firstindex ,secondindex, thirdindex, fourthindex, fifthindex, sixthindex, seventhindex ] = arr ;
console.log("DESTRACTUREd OF ARRAY :",zerothindex , firstindex ,secondindex, thirdindex, fourthindex, fifthindex, sixthindex, seventhindex);

console.log("<----------REST & SPREAD OPERATOR------>");
console.log("<----------SPREAD OPERATOR in array------>");
let {a1 ,b1 , ...collectData} = { a1:10 , b1:20 ,c1:30 ,d1:40 ,e1:50 ,f1:true}
console.log("a1" ,a1 );
console.log("b1" ,b1 );
console.log("collectData" ,collectData );

console.log("<----------SPREAD OPERATOR in object------>");
const employeeData ={
    ID : new Date(),
    master : "CSE" ,
    ...employee
}
console.log( "employeeData :::" ,employeeData);