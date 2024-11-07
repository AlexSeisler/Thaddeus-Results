// document.write("hello world");

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlide');

    for (i = 0; i <slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;

        //loop back to first slide 
    if (slideIndex > slides.length) { slideIndex = 1}

    //show the current slide with a fade in effect
    slides[slideIndex-1].style.display = 'block';
    slides[slideIndex -1].style.opacity = '1';

    //change slides every 5 seconds
    setTimeout(showSlides, 5000);
   
}