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
