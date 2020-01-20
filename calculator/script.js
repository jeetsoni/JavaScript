const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equle = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

for(let i=0; i < btns.length; i++)
{
    btns[i].addEventListener('click',function()
    {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

equle.addEventListener('click', function(){
    let value = eval(screen.value);
    screen.value = value;
})

clear.addEventListener('click', function(){
    screen.value='';
})