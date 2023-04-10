/*const group = document.querySelector('.group');

const output = document.querySelector('.output');

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

group.innerHTML=sizes.map((size)=>

    `<div >

    <input type="radio" id="${size}" value="${size}" id="${size}" name="size">
    <label for="${size}">${size}</label>

    </div> ` 
).join(' ')


    const RadioButton = document.querySelectorAll('input');


    for(const radiobtn of RadioButton){
        radiobtn.addEventListener('change', showoutput )
    }
    
    function showoutput(e){
    
        console.log(e)
    
        if(this.checked){
    
         output.innerHTML=` You Have Selected ${this.value} `
    
        }
    
    };
    
    const int = document.querySelector('#int');
    
    const out1 = document.querySelector('#out1');
    
    
    int.addEventListener('keypress', ()=>{
        out1.innerHTML=int.value
    }) 
    




// check box dom 


const bnt = document.querySelector('#bnt');

bnt.addEventListener('click', (e)=>{
    let checkebox = document.querySelectorAll("input[name='color']:checked");

    let values = [];

    checkebox.forEach((checkebox)=>{
        values.push(checkebox.value)
    })


    alert(`Your Favourite Color is ${values} `);

});

let time = document.querySelector('#time');

let timeout= document.querySelector('#timeout');

time.addEventListener('click', ()=>{

    timeout.innerHTML=Date();

})


// web forms js dom section 8


const sle = document.querySelector('#lang');

const bbt = document.querySelector('#sub');

bbt.onclick = (e)=>{
    e.preventDefault();

    const optionsValue = [].filter
    .call(sle.options,(option)=>option.selected)
    .map((option)=>option.text);

    alert(`Hey You Have Selected ${optionsValue}`)

    
} */ 

// js dom dynamically add or remove options 

const framework = document.querySelector('#framework');
const add = document.querySelector('#add');
const select = document.querySelector('#select');
const remove =document.querySelector('#rmvbtn');

add.onclick = (e)=>{

  e.preventDefault();

  if(framework.value== ""){
    alert('Please Enter a Language ')
  }

  const option = new Option (framework.value,framework.value);

  select.add(option,undefined)

  framework.value= "";

  framework.focus();

}

remove.onclick= (e)=>{

  e.preventDefault();

  let selected = [];

  for (let i = 0 ;i < select.options.length; i++){
    selected[i]= select.options[i].selected;

  }

  let index = select.options.length;

  while(index--){

    if(selected[index]){
      select.remove(index);
    }

  }

};

// remove item from select option 


let alphabet = document.querySelector('#Alphabet');

let rrm = document.querySelector('#rm')


rrm.addEventListener('click', ()=>{

  let indices = []

for(let i=0; i<alphabet.options.length;i++){
  const value = alphabet.options[i].value;
  if(value==='b'|| value==='c'){
    alphabet.remove(i);

    i--

  }
}


});

let listbox = document.querySelector('#frame');
let rmvbtn1 = document.querySelector('#rv1')



rmvbtn1.addEventListener('click',()=>{
  
  for(let i= 0 ; i<listbox.options.length; i++){
    const text = listbox.options[i].text;

    if(text.endsWith('js')){
      listbox.remove(i)

     

      i--
    }

  }

});

// js change events 

let ints = document.querySelector('#intt');
let paragraph = document.querySelector('#opt');
let submit = document.querySelector('#btt');

ints.addEventListener('change',()=>{
  paragraph.innerHTML=ints.value
});


// handiling input events =>


const massage = document.querySelector('#intu');

const output= document.querySelector('#output');



massage.addEventListener('input',()=>{

  output.innerHTML=massage.value;


});







 

