function showTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session= 'AM'

    if(h==0){
        h=12;
    }

    if (h>12){
        h=h-12;
        session='PM'
    }
    h=(h<10) ? '0' +h:h;
    m=(m<10) ? '0' +m:m;
    s=(s<10) ? '0' +s:s;

    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText =s;
    document.getElementById('session').innerText =session;
    document.getElementById('date').innerText =date.toDateString();

    setTimeout(showTime ,1000)
        
    
}

showTime()