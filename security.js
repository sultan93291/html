
/* const main = document.getElementById('main');

const externalHTML = `<img src='https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/313375691_837282984137651_4982099491483995326_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZmUft9Ll-h0j_MvNcLas6m2Dkj4zofbabYOSPjOh9tg_pCsGZMhgxJp2-KBZa_UPZWOM6xJCffSTypkccPPRU&_nc_ohc=-Nge7kPx04wAX9rYlJj&_nc_pt=1&_nc_ht=scontent.fdac8-1.fna&oh=00_AfBmdT5xgwgIkgfnAVTQUbBkTaR2KhC_Qgdp2XigwkblwQ&oe=63FCFE60' onerror='alert("Error loading image")'>`;
// shows the alert
main.innerHTML = externalHTML; */ 


/*  function Clickme(){

   document.getElementById('img').innerHTML= onerror ="alert ('please check your wifi modem') "


} */ 

// in inner html . if we have a child tag on it and if you want to make a new child tag  then when we will declare inner html befroe using = we have to use a + sign otherwise the previous code will be disapred . 

/* let main = document.getElementById('main');

main.innerHTML += ` <p id = "pid" > hey this is a inner html drill . let's check it out .  </p> ` */ 

let menu = document.querySelector('#menu');

function callbackmenu (name){
    let p= document.createElement('p');
    p.innerHTML= name;
    return p

}

menu.appendChild(callbackmenu("sultan"));
menu.appendChild(callbackmenu("ahmed"));



// js document fragment 

