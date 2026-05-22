let indexSlide = 1;
mostrarSlides(indexSlide);

function cambiarSlide(n) {
    mostrarSlides(indexSlide += n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) return; 

    if (n > slides.length) { indexSlide = 1 }    
    if (n < 1) { indexSlide = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[indexSlide-1].style.display = "block";  
}

setInterval(() => {
    cambiarSlide(1);
}, 5000);