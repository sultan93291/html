a = 11; 
b = 11; 


if (a>b){

    console.log(" a is big  "); 
}

else if ( a<b ){
    console.log('b is big ' )
}

else { 
    console.log("both are same ")
}


var usr_name = "sultan"; 


switch(usr_name){

    case "sultan"  :
        console.log(" welcoem sultan ")
        break; 

    case "sanjar" : 
        console.log(" welcome here sanjar ")
        break; 
    
    case "abib" : 
        console.log( " please confirm your identity ")
        break; 
    
    default:
        console.log( " create your user id "); 
        break;

}



var myDate = new Date ;

console.log(myDate.getFullYear()); 
console.log(myDate.getDate()); 
console.log(myDate.getTime()); 
console.log(myDate.getTimezoneOffset()); 
console.log(myDate.getMilliseconds()); 
console.log(myDate.getUTCDate()); 
console.log(myDate.getUTCFullYear()); 
console.log(myDate.getUTCDate()); 
console.log(myDate.toDateString()); 
console.log(myDate.toTimeString()); 
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toLocaleTimeString()); 

var su = ['sultan' , 'abib' , ' sanjar ']; 

var us = [ ' ahmed' ,  ' khan' ];

su [0] = "ariyan"  

console.log(su[2]);  
console.log(su); 


var gang = [ "sultan" , " sanjar" , "abib" , 'ariyan' ]

gang.pop(); 

gang.push("boss"); 

console.log(gang); 


gang.shift(); 

gang.unshift('sorry for removing you but your voilating our envoirment'); 

console.log(gang); 

var fdname = ["abib", "ripon", "bijoy", "salman", "heera" ];

fdname.splice(0,3, "abib ahemd dipto " , "tuta", "joy");

console.log(fdname); 

console.log(fdname.slice(0,3)); 

console.log(fdname.slice(0,2)); 

var num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  
for( var i = 5;   i< num.length; i++ ){
    console.log("sultan"); 

} 

var i = 0;

var b = [0,1,2,3,4,5,6,7,8,9];


while (i<=b.length){
    console.log(i)
    i++

}

var b = 100;

for( var a = 0;  a<=b; a++){
    console.log(a);

}

var a = 0; 

var b = 0; 

while(a>=b){

    console.log("sultan")
    
    a++


} 

i= 0; 
b= 0; 

if (i<b) {

    console.log(" hello world ")
  
}

else if  (i>b) {

    console.log(" this world is mine ")

}

else {

    console.log("this is better . equality is good ")

} 

var usr_name = [ "abib" , "sultan" , "ariyan" , "sanjar"] ; 

switch (usr_name) {

    case "abib" :
    console.log("this is sultan ")

    break

    case "sultan":
    console.log("this is a drill babe ")
    break
    default :
     console.log("our world is burning")

}


var j =100; 

for ( var i = 0; i<=j; i++){
    console.log(i);
}


while(j<0){
    console.log("thanks sultan")
    j++

}


var i = 0; 

var b = 0; 

if (i>b){
    console.log("a is big")
}

else if  (i<b){
    console.log("b is big ")
}

else{

    console.log("there's value are same ")


} 


let data = "sultan"

switch(data){
    case "date":
    console.log("welcome here")
    break;

    case "data":
    console.log("try again ")
    break; 
    
    case "sultan":
    console.log("hello boss")
    break;

    default :
    console.log("please check your data again")
    break;


} 




for (var i = 0; i>=0; i++){
    console.log("warning")

}

var a = 0; 
var b = 100; 

while(a<b){
    console.log("warning"); 
    a++
} 

function abib ( num1   ){

    var total = num1*10;

   return total
    

    
}

var a = abib(10);
var b = abib(20)
var c = abib(30)
var d = abib(40)
var e = abib(50)

console.log(a/c);
console.log(b+d);
console.log(c*b);
console.log(d-a);
console.log(e%b);


function sultan(num1, num2){
    var total = num1+num2;
    console.log(total)
}

sultan(15,285) 



sultan = {name:"abib", class:12, adress:"manikganj", };

console.log(sultan.adress);


console.log(typeof(sultan)); 




function AbibF (YourName, Adress,  YourPhonenumber, ){

    this.YourName = YourName;
    this.Adress = Adress;
    this.YourPhonenumber = YourPhonenumber;
    this.ShowMe = function () {

        console.log(this.YourName);
        console.log(this.Adress);
        console.log(this.YourPhonenumber);
    }


}

var obj = new AbibF ("pantik" , "singair", +8801857589329 );
obj.ShowMe() 

var obj1 = new AbibF ("jahid" , "saturia", +8801857589326 );
obj1.ShowMe()

var obj2 = new AbibF ("mohammad" , "harirampur", +8801857589321 );
obj2.ShowMe()

var obj3 = new AbibF ("ahmed" , "ghior", +8801857589325);
obj3.ShowMe()

var obj4 = new AbibF ("ariyan" , "shibalay", +8801857589328 );
obj4.ShowMe()

var obj5 = new AbibF ("sanjar" , "andharmanik", +8801857589327 );
obj5.ShowMe()

var obj6 = new AbibF ("abib" , "partili", +8801857589324 );
obj6.ShowMe() 


var king = 50; 

var kings = (king > 25 ) ? "kings are better " : "kings are not  better " ; 

console.log(kings); 


for (var i = 0 ; i<=10; i++ ) {

    if (i==5) {
        console.log("Key Word Missing")
        continue 
    }

    console.log(i)

} 


abib = ["sultan" , "sanjar" , "ahmed " , "abib"] ;



abib[2] = "miya" 

console.log(abib)

abib.pop()

abib.push("we are rock ")

console.log(abib)

abib.shift()

console.log(abib)

abib.unshift("we will wait for you ")

console.log(abib.slice(0,1)); 

abib.splice(0,3, "us" , "bus", "kaj");

console.log(abib); 


var a = 0 ; 

var b = 26 ; 


while(a<=b ){

    console.log("this is the coding world "); 
    a++
}  


// you can assign or declare a varriable multiple time . 

var asi = 25 ; 

var asi = 22; 

console.log(asi);

// you can assign a value in late multiple time but you can't decalre a let multiple time 

let ai = 26; 

ai = 27; 

console.log(ai);

// const is a fixed value .  you can't assign a value in it multiple time. or you can't even declare a const multiple time . 

const  af = 11;



console.log(af); 

// global scope 

var us = "tumi ke cinchi na " ; 

console.log(us); 

//function scope 


function bs () {

    console.log(us); 

    var ff = 44 ; 

    console.log(ff) ; 
}

bs()

// block scope 

{
    const uk = "this is a drill and just nothing"

    console .log (uk); 
}  

// function expression 

var expressin = function ( msg , msg1 ) {

    msg = "a drill"
    msg1 = "who care about us "

    console.log(msg, msg1)

}

expressin()  


// inner function 


function us () {

    var liss = "this is sultan"

    console .log(liss);

    function we() {
        var fiss = " sultan is doing rock"

        console.log(fiss); 

        console .log(liss);  

    }
    we()

}  






 


































