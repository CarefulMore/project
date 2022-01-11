/*const slides = document.querySelectorAll ('.slide')

for (const slide of slides) {
    slide.addEventListener ('click', () => {
        clearActiveClasses ()
        slide.classList.add ('active')
    })
}*/

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('.slide')

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = 'block'; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  
  }


/*function clearActiveClasses () {
    slides.forEach ((slide) => {
        slide.classList.remove ('active')
    })
}*/


