// Wait until all HTML is parsed before attaching behavior.
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-links a");
  const backToTopBtn = document.getElementById("backToTop");
  const yearSpan = document.getElementById("year");
  const typedText = document.getElementById("typed-text");

  // Hide loader shortly after page is fully loaded for a smooth reveal.
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 500);
  });

  // Insert current year into footer automatically.
  yearSpan.textContent = new Date().getFullYear();

  // Mobile menu toggle with icon animation.
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Smooth scroll and close mobile menu after clicking any nav link.
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight active navigation link based on current section in viewport.
  const sections = document.querySelectorAll("main section[id]");
  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (!navLink) {
        return;
      }

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((n) => n.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  };

  // Typing effect for hero section role text.
  const words = ["Software Developer", "Web Developer", "UI-Focused Engineer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];
    const displayedText = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    typedText.textContent = displayedText;

    let speed = isDeleting ? 45 : 95;

    if (!isDeleting && charIndex === currentWord.length + 1) {
      speed = 1200;
      isDeleting = true;
    } else if (isDeleting && charIndex === -1) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 260;
    }

    setTimeout(type, speed);
  };
  type();

  // Scroll reveal animations using Intersection Observer for performance.
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Animate skill bars once the skills area enters view.
  const skillFills = document.querySelectorAll(".skill-fill");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = `${fill.dataset.level}%`;
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.6 }
  );

  skillFills.forEach((fill) => skillObserver.observe(fill));

  // Parallax movement on hero floating shapes for subtle depth.
  const heroShapes = document.querySelector(".hero-shapes");
  window.addEventListener("scroll", () => {
    const offset = window.scrollY;

    if (heroShapes) {
      heroShapes.style.transform = `translateY(${offset * 0.12}px)`;
    }

    // Toggle back-to-top button based on scroll distance.
    backToTopBtn.classList.toggle("show", offset > 500);

    updateActiveLink();
  });

  // Back-to-top smooth scroll action.
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Contact form validation rules.
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  // Check email with a common and practical regex pattern.
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const setError = (input, errorElement, message) => {
    errorElement.textContent = message;
    input.classList.toggle("invalid", Boolean(message));
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    setError(nameInput, nameError, "");
    setError(emailInput, emailError, "");
    setError(messageInput, messageError, "");
    formSuccess.textContent = "";

    if (nameInput.value.trim().length < 2) {
      setError(nameInput, nameError, "Please enter your name.");
      valid = false;
    }

    if (!isValidEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, "Please enter a valid email address.");
      valid = false;
    }

    if (messageInput.value.trim().length < 10) {
      setError(messageInput, messageError, "Message should be at least 10 characters.");
      valid = false;
    }

    if (valid) {
      formSuccess.textContent = "Thanks! Your message has been validated successfully.";
      form.reset();
    }
  });

  // Initial active link setup on first render.
  updateActiveLink();
});