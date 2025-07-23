// Lazy Load Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Load the image
          img.classList.add('fade-in'); // Optional: Add animation
          observer.unobserve(img); // Stop observing after load
        }
      });
    });
  
    lazyImages.forEach(img => observer.observe(img));
  });