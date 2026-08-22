const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
});

let currentProject = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;

document.querySelector('.arrow.left').addEventListener('click', () => {
  slides[currentProject].classList.remove('active');
  currentProject = (currentProject - 1 + totalSlides) % totalSlides;
  slides[currentProject].classList.add('active');
  updatePreview();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  slides[currentProject].classList.remove('active');
  currentProject = (currentProject + 1) % totalSlides;
  slides[currentProject].classList.add('active');
  updatePreview();
});

function updatePreview() {
  // Show/hide appropriate preview content
  document.querySelectorAll('.preview-content').forEach(el => el.style.display = 'none');
  const active = document.querySelector('.project-slide.active');
  active.querySelector('.preview-content').style.display = 'block';
}