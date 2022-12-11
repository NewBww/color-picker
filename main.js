/*
Created by WebStorm.
    User: newbww
    Date: 12/12/2022 AD
    Time: 01:47
To change this template use File | Settings | File Templates.
*/

let screenLog = document.querySelector('#screen-log');
const maxWidth = window.screen.availWidth;
const maxHeight = window.screen.availHeight;
let colorCode;
document.addEventListener('mousemove', logKey);
function logKey(e) {
    screenLog.innerText = `X/Y: ${e.clientX}, ${e.clientY}`;
    colorCode = `hsl(${Math.round((e.clientY/maxHeight)*360)}, ${Math.round(50+(1-e.clientX/maxWidth)*50)}%, 67%)`
    document.body.style.backgroundColor = colorCode
}
document.addEventListener('click', alertListener)
function alertListener(e) {
    alert(colorCode)
}
