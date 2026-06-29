document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Sticky Header Scroll Effect
  // ==========================================
  const header = document.querySelector('.navbar-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. Mobile Navigation Menu Toggle
  // ==========================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  };

  mobileToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Close menu if open on mobile
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // ==========================================
  // 3. Testimonial Slider
  // ==========================================
  const slides = document.querySelectorAll('.testimonial-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let currentSlide = 0;
  let slideInterval;

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  // Click controls
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetSlideTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetSlideTimer();
  });

  // Indicator dots click
  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.getAttribute('data-slide'));
      showSlide(slideIndex);
      resetSlideTimer();
    });
  });

  // Auto-play interval
  const startSlideTimer = () => {
    slideInterval = setInterval(nextSlide, 6000);
  };

  const resetSlideTimer = () => {
    clearInterval(slideInterval);
    startSlideTimer();
  };

  // Start slider auto-play
  startSlideTimer();

  // Pause on hover
  const carouselContainer = document.querySelector('.testimonial-carousel');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carouselContainer.addEventListener('mouseleave', startSlideTimer);


  // ==========================================
  // 4. Stats Counter Animation on Scroll
  // ==========================================
  const statsSection = document.querySelector('.stats-section');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const decimals = parseInt(stat.getAttribute('data-decimals')) || 0;
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();
      
      const updateNumber = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        
        let value = easeProgress * target;
        
        // Format based on standard values (comma separators)
        if (decimals > 0) {
          stat.textContent = value.toFixed(decimals) + '%';
        } else {
          // If 50000 -> format as 50,000+
          let formattedValue = Math.floor(value).toLocaleString();
          if (target === 50000 || target === 3000 || target === 500) {
            stat.textContent = formattedValue + '+';
          } else if (target === 100) {
            stat.textContent = formattedValue + '%';
          } else {
            stat.textContent = formattedValue;
          }
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          // Set exact target at the end
          if (decimals > 0) {
            stat.textContent = target.toFixed(decimals) + '%';
          } else {
            let formattedValue = target.toLocaleString();
            stat.textContent = (target === 50000 || target === 3000 || target === 500) ? formattedValue + '+' : (target === 100 ? formattedValue + '%' : formattedValue);
          }
        }
      };

      requestAnimationFrame(updateNumber);
    });
  };

  // Setup Intersection Observer
  if ('IntersectionObserver' in window && statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  } else {
    // Fallback if IntersectionObserver is not supported
    animateCounters();
  }

  // ==========================================
  // 5. Interactive Dropdown/Accordion Toggles
  // ==========================================
  
  // Feature Suite Toggles
  const featureCards = document.querySelectorAll('.feature-suite-card');
  featureCards.forEach(card => {
    const toggleBtn = card.querySelector('.btn-toggle-features');
    const header = card.querySelector('.feature-suite-header');
    
    const toggleActive = (e) => {
      e.stopPropagation();
      const isActive = card.classList.contains('active');
      
      // Close all feature cards
      featureCards.forEach(c => c.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        card.classList.add('active');
      }
    };

    if (toggleBtn) toggleBtn.addEventListener('click', toggleActive);
    if (header) header.addEventListener('click', toggleActive);
  });

  // Module Details Toggles
  const moduleCards = document.querySelectorAll('.module-card-v2');
  moduleCards.forEach(card => {
    const toggleBtn = card.querySelector('.btn-module-details');
    
    const toggleActive = (e) => {
      e.stopPropagation();
      const isActive = card.classList.contains('active');
      
      // Close all module cards
      moduleCards.forEach(c => c.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        card.classList.add('active');
      }
    };

    if (toggleBtn) toggleBtn.addEventListener('click', toggleActive);
    card.addEventListener('click', toggleActive);
  });

  // Navbar Dropdown Link Smooth Scroll & Auto Expand
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const featureKey = link.getAttribute('data-feature');
      const moduleKey = link.getAttribute('data-module');
      
      // Close mobile menu if open
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }

      // Close all mobile open dropdowns
      document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        
        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Auto expand card
        if (featureKey) {
          const targetCard = document.getElementById(`feat-${featureKey}`);
          if (targetCard) {
            setTimeout(() => {
              featureCards.forEach(c => c.classList.remove('active'));
              targetCard.classList.add('active');
            }, 500);
          }
        }
        
        if (moduleKey) {
          const targetCard = document.getElementById(`mod-${moduleKey}`);
          if (targetCard) {
            setTimeout(() => {
              moduleCards.forEach(c => c.classList.remove('active'));
              targetCard.classList.add('active');
            }, 500);
          }
        }
      }
    });
  });

  // Mobile Nav Dropdown Toggle Click Listener
  const mobileDropdowns = document.querySelectorAll('.has-dropdown');
  mobileDropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
      }
    });
  });

});
