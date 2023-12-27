
console.log(`<----------------QUESTION NO 1 :PROGRAM FOR THIS STRACTURE
*
**
***
****
*****
******-------------->`)
document.write("<------1.START FROM HERE----->");
document.write("<br>");
console.log("<------1.START FROM HERE----->");
for(let i=0 ; i <= 5 ; i++){
    for(let j=0 ; j <= i ; j++){
        // console.log("*");
        document.write("*");
    }
    document.write("<br>");
}



// console.log(`<----------------2.PROGRAM FOR ------------>`)
// document.write("<------2.START FROM HERE----->");
// document.write("<br>");
// for(let i=5 ; i >= 0 ; i--){
//     for(let j=0 ; j <= i ; j++){
//         // console.log("*");
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<------3.START FROM HERE----->");
// document.write("<br>");
// var i ,j ,k ;
// for( i=0 ; i <= 5 ; i++){
//     for( k=0 ; k <= 5-i ; k++){
//         document.write("&nbsp&nbsp");

//     }
//     for( j=0 ; j <= i ; j++){
//         // console.log("*");
//         document.write("*");
//     }
//     document.write("<br>");
// }

console.log(`<----------------QUESTION NO 2. PATTERN PYRAMID------------>`)
console.log(`<----------------QUESTION NO 2:PROGRAM FOR THIS STRACTURE
          *
         ***
        *****   
       *******                
      *********    
     ************
     ------------->`)
// document.write("<------4.START FROM HERE----->");
document.write("<br>");
var i ,j ,k,l ;
for( i=0 ; i <= 5 ; i++){
    for( k=0 ; k <= 5-i ; k++){
        document.write("&nbsp&nbsp");

    }
    for( j=0 ; j <= i ; j++){
        // console.log("*");
        document.write("*");
    }

    for(l=1 ; l<= i ; l++){
        document.write("*");

    }
    document.write("<br>");
}


console.log(`<----------------QUESTION NO 3.PROGRAM FOR ODD EVEN------------>`)
let arr = [1,2,3,4,5,6,7,8];
for(let item of arr){
    if(item % 2 === 0){
        console.log("no is even" , item);
    }else{
        console.log("no is odd" ,item);
    }

}

console.log(`<----------------QUESTION NO 4.PROGRAM FOR PALINDROM------------>`)
var str = prompt(`enter a STRING or NUMBER to check PALINDROM `);
// var str = `kuldeep`;
var len = str.length;
var msg = `it is palindrom`;
// console.log(str); 
for(let i=0 ; i < len/2 ; i++){
    // console.log( str[i] );
    // console.log( str[str.length -1 -i] );
    if(str[i] !== str[len -1 -i] ){
        msg = `it is not a palindrom `;
    }
}
console.log(`${str} : ${msg}`);

console.log(`<----------------QUESTION NO 5.PROGRAM FOR REVERSE A NO------------>`)
var num = prompt(`enter a NUMBER for reverse`);
console.log("ENTER NUMBER :",num);
var str = num.toString();
var len = str.length;
var str1=[];
for(let i=0 ; i < len ; i++){
    str1.push(str[len -1 -i])
    // str1.join("")
    // str2 =str1.toString();
}
var str2 = str1.join("");
console.log("REVERSE NO :", str2);

console.log(`<----------------QUESTION NO 6.PROGRAM FOR REVERSE 2nd LARGEST NO------------>`)
var arrNum = [12 ,123,3,43,26,100,56,92,24,84,48,99,9 ];
console.log( "arrNum before shorting:" , arrNum);
let callbackSort = function (a,b){
    return a - b ;
}
arrNum_short = arrNum.sort(callbackSort);
console.log( "arrNum_short after sorting:" , arrNum_short);
var len = arrNum_short.length ;
console.log("2nd largest No after sorting:" ,arrNum_short[len  -2]);

console.log(`<----------------QUESTION NO 7.PROGRAM FOR SORTING WITHOUT SORT METHOD------------>`)
let arr1 = [12 ,34 ,5 ,8 ,9 ,123,999,92];
for(let i=0 ; i < arr1.length ; i++){
    for(let j=0 ; j < arr1.length ; j++){
        if(arr1[j] > arr1[j+1]){
           let swap = arr1[j];
            arr1[j]= arr[j+1];
            arr[j+1]= swap ;
        }
    }
}
console.log("sorted arr1 :", arr1);







