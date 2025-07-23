document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const checkbox = document.querySelector('.hamburger input');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  // Toggle menu function
  function toggleMenu(isOpening) {
    const wasChecked = checkbox.checked;
    checkbox.checked = typeof isOpening === 'boolean' ? isOpening : !wasChecked;
    
    // Sync menu state with checkbox
    if (checkbox.checked) {
      mobileNav.style.transform = 'translateY(0)';
      body.classList.add('no-scroll');
    } else {
      mobileNav.style.transform = 'translateY(-100%)';
      body.classList.remove('no-scroll');
    }
  }

  // Hamburger click handler
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close menu when clicking nav links
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu(false);
      // Add actual navigation logic here
    });
  });

  // Touch device support
  document.addEventListener('touchstart', (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(false);
    }
  });
});


// Enhanced circle movement on mouse move
document.addEventListener('mousemove', (e) => {
  const card = document.querySelector('.card-container');
  const rect = card.getBoundingClientRect();
  
  // Only move circles when mouse is over the card
  if (e.clientX >= rect.left && e.clientX <= rect.right && 
      e.clientY >= rect.top && e.clientY <= rect.bottom) {
    const circle = document.querySelector('.circle');
    const circle2 = document.querySelector('.circle-2');
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    if (circle) {
      circle.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px) scale(1.05)`;
    }
    
    if (circle2) {
      circle2.style.transform = `translate(${-(x * 20 - 10)}px, ${-(y * 20 - 10)}px) scale(1.05)`;
    }
  }
});

// SERVICES SECTION
// Card hover effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('card-highlighted')) {
            this.style.transform = 'translateY(0)';
        } else {
            this.style.transform = 'scale(1.03)';
        }
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

//TRUST SECTION
 // Project counter animation
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString() + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Fade-in animation on scroll
function setupFadeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                
                // Start counter animation when the project counter comes into view
                if (entry.target.id === 'project-counter') {
                    animateCounter(entry.target, 0, 850, 2000);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    setupFadeAnimations();
});