/* ══════════════════════════════════════════
   WASSIM SOUSSOU — Portfolio Script
   ══════════════════════════════════════════ */

// ── Theme toggle ──
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  body.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('data-active', theme === 'light' ? 'light' : 'dark');
    themeToggle.classList.toggle('active', theme === 'light');
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  }
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
function updateActiveSection() {
  const marker = window.innerHeight * 0.38;
  let activeSection = sections[0];

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= marker && rect.bottom > marker) {
      activeSection = section;
    }
  });

  navLinks.forEach(a => a.classList.remove('active'));
  const active = activeSection
    ? document.querySelector(`.nav-links a[href="#${activeSection.id}"]`)
    : null;
  if (active) active.classList.add('active');
}

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

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
  '.project-card, .bts-card, .edu-card, ' +
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
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');
  const formData = new FormData(form);

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';

  // Submit to Formspree
  fetch('https://formspree.io/f/xyzgwvlr', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      btn.style.display = 'none';
      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        btn.style.display = '';
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
        btn.disabled = false;
        success.classList.add('hidden');
      }, 4000);
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  })
  .catch(error => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Erreur d\'envoi';
    console.error('Erreur:', error);
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
    }, 3000);
  });
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
    title: 'Tour en Fosse — Numérisation & Innovation',
    tools: 'Fusion 360 / SolidWorks / BIM',
    body: `
      <h3>Contexte</h3>
      <p>Mission TEF : numérisation du Tour en Fosse, machine de reprofilage des essieux, pour produire une maquette 3D exploitable en rénovation et maintenance.</p>

      <h3>Relevés terrain & documentation</h3>
      <p>Étude sur site avec plans partiels et sources historiques. Reconstitution CAO à partir de mesures manuelles, photos et retours des agents du technicentre.</p>

      <h3>Intégration BIM</h3>
      <ul>
        <li>Modélisation du bâti, des réseaux électriques, hydrauliques et pneumatiques</li>
        <li>Réintégration des gabarits et dégagements d'accès pour maintenance</li>
        <li>Gestion des interfaces homme-machine et flux de circulation</li>
      </ul>

      <h3>Objectif</h3>
      <p>Fournir un jumeau numérique fiable pour audits de rénovation, études de maintenance préventive et préparation d'interventions sur site.</p>

      <h3>Résultat</h3>
      <p>Maquette 3D prête à être utilisée pour analyse des points critiques, optimisation d'interventions et gestion des opérations SST sur le TEE.</p>
    `
  },
  sablage: {
    title: 'Mission SNCF — Sablage SST',
    tools: 'Fusion 360 / Impression 3D / TPU',
    body: `
      <h3>Contexte SNCF</h3>
      <p>Mission sur site SNCF : réduire l'exposition aux poussières de silice lors du remplissage des sablières de rames TGV en zone de maintenance.</p>

      <h3>Solution proposée</h3>
      <ul>
        <li>Conception d'un embout adaptatif pour atelier de sablage</li>
        <li>Utilisation de TPU pour assurer étanchéité, flexibilité et résistance mécanique</li>
        <li>Validation d'usage en conditions réelles avec ajustement de la forme et du serrage</li>
      </ul>

      <h3>Points-clés</h3>
      <p>Protection des opérateurs, réduction des rejets de poussières, conservation de l'étanchéité pendant le transport du matériau.</p>

      <h3>Résultat</h3>
      <p>Prototype opérationnel pour le site SNCF avec un dispositif de sécurité renforcé, qui limite les risques SST liés au silice et améliore la fiabilité des opérations de sablage.</p>
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

const projectImages = {
  evlv1: [
    'assets/projects/evlv1/Evlv1 1.PNG',
    'assets/projects/evlv1/Evlv1 2.PNG',
    'assets/projects/evlv1/Evlv1 3.PNG',
    'assets/projects/evlv1/Evlv1 vue bras avant.PNG'
  ],
  tef: [
    "assets/projects/tef/ecran de machine de mise en route du profilage des roues d'essieux trains.jpeg"
  ],
  proto: [
    'assets/projects/proto/cone tp rangée à sa base.jpg',
    'assets/projects/proto/pistolet sable .jpg',
    'assets/projects/proto/résultat après impression 3D du cone.jpg',
    "assets/projects/proto/pistolet sable assemblé avec le cone tpu dans l'orifice tu tgv résultat.jpg",
    'assets/projects/proto/contexte pistolet sable dans orifice tgv sans cone tpu (création nuage de poussière de silice).png'
  ],
  tmax: [
    'assets/projects/tmax/tmac cao isométrie.png',
    'assets/projects/tmax/tmax cao de profil.png',
    'assets/projects/tmax/plaquette de tournage.jpeg',
    'assets/projects/tmax/Tmax sur terrain.jpeg'
  ],
  bogie: [
    'assets/projects/bogie/résulatat bref de la bogie CAO.png',
    "assets/projects/bogie/préparation du profilage d'essieu (vue de dessous).jpeg",
    'assets/projects/bogie/zoom essieu usure de la bogie usée.jpeg',
    'assets/projects/bogie/bogie usée.jpeg'
  ],
  bim: [
    'assets/projects/bim/Bim CAO vue de dessus.png',
    'assets/projects/bim/bim CAO 1.png',
    'assets/projects/bim/bim CAO 2.png',
    'assets/projects/bim/bim CAO 3.png',
    'assets/projects/bim/bim CAO 4.png'
  ]
};

const detailGalleryImages = {
  'exp-sncf-current': [
    "assets/experience/sncf-current/à l'interrieur du TEE .jpeg",
    'assets/experience/sncf-current/mon bureau au travail.jpeg'
  ],
  'exp-sncf-stage': [
    'assets/experience/sncf-stage/vue de la voie du tour en fosse.jpeg',
    "assets/experience/sncf-stage/vue d'un agent qui vérifie les cotes après reprofilage de roues.jpeg",
    "assets/experience/sncf-stage/vue d'un TGV M (rame d'essai).jpeg",
    'assets/experience/sncf-stage/amas de copeaux de matière après reprofilage de roues au Tef.jpeg',
    'assets/experience/sncf-stage/vue sur les rames du techicentre est européen.jpeg'
  ],
  'exp-bafa': [
    'assets/experience/bafa/moi avec les enfant derrière .png',
    'assets/experience/bafa/moi avec quelques enfants en arrière plan.jpeg',
    'assets/experience/bafa/vue de la tour eiffeil à la journée de vacance de ouf avec le centre.jpeg'
  ],
  'exp-serveur': [
    'assets/experience/serveur/logo saveur et passion.jpeg',
    'assets/experience/serveur/vue du marché au centre.jpeg',
    'assets/experience/serveur/vue du marché côté gauche.jpeg',
    'assets/experience/serveur/vue du marché côté gauche (entrée).jpeg',
    'assets/experience/serveur/vue du marché en face.jpeg'
  ],
  'exp-aeronautique': [
    'assets/experience/aeronautique/première impression de CATIA au bureau de BL.PO.jpeg',
    'assets/experience/aeronautique/moi au commande de l\'A380.jpeg',
    'assets/experience/aeronautique/A380.jpeg',
    'assets/experience/aeronautique/reacteur en réparation.jpeg',
    'assets/experience/aeronautique/vue des réacteur en décompasition.jpeg',
    'assets/experience/aeronautique/Avion au zephyr.jpeg'
  ],
  'edu-cesi': [
    'assets/education/cesi/cesi vue.jpg',
    'assets/education/cesi/maquette de grus à plsieurs degrès de liberté du projet 0.jpeg'
  ],
  'edu-bts': [
    'assets/education/bts/Voillaume.jpg'
  ],
  'edu-bac': [
    'assets/education/bac/Encpb 1.jpg',
    "assets/education/bac/vue du 15e etage du batiment de l'école.jpeg"
  ]
};

function renderProjectAlbum(id) {
  const modalGrid = document.getElementById('modal-album-grid');
  const images = projectImages[id] || [];
  
  // Check if project has 3D model
  if (id === 'proto') {
    const viewerId = `viewer-3d-${id}`;
    modalGrid.innerHTML = `
      <div class="modal-album-slot full-width">
        <div class="album-content">
          <div id="${viewerId}" class="obj-viewer"></div>
        </div>
      </div>
    `;
    
    // Add images after 3D viewer if they exist
    if (images.length > 0) {
      images.forEach((src) => {
        const slot = document.createElement('div');
        slot.className = 'modal-album-slot';
        slot.innerHTML = `
          <div class="album-content">
            <img src="${encodeURI(src)}" alt="Projet ${id}" />
          </div>
        `;
        modalGrid.appendChild(slot);
      });
    }
    
    // Initialize 3D viewer after DOM is ready
    setTimeout(() => {
      init3DViewer(viewerId, id);
    }, 100);
  } else if (images.length === 0) {
    modalGrid.innerHTML = `
      <div class="modal-album-slot">
        <div class="album-content">
          <div class="modal-album-note">Aucune image disponible dans assets/projects/${id}/</div>
        </div>
      </div>`;
  } else {
    modalGrid.innerHTML = images.map((src) => `
      <div class="modal-album-slot">
        <div class="album-content">
          <img src="${encodeURI(src)}" alt="Projet ${id}" />
        </div>
      </div>
    `).join('');
  }
}

function renderDetailGallery(modal) {
  const grid = modal.querySelector('.modal-album-grid');
  if (!grid) return;
  const images = detailGalleryImages[modal.id] || [];
  if (images.length === 0) {
    grid.innerHTML = `
      <div class="modal-album-slot">
        <div class="album-content">
          <div class="modal-album-note">Aucune image disponible pour ${modal.id}.</div>
        </div>
      </div>`;
    return;
  }
  grid.innerHTML = images.map((src) => `
    <div class="modal-album-slot">
      <div class="album-content">
        <img src="${encodeURI(src)}" alt="${modal.id}" />
      </div>
    </div>
  `).join('');
}

function openProjectModal(id) {
  const p = projects[id];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalTools.textContent = `Outils : ${p.tools}`;
  modalBody.innerHTML = p.body;
  renderProjectAlbum(id);
  projectModal.classList.remove('hidden');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openExpModal(expId) {
  const modal = document.getElementById('exp-' + expId);
  if (modal) {
    renderDetailGallery(modal);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openEduModal(eduId) {
  const modal = document.getElementById(eduId);
  if (modal) {
    renderDetailGallery(modal);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  // Cleanup 3D viewers
  Object.keys(objViewers).forEach(key => {
    const viewer = objViewers[key];
    if (viewer && viewer.renderer) {
      viewer.renderer.dispose();
      const container = document.getElementById(key);
      if (container) container.innerHTML = '';
    }
  });
  objViewers = {};
  
  projectModal.classList.add('hidden');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
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

document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const expId = card.dataset.experience;
    if (expId) {
      e.preventDefault();
      openExpModal(expId);
    }
  });
});

// Prevent default anchor on project detail links and open the correct modal
document.querySelectorAll('.btn-expand').forEach(btn => btn.addEventListener('click', (e) => {
  e.preventDefault();
  const projectParent = e.target.closest('.project-card');
  if (projectParent) {
    openProjectModal(projectParent.dataset.project || 'evlv1');
  }
}));

// modal close handlers
document.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', closeProjectModal));
document.querySelectorAll('.project-modal-backdrop').forEach(b => b.addEventListener('click', closeProjectModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

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
// Education Modal Close
// ════════════════════════════════════════════════════

function closeEduModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Ensure detail-modal close buttons always close the modal (robust handler)
document.querySelectorAll('.detail-close-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const modal = btn.closest('.detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
let currentModalImages = []; // Track images from current modal only

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = 'auto';
}

// Delegate clicks on modal album grids
document.addEventListener('click', (e) => {
  const img = e.target.closest('.modal-album-slot img');
  if (img) {
    // Capture all images from the same modal/album grid
    const albumGrid = img.closest('.modal-album-grid');
    if (albumGrid) {
      currentModalImages = Array.from(albumGrid.querySelectorAll('img'));
    }
    openLightbox(img.src, img.alt);
  }
});

// Lightbox handlers
document.querySelectorAll('.lightbox-backdrop, .lightbox-close').forEach(el => {
  el.addEventListener('click', closeLightbox);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    return;
  }
  
  // Keyboard navigation for lightbox: left/right arrows (only modal images)
  if (!lightbox || lightbox.classList.contains('hidden')) return;
  if (currentModalImages.length === 0) return;
  
  let currentIndex = -1;
  currentModalImages.forEach((img, idx) => {
    if (img.src === lightboxImg.src) currentIndex = idx;
  });
  
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    const nextIndex = (currentIndex + 1) % currentModalImages.length;
    openLightbox(currentModalImages[nextIndex].src, currentModalImages[nextIndex].alt);
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    const prevIndex = (currentIndex - 1 + currentModalImages.length) % currentModalImages.length;
    openLightbox(currentModalImages[prevIndex].src, currentModalImages[prevIndex].alt);
  }
});

/* ═══════════════════════════════════ 3D VIEWER (OBJ) ═══════════════════════════════════ */

const objModels = {
  proto: {
    obj: 'assets/projects/proto/Cone Pistolet DV.obj',
    mtl: null
  }
};

let objViewers = {};
const viewerModal = document.getElementById('viewer-modal');
const viewerModalSlot = document.getElementById('viewer-modal-slot');
const viewerModalClose = document.querySelector('.viewer-modal-close');
const viewerModalBackdrop = document.querySelector('.viewer-modal-backdrop');
const fullscreenViewerCards = document.querySelectorAll('.model-viewer-card');
let activeViewerCard = null;
let activeViewerPlaceholder = null;

function openViewerModal(card) {
  if (!viewerModal || !viewerModalSlot || !card || viewerModalSlot.contains(card)) return;
  activeViewerCard = card;
  activeViewerPlaceholder = document.createComment('viewer-placeholder');
  card.parentNode.insertBefore(activeViewerPlaceholder, card);
  viewerModalSlot.appendChild(card);
  viewerModal.classList.remove('hidden');
  viewerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  window.dispatchEvent(new Event('resize'));
}

function closeViewerModal() {
  if (!viewerModal || !activeViewerCard || !activeViewerPlaceholder) return;
  activeViewerPlaceholder.parentNode.insertBefore(activeViewerCard, activeViewerPlaceholder);
  activeViewerPlaceholder.remove();
  activeViewerPlaceholder = null;
  viewerModal.classList.add('hidden');
  viewerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
  activeViewerCard = null;
  window.dispatchEvent(new Event('resize'));
}

fullscreenViewerCards.forEach((card) => {
  card.addEventListener('click', () => openViewerModal(card));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openViewerModal(card);
    }
  });
});

viewerModalClose?.addEventListener('click', closeViewerModal);
viewerModalBackdrop?.addEventListener('click', closeViewerModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeViewerModal();
});

function init3DViewer(containerId, modelKey) {
  const container = document.getElementById(containerId);
  if (!container || objViewers[containerId]) return;

  const threeApi = window.PORTFOLIO_THREE;
  if (!threeApi) return;
  const { THREE: Three, OrbitControls, OBJLoader, MTLLoader } = threeApi;

  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new Three.Scene();
  scene.background = new Three.Color(0x15152a);
  scene.add(new Three.AmbientLight(0xffffff, 0.6));

  const light = new Three.DirectionalLight(0xffffff, 0.8);
  light.position.set(5, 5, 5);
  scene.add(light);

  const camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new Three.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 3;

  const model = objModels[modelKey];
  if (!model) return;

  const resolvedObjUrl = encodeURI(model.obj);
  const resolvedMtlUrl = model.mtl ? encodeURI(model.mtl) : null;

  const onLoad = (obj) => {
    obj.scale.set(1, 1, 1);
    obj.position.set(0, 0, 0);
    
    const box = new Three.Box3().setFromObject(obj);
    const size = box.getSize(new Three.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.0 / maxDim;
    obj.scale.multiplyScalar(scale);
    
    const center = box.getCenter(new Three.Vector3());
    obj.position.sub(center.multiplyScalar(scale));
    
    scene.add(obj);

    const fitDistance = 2.0 / Math.tan((camera.fov * Math.PI) / 360) * 1.15;
    camera.position.set(fitDistance * 0.25, fitDistance * 0.12, fitDistance);
    controls.target.set(0, 0, 0);
    controls.minDistance = fitDistance * 0.45;
    controls.maxDistance = fitDistance * 5;
  };

  const onError = (error) => {
    console.error(`3D model load error for ${modelKey}:`, error);
    const errorMsg = document.createElement('div');
    errorMsg.style.color = '#ff7a7a';
    errorMsg.style.padding = '16px';
    errorMsg.textContent = `Impossible de charger le modèle 3D ${model.obj}. Vérifie le fichier et le chemin.`;
    container.innerHTML = '';
    container.appendChild(errorMsg);
  };

  if (model.mtl) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(resolvedMtlUrl, (mtl) => {
      mtl.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load(resolvedObjUrl, onLoad, undefined, onError);
    }, undefined, onError);
  } else {
    const objLoader = new OBJLoader();
    objLoader.load(resolvedObjUrl, onLoad, undefined, onError);
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  objViewers[containerId] = { scene, camera, renderer, controls };
  
  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

window.closeExpModal = closeExpModal;
window.closeEduModal = closeEduModal;
