const categories = ['wedding', 'event', 'indoor', 'outdoor'];
const galleryColumns = [
  document.getElementById('col1'),
  document.getElementById('col2'),
  document.getElementById('col3'),
  document.getElementById('col4')
];

function loadGallery(category) {
  galleryColumns.forEach(col => col.innerHTML = ''); // Clear columns

  for (let i = 1; i <= 40; i++) {
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('gallery-image');
    
    // Add AOS attributes here
    imgWrapper.setAttribute('data-aos', 'zoom-in-up');
    imgWrapper.setAttribute('data-aos-duration', '600');
    imgWrapper.setAttribute('data-aos-offset', '100');
    imgWrapper.setAttribute('data-aos-easing', 'ease-in-out');
    // Add delay for staggered animations
    imgWrapper.setAttribute('data-aos-delay', `${(i % 6) * 100}`);

    const img = document.createElement('img');
    img.src = `images/${category}/${i}.webp`;
    img.alt = `${category} ${i}`;``
    img.loading = 'lazy'; // Add lazy loading
    imgWrapper.appendChild(img);
    galleryColumns[i % 4].appendChild(imgWrapper);
  }

  // Refresh AOS to detect new elements
  if (window.AOS) {
    AOS.refresh();
  }
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const category = link.dataset.category;
    loadGallery(category);
  });
});

// Scroll-activated parallax effect
const speeds = [0.001, 0.2, 0.3, 0.4]; // Different speeds for columns

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  galleryColumns.forEach((col, index) => {
    const speed = speeds[index];
    col.style.transform = `translateY(${ -scrollY * speed }px)`;
  });
});

// Load default gallery on page load
loadGallery('wedding');

document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const downloadBtn = document.getElementById('download-btn');
    const closeBtn = document.getElementById('close-lightbox');

    let galleryImages = [];
    let currentIndex = 0;

    function updateGalleryImages() {
        galleryImages = Array.from(document.querySelectorAll('#gallery img'));
    }

    function openLightbox(index) {
    updateGalleryImages();
    currentIndex = index;
    const imgSrc = galleryImages[currentIndex].src;
    lightboxImg.src = imgSrc;
    downloadBtn.href = imgSrc;
    lightbox.style.display = 'flex';
    
    // Save scroll position and lock body
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('lightbox-open');
}

function closeLightbox() {
    lightbox.style.display = 'none';
    
    // Restore scroll position
    const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
    document.body.classList.remove('lightbox-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
}

    // Delegate click event on gallery container to support dynamically loaded images
    document.getElementById('gallery').addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            updateGalleryImages();
            const index = galleryImages.indexOf(e.target);
            if (index !== -1) openLightbox(index);
        }
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Swipe Support
    let startX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    lightbox.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (Math.abs(diffX) > 50) {
            updateGalleryImages(); // Ensure we have the current images
            if (diffX < 0) {
                currentIndex = (currentIndex + 1) % galleryImages.length;
            } else {
                currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            }
            openLightbox(currentIndex);
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

    // OPTIONAL: If you dynamically load categories via AJAX or JS, call this AFTER images are added
    document.addEventListener('imagesUpdated', updateGalleryImages);
});