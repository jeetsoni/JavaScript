const quotes = [
    {
        name:'Authoer 1',
        quote:'Quote 1'
    },
    {
        name:'Authoer 2',
        quote:'Quote 2'
    },
    {
        name:'Authoer 3',
        quote:'Quote 3'
    },
    {
        name:'Authoer 4',
        quote:'Quote 4'
    },
    {
        name:'Authoer 5',
        quote:'Quote 5'
    },
    {
        name:'Authoer 6',
        quote:'Quote 6'
    },

]

const btn = document.querySelector('#btn');
const quote = document.querySelector('#quote');
const quoteauthor = document.querySelector('#quoteAuthor');

btn.addEventListener('click',genquote);

function genquote()
{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[random].quote;
    quoteauthor.innerHTML = quotes[random].name;
}