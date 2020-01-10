document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  var sitename = document.getElementById('siteName').value;
  var siteurl = document.getElementById('siteUrl').value;
  if(!validateForm(sitename,siteurl))
  {
    return false;
  }


  var bookmark = {
    name: sitename,
    url: siteurl
  }
  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }
  else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }
  document.getElementById('myForm').reset();
  fetchbookmarks();

  e.preventDefault();

}

function deleteBookmark(url){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for(var i=0;i<bookmarks.length;i++)
  {
    if(bookmarks[i].url == url)
    {
      bookmarks.splice(i,1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchbookmarks();

}

function fetchbookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmarkresult = document.getElementById('bookmarksResults');
  bookmarkresult.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarkresult.innerHTML += '<div class="well">' +
      '<h3>' + name +
      '<a class="btn btn-default" target="_blank" href="' + url + '">visit</a>' +
      '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +
      '</h3>' +
      '</div>';
      
  }
}

function validateForm(sitename,siteurl)
{
  if(!sitename || !siteurl)
  {
    alert('Please Fill in the Form');
    return false
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if(!siteurl.match(regex))
  {
    alert('Please enter velid url');
    return false;
  }

  return true;
}