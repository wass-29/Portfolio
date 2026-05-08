/* ══════════════════════════════════════════
   WASSIM SOUSSOU — Portfolio Script
   ══════════════════════════════════════════ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observeSection = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observeSection.observe(s));

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Close menu on link click
navLinks.forEach(a => a.addEventListener('click', () => {
  navList.classList.remove('open');
  hamburger.classList.remove('open');
}));

// ── Reveal on scroll ──
const revealEls = document.querySelectorAll(
  '.about-card, .skill-category, .soft-item, .soft-skills, ' +
  '.timeline-item, .project-card, .bts-card, .edu-card, ' +
  '.contact-text, .contact-form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Skill bars animation ──
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  if (entries.some(e => e.isIntersecting)) {
    skillFills.forEach(fill => {
      const w = fill.dataset.width;
      fill.style.width = w + '%';
    });
    skillObserver.disconnect();
  }
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ── Contact form ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';

  setTimeout(() => {
    btn.style.display = 'none';
    success.classList.remove('hidden');
    e.target.reset();
  }, 1200);
}

// ── Smooth scroll for Safari fallback ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Cursor glow on hero (subtle) ──
const heroSection = document.getElementById('hero');
const heroGlow = document.querySelector('.hero-glow');
if (heroSection && heroGlow) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroGlow.style.left = x + 'px';
    heroGlow.style.top = y + 'px';
    heroGlow.style.transform = 'translate(-50%, -50%)';
  });
  heroSection.addEventListener('mouseleave', () => {
    heroGlow.style.left = '50%';
    heroGlow.style.top = '20%';
    heroGlow.style.transform = 'translate(-50%, -50%)';
  });
}

// ── Hamburger animation ──
const style = document.createElement('style');
style.textContent = `
  .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
`;
document.head.appendChild(style);
