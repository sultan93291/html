let myWindow;

const width = document.getElementById('width');
const height = document.getElementById('height');

const availw = document.getElementById('availw');
const availh = document.getElementById('availh');

const pixel = document.getElementById('pixeldepth');
const color = document.getElementById('colordepth');

const screens = document.getElementById('ss');
const avaialss = document.getElementById('availss');

// show window object property

width.innerHTML = `window inner width is ${window.innerWidth} `;
height.innerHTML = `windown inner height is ${window.innerHeight}`;

// function open and close window object

function openwin() {
  myWindow = window.open(
    'http://www.google.com',
    'myWindow',
    'width=600, height=400px, left=200, top=200px'
  );
}

function closwin() {
  myWindow.close();
}

// java script screen property
availw.innerHTML = `window inner available height ${screen.availWidth}`;
availh.innerHTML = `window inner available width ${screen.availHeight}`;
pixel.innerHTML = `window inner pixel ${screen.pixelDepth}`;
color.innerHTML = `window inner color ${screen.colorDepth}`;

// java script window  location object

const href = document.getElementById('href');
const hostname = document.getElementById('hostname');
const pathname = document.getElementById('pathname');
const protocol = document.getElementById('protocol');
const port = document.getElementById('port');

href.innerHTML = `window href ${location.href}`;
hostname.innerHTML = `window hostname ${location.hostname}`;
pathname.innerHTML = `window hostanem ${location.pathname}`;
protocol.innerHTML = `window protocol ${location.protocol}`;
port.innerHTML = `window prot ${location.port}`;

// js window history

function goForward() {
  window.history.forward();
}

function goBackward() {
  window.history.back();
}

// show windows . nagivator dollars object

let appName = document.getElementById('appName');

let appCodeName = document.getElementById('appCodeName');

let appVersion = document.getElementById('appVersion');

let platform = document.getElementById('platform');

let cookieEnabled = document.getElementById('cookieEnabled');

let userAgent = document.getElementById('userAgent');

let onLine = document.getElementById('onLine');

let javaEnabled = document.getElementById('javaEnabled');

appName.innerHTML = `nagivator app name : ${navigator.appName}`;

appCodeName.innerHTML = `nagivator app code name : ${navigator.appCodeName}`;

appVersion.innerHTML = `nagivator app version ${navigator.appVersion}`;

platform.innerHTML = `nagivator platform ${navigator.platform} `;

cookieEnabled.innerHTML = `nagiavtor  cookie enabled ${navigator.cookieEnabled}`;

userAgent.innerHTML = `nagivator useragent ${navigator.userAgent}`;

onLine.innerHTML = ` nagivator is online ${navigator.onLine} `;

javaEnabled.innerHTML = `nagivator is java enabled ${navigator.javaEnabled()}`;

// js pop up alert box

let Prompt = document.getElementById('Prompt');

let Confirm = document.getElementById('Confirm');

function showAlert() {
  alert('you clicked the alert button ');
}

function showConfirm() {
  let txt;

  if (window.confirm('press a button ')) {
    txt = 'you press okay  ';
  } else {
    txt = ' You cancel the confirm prompt  ';
  }

  Confirm.innerHTML = txt;
}

function showPrompt() {
  let person = window.prompt(`enter your name `, ` sultan `);

  let txt;

  if (person === null || person === '') {
    txt = 'You declined to Enter your name ';
  } else {
    txt = ` hello ${person} . How are you today  `;
  }

  Prompt.innerHTML = txt;
}

// js timing event

// timeout function

let timeout = document.getElementById('timeout');

let interval = document.getElementById('interval');

let sti;

function startTimeout() {
  sti = setTimeout(() => {
    timeout.innerHTML = `3 s gone `;
  }, 3000);
}

function stopTimeout() {
  clearTimeout(sti);
}

// interval function

let intervaltimeout;

function startInterval() {
  intervaltimeout = setInterval(() => {
    interval.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function stopInterval() {
  clearInterval(intervaltimeout);
}

// js cookies

function setCookie(cname, cvalue, cexpire) {
  const d = new Date();

  d.setTime(d.getDate() + cexpire * 24 * 60 * 60 * 1000);

  let expires = 'expires=' + d.toUTCString();

  document.cookie = cname + '=' + cvalue + ';' + 'expires' + ';path=/';
}

function setUser(uname, uvalue, uexpire) {
  const d = new Date();

  d.setTime(d.getDate() + uexpire * 24 * 60 * 60 * 1000);

  let expires = 'expires=' + d.toUTCString();

  document.cookie = uname + '=' + uvalue + ';' + 'expires' + ';path=/';
}

function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }

  return ' ';
}

function getUsercookie(uname) {
  let name = uname + '=';
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }

  return ' ';
}

/*
function checkCookie(cname, exdays) {
  let a = getCookie(cname);
  if (a != '') {
    alert(`welcoem agian ${a}`);
  } else {
    name = prompt('Enter your name :', '');
    if (name != '' && name != null) {
      setCookie(cname, name, exdays);
    }
  }
} */

function checkCookie() {
  let username = getCookie('username');
  if (username != '') {
    alert('Welcome Again' + username);
  } else {
    username = prompt(' Enter Your Age :', '');
    if (username != '' && age != null) {
      setCookie('username', username, 365);
    }
  }
}
