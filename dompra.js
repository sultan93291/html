/* let div = document.createElement('div');

div.id= "parent div "

let ul = document.createElement('ul');

let li = document.createElement('li');

li.textContent="hey this is just a drill and nothing . so don't worry everything will be fine in  shaa allah"

li.className= "listing"

ul.appendChild(li)

div.appendChild(ul);

document.body.appendChild(div);

let script = document.createElement('script');

script.src= "sultan";

document.body.appendChild(script); */

// this is a drill to made a tag multiple time

 let menu = document.querySelector('#menu');



function Callbackmenu(name){
    let li = document.createElement("li");
    li.className="id1"
    li.innerHTML= name;
    return li ;
 
}

menu.appendChild(Callbackmenu("Sultan"));
menu.appendChild(Callbackmenu("Ahmed"));
menu.appendChild(Callbackmenu("Sanjar")); 









