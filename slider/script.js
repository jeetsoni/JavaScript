const nextbtn = document.querySelector('.nextBtn');
const prevbtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

 let counter = 0;

 nextbtn.addEventListener('click',nextSlide);
 prevbtn.addEventListener('click',prevSlide);


 function nextSlide()
 {
     container.animate([{opacity:'0.1'},{opacity:1.0}],
     {duration:1000,fill:'forwards'});
     if(counter === 4)
     {
         counter = -1;
     }
     counter++;

     container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;


 }
 function prevSlide()
 {
    container.animate([{opacity:'0.1'},{opacity:1.0}],
    {duration:1000,fill:'forwards'});
     if(counter === 0)
     {
         counter = 5;
     }
     counter--;

     container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;


 }