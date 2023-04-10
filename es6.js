/*let age = 19 ; 

age = 20 ; 

console .log(age); 


function sum(){

    let num1 = 25; 
    let num2 = 25; 
    
    const total = num1+num2;

    return total

}


console.log(sum())



for ( var i=0; i<25 ; i++ ){

    console.log("sultan" + i)

}


console.log("sultan"+i); 




const as = {name:"sultan"} ;
console.log(as); 
as.name = "sanjar"; 
console.log(as)
console.log(as.name); 



//es6defual function 
function msg (massage="hey bro" ) {

    console.log(massage); 

} 

msg("this is sultan ")



//es5 defualt fucntion 

function bsg (massage){

    massage = typeof massage !=="undefined"? massage : "sorry";
    console.log(massage)

}

bsg("this is a drill babe ")


// rest perameters . in function if you declare one name like a  you will get only one arguments but if you declare ... and create a name of it  then you can print how much arguments you want . 

function as (a,b,...fs){
    console.log(a,b,fs); 


}

as("is","this","kiss", "miss")

// rest perameters ended . 

// spread opreators started here
const array1 = [1,2,3];

const array2 = [...array1,4,5,6];


console.log(array2);


// spread operators ended here   

const obj1={name:1, phone:2, adress:3};

const obj2 ={name:11, phone:22, adress:33};

console.log(obj1,obj2)

// es5 object literaal 


function sanjar (phone, telephone ) {

    return {
        phone:phone,
        telephone:telephone
    }

}

console.log(sanjar("abib", "ahmed"))


// es6 object literal 

function sultan (phone,telephone, ...who){
    return{
        phone,telephone,who
    }

}
console.log(sultan("this", "is" , "kiss", "miss")) 


// for off loop 

for(let i =0; i<=1000 ; i++ ){
    console.log(i+"warning");
}

var i =0;

while(i<1000){
   
    
    i++ ;
    console.log(i+"you can't enter");
}  


// for off loop  
const array =[1,2,3,4,5]


for ( NewArray of array){
    console.log(NewArray);
}


const group = ["abib", "ahmed", "dipto", "sultan", "sanjar"]

for(Newgroup of group){
    console.log(Newgroup)
}

console.log(group)

// for in loop . for in loop declare the index number not the value of the index number 

const obj5 = {
    name:"sultan",
    adress:"manikganj", 
    telephone:002255,
    number : +885500

}

for(newobj in obj5){
    console.log(newobj)
} 

// template string in es6


const str = `abib 
ahmed 
dipto`

console.log(str);

const name =   `sultan`
const age =    `19`

//es5 format 
console.log("My name is " + name + " I'm " + age + " years old .")

// es6 format 

console.log(`My name is ${name} I'm ${age} Years old . `)

// array desturcturing 


const array11 = [1,2,3,4,5,6,7,8,9,0]

let [a,b,c,...z] = array11; 

console.log(a,b,c,z); 


// object desturcturing 

const obj = {name:"sultan", age:19, ID :22}

const {name,age,ID} = obj;

console.log(`My name ${name} . My age is ${age} . My Id number is ${ID}`);  




// class constructor

class book {
    constructor(name, price ){
        this.name = name, 
        this.price = price
    }
}

let bookdetails = new book("the untold story of sultan " , "500 bdt")

console.log(bookdetails); 
// class expression

let person = class {

    constructor(name,age, profession){
        this.name= name,
        this.age= age,
        this.profession= profession
    }
}

let Newperson = new person ("sultan", 19, "Programmer"); 

console.log(Newperson)


// static methods 


// to print the result of a function 
class book {

    fun(){
        console.log("hey this is sultan")

    }
}


newbook = new book() 

newbook.fun()

// es6 static methods to declare a function 


class book1 {

   static fun1() {
        console.log ("sultan is rock bro ")

    }
}

book1.fun1();

// inheritance super 

// method 1 

class sompotti {

    wealth1(){
        console.log("this is my grandfather wealth")
    }

    wealth2(){
        console.log("this is my father wealth")
    }
}

class ami extends sompotti {

     mine(){
        super.wealth1();
        super.wealth2(); 
    }

}



newami = new ami()
newami.mine()


// method 2 

class sompotti1 {

    wealth11(){
        console.log("this is my grandfather wealth1")
    }

    wealth22(){
        console.log("this is my father wealth1")
    }
}

class ami1 extends sompotti1 {

      mine1(){
        
    }

}

let newami1 = new ami1(); 

newami1.wealth11(); 
newami1.wealth22();

newami1.mine1(); 



// inheritance super ended  


// function expression 

let fun = function(x,y){
    return x+y
}

console.log(fun(10,11)) 


// arrow function 

// method 1 . for a single line code 

let func = (x,y)=>x+y;
console.log(func(10 , 50)); 

// method 2 . for a single perameters 

let fun1 = x => x+100;

console.log(fun1(50)); 

// method 3. for multi line code in function 

let fun2 = (x,y,z)=> {
    return x+y-z;
}

console.log(fun2(100,58,10));

// arrow function ended . 

// js symbols
let sym = Symbol("this is a code")

let sym1 = Symbol("this is a code"); 

console.log(sym===sym1); 


// itarator . only array and string are itrable . in which varriable can run for of  loop they are itrable . 

let array =  [1,2,3,4,5]

for( let i=0; i<array.length; i++){
    console.log(array[i]+ "warning ")
}



// we can chceck the same thing with  for off 

let array1 = [1,2,3,4,5]

for(Elemen of array1){
    console.log(Elemen)
}  */ 


// strict method or strict mode .

// if you use "use strict " and if you made a mistake like you assign a value but you haven't declare the var let or const then in  js engine it wont't gave you a error . but if you use the "use strict methods it will give you a error . 

/* example of string method we are making it comment out bcz . otherwise it can give error on our future dril or code . 

"use strict"

name = "sultan"

function san(){
    name= 'sanjar' 

}

san() */ 

// for each method 

/*let arrow1 = [ "apple" , "banana" , "cucumber", "guava"]

// method 1 
 
 arrow1.forEach(x=>console.log(x)); 

// method 2 

 arrow1.forEach((x)=>console.log(x));

// method 3 
arrow1.forEach(myfun)

function myfun(z){
   console.log(z)
} 

// map & filter 


// map 

let slu = [1,2,6,8]

let slu1 =  slu.map(myfn1)



function myfn1(x){
    return x *5

    

}

console.log(slu1)

// filter 

let sanu = [ 25, 55 , 65 , 75]

let sanu1 = sanu.filter(mysan)

function mysan(y){
    return y=>100;
}
console.log(sanu1) 

// aysnchronous  synchronus 

let fun1= ()=>{
    console.log("this is function 1 ")
}

let functi= () =>{
    console.log("this is the anynomus fucntion ")
}

let fun2 = ()=>{
    setTimeout(functi,20000)

}

let fun3 = () =>{
    console.log("this is fucntion 3 ")
}


fun2();
fun3(); 
fun1();  


// call back function and higher order 

let display = (nothing )=>{
    console.log(nothing)
}


let HigherOrder = (name, class2, Callbackfun)=>{

    const details = `My name is ${name} & I read in class ${class2}`
    Callbackfun(details)


}


HigherOrder("sultan" , 12, display) 


const add = (x,y)=>{
    return (x+y)
}

const sub = (x,y)=>{
    return Math.abs(x-y)
}

const multi = (x,y)=>{
    return(x*y)
}

const divison = (x,y)=>{
    return Math.abs(x/y)
}


const calculator = (num1,num2, cbfun)=>{

    return cbfun (num1,num2)

}

console.log(calculator(5,6,add));
console.log(calculator(5,6,sub));
console.log(calculator(5,6,multi));
console.log(calculator(5,6,divison)) 


// error handiling : try, catch , throw , finally . 


try{

console.log("this is sultan");
 //console.log(hey); 

let age = 18; 

if (age<17){
    throw "hey you are not eligble to enter this website"
}

else if  (age>18){
    throw 'hey strangers welcome there,,,'
}

else {
    console.log("wait until you got 19")
}

}


catch(error){

 // console.log("please check your code agian")
  console.log(error);
  
}

finally{
    console.log("are you okay bro ? "); 

}  


// error handiling ended 


// promise 

let massage = true ; 

let promise = new Promise((resolve, reject) =>{

    if(massage){

        resolve([
            {Username:"sultan", Email: "di9405060@gmail.com"},
            {Username:"abib" , Email:"abibahmed59@gmai.com"}
        ])
    }

    else {reject("user is invalid ")}


})
 

promise.then((s)=>{
    console.log(s)
})

promise.catch((errors)=>{
    console.log(errors)
})



let msg = false ; 

let promise1 = new Promise (( resolve,reject)=>{

    if(msg){
        
       resolve ([
            {Username:"abib", Email:"sultan43980@gmail.com"},
            {Username:"sultan", Email:"sultan43981@gmail.com"}
        ])
    }

    else{ 
        reject("inavalid user name or password")
    }

})

promise1.then((s)=>{
    console.log(s)
})

promise1.catch((e)=>{
    console.log(e)

})  */



 /* try{
    console.log("sultan")
    console.log(sulta)

    let age = 17; 

   if(age>18){
        console.log("welcome back babe ")
    }

    else if (age<18){
        console.log("sorry you can't enter")
    }

    else{
        console.log("wait until you became 19")
    } 
    
}
catch(error){

    console.log("check the code again plz!" + error)


}
finally{

    console.log("welcome sanjar ")
} */
    


/*let details = { age:19 }

try{
    let user=details.name(details) ;

    if(user.name){
        throw new  ReferenceError ("incomplete data. theres no username. ");
    }


    console.log(user.name)
}

catch(e){
    console.log("reference error " +e)

}

finally{
    console.log("all set here")
} 

try{
    let a = 10; 
    let b=11; 

    if(a==b){
        console.log("yes this is right ")
    }

    else{
        throw new SyntaxError("argument is false ")

        
    }

    
}

catch (e) { 

    console.log( "logic is not logical " + e);

}

finally{
    console.log("not sure . click to talk with argument bot ")
}

let msg = true ; 

let promise1 = new Promise (( resolve,reject)=>{

    if(msg){
        
       resolve ([
            {Username:"abib", Email:"sultan43980@gmail.com"},
            {Username:"sultan", Email:"sultan43981@gmail.com"}
        ])
    }

    else{ 
        reject("inavalid user name or password")
    }

})

promise1.then((s)=>{
    console.log(s)
})

promise1.catch((e)=>{
    console.log("please check the code again : "+e)}) 



// asynce & await 

function getuser(){
    return new Promise((resolve, reject) => {
        resolve (console.log("sultan"))
    })
}

function getuserdata(){
    return new Promise((resolve,reject)=>{
        resolve(console.log("adress: manikganj")) ,2000
    })
}

function getusein(){
    return new Promise((resolve,reject)=>{

        console.log(`this is a unique code `)
        resolve(console.log(1*100))
    })
}

//getuser()
//getuserdata()
//getusein()

async  function loaddata(){
    let user = await getuser()
    let su = await getuserdata()
    let us = await getusein()
}

loaddata() */

// es6 default function 
function afg (massage = "this"){
    console.log(massage)
}
afg()
    

// es5 defualt function 

function bfg (massage){
    massage = typeof massage !== 'undefined'   ? massage :"who"

    console.log(massage)
}

bfg("this is a drill babe ")




    


    









  














 

















