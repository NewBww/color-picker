/*
Created by WebStorm.
    User: newbww
    Date: 12/12/2022 AD
    Time: 01:47
To change this template use File | Settings | File Templates.
*/

const screenLog = document.querySelector('#screen-log');
const maxWidth = window.screen.availWidth;
const maxHeight = window.screen.availHeight;
let colorCode;

// Try Modify This
const MIN_SATURATION = 50;
const LUMINANCE = 67;

function logKey(e) {
    screenLog.innerText = `X/Y: ${e.clientX}, ${e.clientY}`;
    colorCode = `hsl(${Math.round((e.clientY/maxHeight)*360)}, 
    ${Math.round(MIN_SATURATION+(1-e.clientX/maxWidth)*(100-MIN_SATURATION))}%, ${LUMINANCE}%)`
    document.body.style.backgroundColor = colorCode
}

document.addEventListener('mousemove', logKey);
document.addEventListener('click', () => {alert(colorCode)})
