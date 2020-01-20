const btn = document.querySelector('.btn');
const hex = document.querySelector('.hex');
const body = document.querySelector('body');
const haxcode = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',chColor);

function chColor()
{
    haxcol = '#';

    for(let i=0;i<6;i++)
    {
        let random = Math.floor(Math.random()*haxcode.length);
        haxcol += haxcode[random];
    }
    body.style.backgroundColor = haxcol;
    hex.innerHTML = haxcol;
}