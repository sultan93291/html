// scroller up and down function 

let scroller = 0 ; 

window.addEventListener('scroll', ()=>{

    let Newscroller = window.scrollYOffset || document.documentElement.scrollTop;
    if(Newscroller>scroller){
        console.log('scroll is down ')

    }

    else {
        console.log('scroll is up')
    }
    scroller = Newscroller;
})  