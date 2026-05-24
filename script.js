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

// ── Interactive project modal ──
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTools = document.getElementById('modal-tools');
const modalBody = document.getElementById('modal-body');

const projects = {
  evlv1: {
    title: 'EV4 — Quadricycle Électrique (EVLV1)',
    tools: 'CATIA V5',
    body: `
      <h3>Contexte</h3>
      <p>Projet de BTS CPI portant sur la conception d'un quadricycle urbain électrique (EV4) en deux phases distinctes.</p>
      
      <h3>Phase 1 : Cahier des Charges & Spécifications</h3>
      <ul>
        <li><strong>Cadre fonctionnel</strong> : structure aluminium 2017, batterie 36V intégrée</li>
        <li><strong>Sécurité</strong> : freins hydrauliques 4 roues, resp. normes routières urbaines</li>
        <li><strong>Démontabilité</strong> : maintenance simplifié, remplacement des éléments critiques</li>
        <li><strong>Masse ciblée</strong> : légèreté pour usage urbain sans compromise rigidité</li>
      </ul>
      
      <h3>Phase 2 : Conception Détaillée du Bras Avant</h3>
      <ul>
        <li><strong>Module de pivotement</strong> : rotules D10, débattement angles optimisés</li>
        <li><strong>Solidité</strong> : simulation éléments finis, vérification charge dynamique</li>
        <li><strong>Cahier des charges F0</strong> : respect strict des tolérances de fabrication</li>
        <li><strong>Liaison sol</strong> : géométrie suspension, impact sur maniabilité</li>
      </ul>
      
      <h3>Résultats</h3>
      <p><strong>Livrable</strong> : prototype fonctionnel construit et testé sur piste. <strong>Validation</strong> : tests dynamiques conformes cahier des charges, prêt pour phase production.</p>
    `
  },
  tef: {
    title: 'Tour en Fosse — Jumeau numérique (TEF)',
    tools: 'Fusion 360 / SolidWorks',
    body: `
      <h3>Mission</h3>
      <p>Modélisation CAO intégrale du Tour en Fosse (machine historique du Technicentre Est Européen) pour créer un jumeau numérique industriel complet destiné à la supervision et la rénovation.</p>
      
      <h3>Étapes Clés</h3>
      <ul>
        <li><strong>Relevés terrain</strong> : scanner 3D, photogrammétrie, mesures manuelles</li>
        <li><strong>Rétro-conception</strong> : reconstruction CAO à partir des points nuage</li>
        <li><strong>Intégration BIM</strong> : environnement de travail, réseaux (électrique, hydraulique, air comprimé)</li>
        <li><strong>Préparation rénovation</strong> : identification points critiques, démontabilité</li>
      </ul>
      
      <h3>Spécificités</h3>
      <p>Machine de 40+ années d'âge, documentation incomplète ou manquante. <strong>Défi</strong> : recréer fidèlement une machine complexe sans plans d'usine. <strong>Résultat</strong> : maquette numérique 360° prête pour étude de rénovation et futur entretien préventif.</p>
    `
  },
  tmax: {
    title: 'Unité de coupe T-MAX P',
    tools: 'SolidWorks',
    body: `
      <h3>Objectif</h3>
      <p>Rétro-conception et optimisation complète de l'unité de coupe pour améliorer l'évacuation des copeaux en formation spiralée et réduire les arrêts machine.</p>
      
      <h3>Analyse Technologique</h3>
      <ul>
        <li><strong>Décomposition</strong> : arête de coupe, géométrie plaquette, porte-outil</li>
        <li><strong>Paramètres d'usinage</strong> : vitesse, avance, profondeur de passe</li>
        <li><strong>Formation copeaux</strong> : mécanique de rupture, spirale vs éclatement</li>
      </ul>
      
      <h3>Simulation & Optimisation</h3>
      <ul>
        <li>Modélisation CAO précise des dépouilles et faces de coupe</li>
        <li>Étude comparative : géométrie originale vs. modifications proposées</li>
        <li>Validation : tests usinage avec relevés copeaux</li>
      </ul>
      
      <h3>Livrables</h3>
      <p>Plans détaillés plaquette optimisée, paramètres usinage ajustés, rapport d'essais démontrant réduction temps d'arrêt machine de ~15%.</p>
    `
  },
  bogie: {
    title: 'Bogie TGV M — Assemblage 3D',
    tools: 'SolidWorks',
    body: `
      <h3>Contexte</h3>
      <p>Reproduction et intégration d'un bogie TGV M (composant critique de roulement) à partir de plans partiels et documentation fragmentée de la SNCF.</p>
      
      <h3>Défis Techniques</h3>
      <ul>
        <li><strong>Plans incomplets</strong> : absence de vues, détails dispersés dans archives</li>
        <li><strong>Gabarits</strong> : respect strict des encombrements de circulation en tunnel</li>
        <li><strong>Cinématique</strong> : ressorts de suspension, mouvements relatifs</li>
        <li><strong>Plan de chasse</strong> : géométrie essieu-rails, tolérances critiques</li>
      </ul>
      
      <h3>Méthodologie</h3>
      <p>Reconstitution progressive par sections : châssis → essieu → suspensions → équipements auxiliaires. Chaque assemblage validé contre gabarit dynamique TGV M.</p>
      
      <h3>Résultat</h3>
      <p>Modèle 3D complet prêt pour simulation dynamique ferroviaire et études de modernisation.</p>
    `
  },
  bim: {
    title: 'BIM & Supervision industrielle',
    tools: 'Fusion 360 / C++ / Blueprints Unreal',
    body: `
      <h3>Vision Globale</h3>
      <p>Intégration complète des machines du Technicentre Est Européen dans une maquette numérique haut-fidélité (BIM) couplée à un système de supervision temps réel des données de maintenance.</p>
      
      <h3>Composantes</h3>
      <ul>
        <li><strong>Modélisation BIM</strong> : environnement complet (bâtiments, machines, réseaux d'énergie)</li>
        <li><strong>Haut-fidélité géométrique</strong> : détails usinage, électronique, composants critiques</li>
        <li><strong>Intégration données</strong> : liaison avec système GMAO et capteurs IoT</li>
        <li><strong>Visualisation 3D immersive</strong> : navigation temps réel, filtrage machines</li>
      </ul>
      
      <h3>Technologie</h3>
      <p><strong>Backend</strong> : C++ pour acquisition données maintenance. <strong>Frontend</strong> : Unreal Engine Blueprints pour navigation 3D interactive et animation paramètres en direct.</p>
      
      <h3>Impact</h3>
      <p>Outil de diagnostic préventif, réduction panne imprévisible, optimisation planification maintenance prédictive.</p>
    `
  },
  proto: {
    title: 'Prototypage rapide & impression 3D',
    tools: 'Fusion 360 / Z-Suite / Cura / Creality Print',
    body: `
      <h3>Rôle</h3>
      <p>Admin FabLab du Technicentre : conception et production rapide de pièces de maintenance, boîtiers sur mesure et supports d'assemblage pour besoins urgents du site.</p>
      
      <h3>Workflow Typique</h3>
      <ul>
        <li><strong>Demande FabTrack</strong> : formulaire numérique depuis équipes maintenance</li>
        <li><strong>Conception rapide</strong> : modèle Fusion 360 en <2h, validation pour impression</li>
        <li><strong>Impression</strong> : choix matériau (TPU flexible, PLA rigide, ABS)</li>
        <li><strong>Validation terrain</strong> : test en situation, itération si nécessaire</li>
      </ul>
      
      <h3>Matériaux Maîtrisés</h3>
      <ul>
        <li><strong>TPU</strong> : pièces souples, joints, amortisseurs</li>
        <li><strong>PLA</strong> : supports, attaches, guides</li>
        <li><strong>ABS</strong> : résistance thermique, boîtiers électroniques</li>
      </ul>
      
      <h3>Gains Opérationnels</h3>
      <p>Délai <24h vs. plusieurs semaines avant impression 3D. Coût matière négligeable comparé à arrêt machine. Production >150 pièces depuis déploiement FabLab.</p>
    `
  }
};

function openProjectModal(id) {
  const p = projects[id];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalTools.textContent = `Outils : ${p.tools}`;
  modalBody.innerHTML = p.body;
  projectModal.classList.remove('hidden');
  projectModal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  projectModal.classList.add('hidden');
  projectModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const id = card.dataset.project;
    if (id) {
      e.preventDefault();
      openProjectModal(id);
    }
  });
});

// Prevent default anchor on EVLV1 detail link and open modal
document.querySelectorAll('.btn-expand').forEach(btn => btn.addEventListener('click', (e) => {
  e.preventDefault();
  const parent = e.target.closest('.project-card');
  const id = parent ? parent.dataset.project || 'evlv1' : 'evlv1';
  openProjectModal(id);
}));

// modal close handlers
document.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', closeProjectModal));
document.querySelectorAll('.project-modal-backdrop').forEach(b => b.addEventListener('click', closeProjectModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

// ════════════════════════════════════════════════════
// Experience Modal Functions
// ════════════════════════════════════════════════════

function openExpModal(expId) {
  const modal = document.getElementById('exp-' + expId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeExpModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Experience card click handlers
document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.btn-expand')) {
      e.preventDefault();
      const expId = card.dataset.experience;
      openExpModal(expId);
    }
  });
});

// Experience modal close handlers
document.querySelectorAll('.detail-modal').forEach(modal => {
  const backdrop = modal.querySelector('.detail-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.detail-modal.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }
});

// ════════════════════════════════════════════════════
// Education Modal Functions
// ════════════════════════════════════════════════════

function openEduModal(eduId) {
  const modal = document.getElementById(eduId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEduModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
