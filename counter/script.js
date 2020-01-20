const addCount = document.querySelector('#HigherConuntBtn');
const lowCount = document.querySelector('#LowerConuntBtn');
const counter = document.querySelector('.counter');

let count = 0;

addCount.addEventListener('click',increment);
lowCount.addEventListener('click',decrement);


function increment()
{
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML === '0')
    {
        counter.style.color = 'white';
    }
    else if(counter.innerHTML > '0')
    {
        counter.style.color = 'green';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});
}

function decrement()
{
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML === '0')
    {
        counter.style.color = 'white';
    }
    else if(counter.innerHTML < '0')
    {
        counter.style.color = 'red';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});
}