// html dom  

// get elements by id >

//let elem =  document.getElementById('ID1');

//elem.innerHTML=" it's a fucking labourhood "

// get elements by class . in class you can't declare the class alone bcz it can declare multiple time so you have to declare the index number of it in a array

//let elm = document.getElementsByClassName('par')[1];

//elm.innerHTML="click to join us "

// get elements by atribute . its fully similar like get elements by class . 

/* let lm = document.getElementsByName('heading5')[0];
lm.innerHTML="this is the heading 5 "

// get elements by tag name . it same like class and id 

let m =document.getElementsByTagName('h2')[1];

m.innerHTML="well your  doing so good . but it's not good enough for your future so  do it in a well  way "


// querry selector and querry selector all 

// querry selector in querry selectoor first you need to call the document and . querry selector and inside of the querry if you assign a id then you have to give a # and if you assign a class you need to give a . but in tag its similar like get name by tag . but you can't assignt the exact index number of a class name or tag you can slove it with querry seletor all . using arry . index number 

// example querry selector 

let n = document.querySelector("#ID1");

n.innerHTML="injected using query "

// example querry selector all

let l = document.querySelectorAll(".par")[1];
l.innerHTML="let's change the code" */

// on click event 

/*  function Clickme(){

    document.getElementById('id1').innerHTML=Date();
} */ 

// traversing elements 

// get parent elements 

/*  let a = document.querySelector('.child');

console.log(a.parentNode);

// traversing child elements 

// first elements childs  

let child0 = document.querySelector('.good');

child0.firstElementChild.innerHTML="it's a great journey of ours . "

// last elements childs 

let child = document.querySelector('.good');

child.lastElementChild.innerHTML="please change the code for me "

// all elements . childs 


//let child1  = document.querySelector('.good');

//child1.children.innerHTML="try to inject this on dom . web"

// traverese siblings elements 

let child00 = document.querySelector('.tt');

child00.previousElementSibling.innerHTML="556"

// making html tags using js dom 

let div = document.createElement('div');



// js dom class and id create method
div.id="sultan";

div.className="snaj";

//let text = document.createTextNode("hey this dummy text is made by js ");

let h1 = document.createElement('h1');
h1.textContent= "this is a fucking code ";
div.appendChild(h1);
//div.appendChild(text);


document.body.appendChild(div); 



// difference between text content & inner text . if we use text content it will show all the child text in this properety . or if we use inner text it will show only the parent content text it wont return the content's what is on the child tag's . 


let menu = document.getElementById('menu');

console.log(menu.innerText) 

// inner html drills 


let div = document.querySelector('#dv');

div.innerHTML = " <a href = '#' style='color: tomato;''> click me </a>  " 

let menu = document.getElementById('menu');

let li = document.createElement('li');

li.innerHTML='About us ';

menu.appendChild(li);  

// js document fragment 

let menu = document.getElementById('menu');

let langu = ['js', 'python', 'c', 'c++', 'css','java']

let fragments =  document.createDocumentFragment();

langu.forEach((lang)=>{

    let li = document.createElement('li');

    li.textContent=lang;

    fragments.appendChild(li);
    
    
})

menu.appendChild(fragments)


// for loop using fragment 

let div = document.querySelector('.menu');

let fragment = document.createDocumentFragment();

for(let i= 0; i<=1000; i++){

    let p = document.createElement('li');

    p.textContent= ` this is a list tag ${i}`

    fragment.appendChild(p);

}

div.appendChild(fragment);



let menu = document.getElementById('menu')

let li = document.createElement('li');

li.textContent="Home"

menu.insertBefore(li,menu.firstElementChild); 


// js dom append and prepend . append & prepend are fully same just you need to declare append or prepend on the last 

let  thi = document.getElementById('this');

let array = ["sultan", "ahmed " , "sanjar"]


let domscript = array.map((name)=>{

    let li = document.createElement("li");

    li.textContent=name;

    return li 



    
})


thi.append(...domscript);  


// html dom position property 

let menu = document.querySelector('#menu');

menu.insertAdjacentHTML("afterbegin","<h1> after begin </h2>"); // after the existing id elmenet 

menu.insertAdjacentHTML("afterend", "<h1> after end </h1>"); // after the existing id element 

menu.insertAdjacentHTML("beforebegin", "<h1> before begin </h1> " ); // before the element of id 

menu.insertAdjacentHTML("beforeend", "<h1> before end </h1>"); // before the ending of the element of existing id 

 let menu = document.querySelector('#menu');

 let li = document.createElement('li');

li.textContent= " Home ";

// menu.removeChild(menu.lastElementChild);

// menu.replaceChild(li, menu.firstElementChild); 

// clone node 

let clonenode = menu.cloneNode(true); 

clonenode.id= "clone id "

document.body.appendChild(clonenode); 

// set atribute class or id 

let div = document.querySelector("div");

div.id= 'div id ';

// set atribute 

let btn = document.querySelector('#btn'); 

if(btn){
    btn.setAttribute("class","sultan")  
}  

// get atribute

let btn= document.querySelector('#btn')

//if(btn){
  //  console.log(btn.getAttribute('name'))
// }

// remove atribute 

//let mybtn = btn.removeAttribute('name');

// has atribute 

// console.log(btn.hasAttribute('name'));

// Manupulating Elements styles => css == inline css   // 

let myst = document.getElementById('myst');

myst.style.width="50%";

myst.style.fontSize="25px";

myst.style.backgroundColor="yellow"  

// css getcomputed style . 

let msg = document.querySelector('#msg');

// psudo name property 

let bsg = getComputedStyle(msg,"::first-letter");

console.log(bsg.backgroundColor);

// simple tag or class & id

let csg = getComputedStyle(msg);

console.log(csg.fontSize) 

// class name 

let p = document.querySelector("p");

p.className= 'sultan'

p.id= "this is a name"

console.log(p.className);

// js class list property  

// class add remove replace methods 

let menu = document.querySelector('#menu');

// class list add class 

menu.classList.add('hey', 'how', 'hello');

// class list remove class

menu.classList.remove('hello');

// class list replace class

menu.classList.replace('hey', 'sanjar');

// class list toggle method . if you declare a class list in a toggle method if the class name doesn't exist it will creat it of if it does exist on that class list it will remove the class name . 

menu.classList.toggle('why');

// class list contains . if the given class value eixst then it will show the true value else it will show you the false value 

console.log(menu.classList.contains('sanjar'));

menu.className+= ' newclass';

console.log(menu.className)   

let msg = document.querySelector('#msg')

msg.style.width="100%"

msg.style.fontSize="20px"


// method for adding js dom value in psudo elements using jd dom 

let bsg = getComputedStyle(msg,"::first-letter");

console.log(bsg.fontSize);

console.log(bsg.color);

msg.style.setProperty('--font','250px');
msg.style.setProperty('--clr','aqua'); 
// off set height and off set width property . to know the height and width of a element we can use this methods 

let div = document.querySelector("div"); 

let height = div.offsetHeight;

let width= div.offsetWidth ;

console.log(height,  width);

// client height and client width . this method is similar like off set height and width 

let height1 = div.clientHeight;

let widht1 = div.clientWidth;

console.log(height1, widht1);  


// working with events  section 7 

// add event listener 

// let btn = document.querySelector('#btn');

btn.addEventListener('click' , function(event){

    alert("button") 

})   

// dom level 0 handeler   

let btn = document.querySelector('#btn');

btn.addEventListener('click' , function(event){

    alert(this.id) 

})  

// has atribute returns the true and false value only .

let a = document.getElementById('a');

console.log(a.hasAttribute('href')); 


// this massage is from dom 0 level handler 

let btn= document.getElementById('clicked');

btn.onclick=function(){
    alert('This massage is from dom 0 level handler')
}


// dom level 2 handler 

let dom2 = document.querySelector('#dom2');

dom2.addEventListener('click', function dom2(event){
    alert(' this code is injected by dom level 2 handler ')
});


function ctn1 (){
 
    
    document.querySelector('#ctn').innerHTML= Date(); 
}  

// dom content loaded method 

document.addEventListener('DOMContentLoaded', ()=>{

    alert('DOM CONTENT LOADER IS FULLY LOADED NOW YOU CAN ENTER')

})

// LOAD METHOD =  IT WILL EXICUTE THE JS CODE WHEN THE WEB PAGE WILL BE FULLY LAODED 

addEventListener('load', ()=>{
    alert('you web page is ready to view ')
})  


// before unload method 

addEventListener('beforeunload',(e)=>{

    e.preventDefault();
    e.returnValue='';
    
}) 

// unload method 

window.onunload = (event) => {
    alert('The page is unloaded');
}; 


// js mouse event 



let track = document.querySelector('#track');

// mouse down event 

track.addEventListener('mousedown', ()=>{
    console.log('mouse down');
})

// mouse up event 

track.addEventListener('mouseup', ()=>{
    console.log('mouse up')
});

// mouse click event 

track.addEventListener('click', ()=>{
    console.log('click')
})

// double mouse click event 

track.addEventListener('dblclick',()=>{
    alert('dblclick')
})

// mouse over

track.addEventListener('mouseover', ()=>{
    console.log('mouse over');
})

// mouse out 

track.addEventListener('mouseout',()=>{
    console.log('mouse out')
})

// mouse enter 

track.addEventListener('mouseenter', ()=>{
    console.log('mouse enter')

})

// mouse leave 

track.addEventListener('mouseleave', ()=>{
    console.log('mouse leave')
})

track.addEventListener('mousemove', ()=>{
    console.log('mouse move ')
}) 

// keyboard event 

let massage = document.querySelector('#massage');

function msgname(event){

    console.log(event.key) // if we use type method then we can show that how much time we type on keyboard . or we use key method then we can show which word we haved typed 

}



// key up event 
//massage.addEventListener('keyup',msgname);
// key down event
//massage.addEventListener('keydown',msgname);
// key press event 
massage.addEventListener('keypress',msgname); 

let ccg = document.querySelector('#ccg'); 

function btyn(){
    let btn = document.querySelector('#btn').innerHTML=Date();
}

let h1 = document.querySelector('h1'); 


// method for showing js addlistner text to html tag ;; 

const user = document.querySelector('#user');
const but = document.querySelector('#btn');
const ptag= document.querySelector('#out1');

function fun5(){
    ptag.innerHTML = user.value;

}

but.addEventListener('dblclick',fun5)

let user1 = document.querySelector('#user');
let ctag = document.querySelector('#out2');

function fun6 (){
    ctag.innerHTML=user1.value;
}

user1.addEventListener('keypress', fun6 );

// scroll event 

// window.onscroll = ()=>{
//     console.log('windows scrolled')
// }

// window.addEventListener('scroll', ()=>{
//    console.log('scrolled down')
// })

// focus and blur event 

// focus event 

let int = document.querySelector('#int');

int.addEventListener('focus',(e)=>{
    e.target.style.backgroundColor="red";
    e.target.style.color="yellow"
    
})

// blur event 

int.addEventListener('blur',(e)=>{
    e.target.style.backgroundColor="yellow";
    e.target.style.color="tomato"
    
})   

// hashchange event . whenever the loaction of files #like will change on that moment this method will start working 

let hash = document.querySelector('#hash');

window.addEventListener('hashchange',()=>{
    hash.innerHTML=window.location.hash.substring(1);

}) 

// js dom event daligation> if you have a large of event handler this method will do it with just a single event listner . 

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event)=>{
    let target = event.target;

    switch(target.id){
        case 'about':
        alert(' you just clicked about us ')
        break;

        case 'serv':
        alert('you just clicked services ')
        break;

        case 'lern':
        alert('you just clicked learn more ')
        break;

        default :
        alert('tyr again')
        break;

    }
}) 

// dispatch event > this dispatch event works automatically  . like you dont need to push a button to see the output 

let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
    alert('this is a dispatch event ')
 });


let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent); 

// custom event > with custom event we can create a custo event and dispatch it ..

let btn5 = document.querySelector('button');

let result = document.querySelector('h1');

btn5.addEventListener('click',()=>{

    let data = {
        name:"sultan" ,
        backgroundColor:"green", 
        color:'#fff'

    }

    mybuttontriger(data);

});

function mybuttontriger (data){
    let  myevent = new CustomEvent('details',{
        
        detail:data

    }) ;

    result.dispatchEvent(myevent)
}

result.addEventListener('details',(e)=>{

    let {name, backgroundColor,color}= e.detail;
    result.innerText= name;
    result.style.backgroundColor= backgroundColor;
    result.style.color = color;
});   

// we can do the same thing with a easier way using only add event listner > > 

let btn101 = document.querySelector('#btn101');

let drill = document.querySelector('#drill');

btn101.addEventListener('dblclick', ()=>{
    drill.innerHTML='$ULT@N';
    drill.style.backgroundColor="green";
    drill.style.color= 'black';
}); 

// short process of custom event

let btn5 = document.querySelector('button');

let result = document.querySelector('h1');

let data = {
    name:"sultan" ,
    backgroundColor:"green", 
    color:'#fff'

}

btn5.addEventListener('click',(e)=>{

    e.innerText=data;
    mybuttontriger(data);

});


function mybuttontriger (info){
    let  myevent = new CustomEvent('details',{
        
        detail:info

}) ;

   result.dispatchEvent(myevent);
} 

result.addEventListener('details',(e)=>{
    let {name, backgroundColor,color}= e.detail;
    result.innerText= name;
    result.style.backgroundColor= backgroundColor;
    result.style.color = color;
 }); 


// mutation observer syestem

let observer = new MutationObserver((data)=>{
      console.log(data[0]);
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData:true,
    attributes:true,
  });

function dlt (){
   document.querySelector('#menu').children[0].remove();

}

function dltinner (){
    document.querySelector('#otherdiv').children[0].remove();
 
}

function updivval (){
    document.querySelector('#menu').children[0].id='this';
 
} 

function updiv (){
    document.querySelector('#menu').children[0].innerHTML= "unkown div";
 
}  */

// section seven ended 

// setion 8 started 












    


















