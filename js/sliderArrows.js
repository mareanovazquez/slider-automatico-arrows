let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}


function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Manejar las flechas izquierda y derecha
document.getElementById("prev").onclick = function () {
    plusSlides(-1);
};

document.getElementById("next").onclick = function () {
    plusSlides(1);
};

// Iniciar el carousel
function startCarousel() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(startCarousel, 4000); // Cambiar la imagen cada 4 segundos
}

startCarousel();
