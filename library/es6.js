console.log("This is ES6 Version of library");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display   
{
    add(book)
{
    console.log("Adding Book");
    let tableBody = document.getElementById('tableBody');
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}
clear()
{
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
validate(book)
{
    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }
    else{
        return true;
    }
}
show(type,displayMessage)
{
    let message = document.getElementById('message');
    message.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>message :</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
    setTimeout(function () {
        message.innerHTML=''
    }, 2000);
}

}

//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log('You have submitted libraryForm');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let wt = document.getElementById('wt');
    let net = document.getElementById('net');
    let se = document.getElementById('se');

    if (wt.checked) {
        type = wt.value;
    }
    else if (net.checked) {
        type = net.value;
    }
    else if (se.checked) {
        type = se.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','your book has been successfully added');
    }
    else{
        display.show('danger','Sorry You Can not add this book');
    }

    e.preventDefault();

}
