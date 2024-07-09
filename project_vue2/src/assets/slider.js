let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.cart');
  const totalSlides = slides.length;
  const visibleSlides = 3;

  if (index >= totalSlides - visibleSlides) {
    currentIndex = totalSlides - visibleSlides;
  } else if (index < 0) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 33.33;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function ileri() {
  showSlide(currentIndex + 1);
}

function geri() {
  showSlide(currentIndex - 1);
}

// İlk slide'ı göster
showSlide(currentIndex);