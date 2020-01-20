const btn = document.querySelector('#btn');
const  messagein = document.querySelector('#messageIn');
const  messageOut = document.querySelector('#messageOut');

btn.addEventListener('click',sendMsg);

function sendMsg()
{
    let content = messagein.value;
    if(content === '')
    {
        alert('please enter valid value');
    }
    else{
        messageOut.innerHTML = content;
        messagein.value = '';
    }
}