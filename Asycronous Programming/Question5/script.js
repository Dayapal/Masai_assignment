// Get references to the HTML elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const startStopBtn = document.getElementById('startStopBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
let autoSlide = true;
let slideInterval;

// Function to show the current slide
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Function to start or stop the automatic slideshow
function startStopSlide() {
  autoSlide = !autoSlide;
  if (autoSlide) {
    startStopBtn.textContent = 'Stop';
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  } else {
    startStopBtn.textContent = 'Start';
    clearInterval(slideInterval);
  }
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  autoSlide = false;
  prevSlide();
});

startStopBtn.addEventListener('click', startStopSlide);

nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  autoSlide = false;
  nextSlide();
});

// Show the initial slide
showSlide();
