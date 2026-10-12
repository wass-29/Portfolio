/* ══════════════════════════════════════════
   WASSIM SOUSSOU — Portfolio Script
   ══════════════════════════════════════════ */

// ── Theme toggle ──
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');

const languagePairs = {
  'Wassim Soussou — Ingénieur en devenir': 'Wassim Soussou — Aspiring Engineer',
  'Changer le thème': 'Change theme',
  'À propos': 'About',
  'Compétences': 'Skills',
  'Expériences': 'Experience',
  'Projets': 'Projects',
  'Formation': 'Education',
  'Menu': 'Menu',
  'Projeteur CAO — Dessinateur 3D': 'CAD Designer — 3D Modeler',
  'Voir mes projets': 'View my projects',
  'Me contacter': 'Contact me',
  'Défiler vers le bas': 'Scroll down',
  'À propos de moi': 'About me',
  'Localisation': 'Location',
  'Mobilité': 'Mobility',
  'Permis B — Véhiculé': 'Driving licence — Mobile',
  'Entreprise': 'Company',
  'École': 'School',
  'Ingénieur Généraliste': 'General Engineer',
  'Jumeau numérique': 'Digital Twin',
  'Projet ferroviaire': 'Railway Project',
  'Mon stack technique': 'My technical stack',
  'Savoir-être': 'Soft Skills',
  'Persévérance': 'Perseverance',
  'Curiosité technique': 'Technical curiosity',
  'Travail en équipe': 'Teamwork',
  'Adaptabilité': 'Adaptability',
  'Parcours professionnel': 'Professional experience',
  'Apprenti Ingénieur — Designer BIM & Superviseur de Machines': 'Engineering Apprentice — BIM Designer & Machine Supervisor',
  'Stage de Conception — Bureau d’Études': 'Design Internship — Engineering Department',
  "Stage de Conception — Bureau d'Études": 'Design Internship — Engineering Department',
  'Animateur Diplômé (BAFA)': 'Certified Youth Leader (BAFA)',
  'Serveur': 'Restaurant Server',
  'Stage de 3e — Découverte Aéronautique': 'Year 10 Internship — Aerospace Discovery',
  'Voir en détail →': 'View details →',
  'Réalisations marquantes': 'Selected projects',
  'Projet EVLV1': 'EVLV1 Project',
  'Voir le détail du projet': 'View project details',
  'Voir en détail le projet': 'View project details',
  'Quadricycle électrique EV4 — Phase 1 & 2': 'EV4 Electric Quadricycle — Phases 1 & 2',
  'Unité de coupe T-MAX P — Usinage optimisé': 'T-MAX P Cutting Unit — Optimized Machining',
  'Bogie TGV M — Assemblage 3D': 'TGV M Bogie — 3D Assembly',
  'Prototypage rapide & impression 3D': 'Rapid Prototyping & 3D Printing',
  'Tour en Fosse (TEF) — Numérisation & Innovation': 'Wheel Lathe (TEF) — Digitization & Innovation',
  'Contexte & Enjeux': 'Context & Challenges',
  'Mission Principale': 'Main Mission',
  'Relevés & Mesures Terrain': 'Field Surveys & Measurements',
  'Infrastructure Réseau': 'Network Infrastructure',
  'BIM & Digital Twin': 'BIM & Digital Twin',
  'Compétences Valorisées': 'Valued Skills',
  'Parcours académique': 'Academic background',
  'Diplôme d’Ingénieur Généraliste': 'General Engineering Degree',
  "Diplôme d'Ingénieur Généraliste": 'General Engineering Degree',
  'Baccalauréat Général': 'General Baccalaureate',
  'En cours': 'In progress',
  'Travaillons ensemble': 'Let’s work together',
  'Nom': 'Name',
  'Votre nom': 'Your name',
  'Sujet': 'Subject',
  'Objet du message': 'Message subject',
  'Message': 'Message',
  'Votre message...': 'Your message...',
  'Envoyer le message': 'Send message',
  'Message envoyé ! Je vous réponds rapidement.': 'Message sent! I will reply shortly.',
  'Fermer': 'Close',
  'Titre du projet': 'Project title',
  'Outils utilisés': 'Tools used',
  'Description détaillée du projet.': 'Detailed project description.',
  'Outils :': 'Tools:',
  'Contexte': 'Context',
  'Problématique': 'Challenge',
  'Objectif': 'Objective',
  'Résultat': 'Result',
  'Résultats': 'Results',
  'La Mission': 'The Mission',
  'Conception et Ingénierie': 'Design & Engineering',
  'Intégration': 'Integration',
  'Compétences Techniques': 'Technical Skills',
  'Savoir-être (Soft Skills)': 'Soft Skills',
  'Compétences Développées': 'Skills Developed',
  'Responsabilités': 'Responsibilities',
  'Impact Personnel': 'Personal Impact',
  'Contexte & Mission': 'Context & Mission',
  'Projet Technique': 'Technical Project',
  'Le Déclic': 'The Turning Point',
  'Impact à Long Terme': 'Long-Term Impact',
  'Parcours de Formation': 'Training Path',
  'Apprentissage Personnel': 'Personal Learning',
  'Spécialités Choisies': 'Chosen Specializations',
  'Enseignements Complémentaires': 'Additional Subjects',
  'Certifications Obtenues': 'Certifications Earned',
  'Le Déclic Scolaire': 'The Academic Turning Point',
  'Compétences Techniques Maîtrisées': 'Mastered Technical Skills',
  'Méthodologie': 'Methodology',
  'Autonomie': 'Autonomy',
  'Chargement du modèle': 'Loading model',
  'Vue 3D prête — faites glisser pour la manipuler': '3D view ready — drag to rotate',
  'Le modèle n’a pas pu être chargé.': 'The model could not be loaded.',
  'Impossible de charger le modèle 3D': 'Unable to load 3D model',
  'Ajoutez vos images dans': 'Add your images to',
  'Aucune image disponible pour': 'No images available for',
  'Aucune image disponible dans': 'No images available in'
};

Object.assign(languagePairs, {
  'et ma formation': 'and my education path',
  'en gardant cet horizon en tête.': 'with this goal in mind.',
  "Ce stage m'a donné la": 'This internship gave me the',
  'certitude absolue': 'absolute certainty',
  'de vouloir travailler dans ce secteur :': 'that I wanted to work in this sector:',
  'Obtention du': 'Obtained the',
  "BAFA (Brevet d'Aptitude aux Fonctions d'Animateur)": 'BAFA (Youth Activity Leader Certificate)',
  'après trois sessions de formation intensive.': 'after three intensive training sessions.',
  'Semaine de stage découverte obligatoire au sein d’Air France Industries. Cette expérience a été': 'A mandatory one-week discovery internship at Air France Industries. This experience was',
  "Semaine de stage découverte obligatoire au sein d'Air France Industries. Cette expérience a été": 'A mandatory one-week discovery internship at Air France Industries. This experience was',
  'décisive pour ma trajectoire professionnelle et éducative.': 'decisive in shaping my educational and professional path.',
  'décisive': 'decisive',
  'L’univers de la maintenance aéronautique': 'The world of aircraft maintenance',
  "L'univers de la maintenance aéronautique": 'The world of aircraft maintenance',
  'Les équipes multidisciplinaires et l’importance de la collaboration': 'Multidisciplinary teams and the importance of collaboration',
  "Les équipes multidisciplinaires et l'importance de la collaboration": 'Multidisciplinary teams and the importance of collaboration',
  'L’impact direct de chaque personne sur la sécurité aérienne mondiale': 'The direct impact of each person on global aviation safety',
  "L'impact direct de chaque personne sur la sécurité aérienne mondiale": 'The direct impact of each person on global aviation safety',
  'L’ambiance d’un grand industriel français': 'The atmosphere of a major French industrial company',
  "L'ambiance d'un grand industriel français": 'The atmosphere of a major French industrial company',
  'Unité de coupe T-MAX P': 'T-MAX P Cutting Unit',
  'Bogie TGV M — Assemblage 3D': 'TGV M Bogie — 3D Assembly',
  'Quadricycle EV4 & Impression 3D': 'EV4 Quadricycle & 3D Printing',
  'Prototypage rapide & impression 3D': 'Rapid Prototyping & 3D Printing',
  'À propos': 'About',
  'Compétences': 'Skills',
  'Expériences': 'Experience',
  'Projets': 'Projects',
  'Formation': 'Education',
  '01 — Introduction': '01 — Introduction',
  '02 — Compétences': '02 — Skills',
  '03 — Expériences': '03 — Experience',
  '04 — Projets': '04 — Projects',
  '05 — Formation': '05 — Education',
  '06 — Contact': '06 — Contact',
  'À propos de moi': 'About me',
  'Mon stack technique': 'My technical stack',
  'Parcours professionnel': 'Professional experience',
  'Réalisations marquantes': 'Selected projects',
  'Parcours académique': 'Academic background',
  'Travaillons ensemble': 'Let’s work together',
  'Je suis dessinateur 3D et projeteur CAO, spécialisé dans les systèmes industriels et la modélisation de machines lourdes. Mon terrain : le Technicentre Est Européen de la SNCF, où je transforme des plans 2D en jumeaux numériques précis.': 'I am a 3D designer and CAD draftsman specializing in industrial systems and heavy-machine modeling. My field is SNCF’s Technicentre Est Européen, where I transform 2D drawings into accurate digital twins.',
  "Mon objectif est clair : concevoir des solutions mécaniques réalistes, robustes et prêtes à être fabriquées. J'aime quand le visuel raconte déjà la fonction.": 'My goal is clear: to design realistic, robust mechanical solutions ready for manufacturing. I like visuals that already explain their function.',
  "Je poursuis actuellement mon cursus d'ingénieur généraliste au CESI Nanterre tout en apportant de la valeur sur le terrain comme Concepteur 3D / Designer BIM à la SNCF.": 'I am currently completing my general engineering degree at CESI Nanterre while contributing on the ground as a 3D Designer / BIM Designer at SNCF.',
  'Projets industriels': 'Industrial projects',
  "Ans d'alternance": 'Years of work-study training',
  'Innovation SNCF soumise': 'SNCF innovation submitted',
  'Localisation': 'Location',
  'Mobilité': 'Mobility',
  'Permis B — Véhiculé': 'Driving licence — Mobile',
  'Entreprise': 'Company',
  'École': 'School',
  'Savoir-être': 'Soft Skills',
  'Persévérance': 'Perseverance',
  'Curiosité technique': 'Technical curiosity',
  'Travail en équipe': 'Teamwork',
  'Autonomie': 'Autonomy',
  'Communication': 'Communication',
  'Adaptabilité': 'Adaptability',
  "Modélisation 3D de l'intégralité des machines du TEE pour constitution d'un jumeau numérique complet. Collaboration étroite avec un autre alternant pour l'intégration des modèles dans le TEE virtuel. Gestion autonome du FabLab via FabTrack : réception et traitement des demandes de prototypage.": '3D modeling of all TEE machines to create a complete digital twin. Close collaboration with another apprentice to integrate the models into the virtual TEE. Independent FabLab management through FabTrack, including prototype request intake and processing.',
  "Optimisation des opérations d'usinage : étude et modélisation pour obtenir des copeaux courts et spiralés. Premier contact concret avec le fonctionnement d'un bureau d'études industriel. Stage déterminant dans la confirmation de ma voie ingénieur.": 'Optimization of machining operations through analysis and modeling to produce short, spiral chips. First practical experience of an industrial engineering department. A defining internship that confirmed my engineering path.',
  "Obtention du BAFA après trois stages de formation. Encadrement d'enfants, gestion de groupe, prise de responsabilités.": 'Obtained the BAFA after three training sessions. Supervision of children, group management, and responsibility-taking.',
  "Travail du week-end en parallèle des études. Développement d'une vraie aisance relationnelle, d'un sens de l'organisation et d'une capacité à garder son calme sous pression.": 'Weekend work alongside my studies. Developed strong interpersonal skills, organization, and the ability to stay calm under pressure.',
  'Serveur': 'Market Restaurant Server',
  'Saveur et Passions': 'Saveur et Passions Market Restaurant',
  "Première immersion dans la maintenance aéronautique. Moment fondateur : la certitude de vouloir travailler dans ce secteur d'exigence et de précision.": 'First immersion in aircraft maintenance. A defining experience that confirmed my ambition to work in a demanding, precision-driven industry.',
  'Aéronautique': 'Aerospace',
  'Maintenance': 'Maintenance',
  'Quadricycle électrique EV4 — Phase 1 & 2': 'EV4 Electric Quadricycle — Phases 1 & 2',
  "Conception du quadricycle urbain EV4 en deux temps : cahier des charges fonctionnel et développement du module de suspension / pivotement de la roue avant. Ce projet allie mobilité, éco-conception et sécurité mécanique.": 'Two-phase design of the EV4 urban quadricycle: functional specifications followed by development of the front-wheel suspension and pivot module. This project combines mobility, eco-design, and mechanical safety.',
  'Cahier des charges': 'Specifications',
  'norme urbaine': 'urban standards',
  'freins hydraulique 4 roues': 'four-wheel hydraulic brakes',
  'démontabilité et maintenance': 'disassembly and maintenance',
  'optimisation de la solidité': 'strength optimization',
  'respect du cahier des charges F0': 'compliance with the F0 specifications',
  'Unité de coupe T-MAX P — Usinage optimisé': 'T-MAX P Cutting Unit — Optimized Machining',
  "Conception CAO de l'unité de coupe et de sa plaquette. Objectif : optimiser l'évacuation des copeaux en spirale lors du reprofilage au TEF. Analyse, simulation et modélisation.": 'CAD design of the cutting unit and insert. Objective: optimize spiral chip evacuation during TEF wheel reprofiling. Analysis, simulation, and modeling.',
  'Bogie TGV M — Assemblage 3D': 'TGV M Bogie — 3D Assembly',
  "Modélisation intégrale d'un bogie TGV M à partir de plans techniques partiels. Respect strict des nouveaux gabarits réglementaires et de l'entre-roue de 1360 mm.": 'Complete modeling of a TGV M bogie from partial technical drawings. Strict compliance with new regulatory gauges and the 1360 mm wheelbase.',
  'Prototypage rapide & impression 3D': 'Rapid Prototyping & 3D Printing',
  "Conception des trains roulants de l'EV4 (direction et pivotement). Calculs de structure et dimensionnement statique. Réalisation de pièces imprimées en 3D (vis d'urgence).": 'Design of the EV4 running gear, including steering and pivoting. Structural calculations and static sizing. Production of 3D-printed parts, including emergency screws.',
  'Manipulez la vue 3D directement depuis la page.': 'Manipulate the 3D view directly on the page.',
  'SolidWorks': 'SolidWorks',
  'Usinage': 'Machining',
  'Copeaux': 'Chips',
  'TGV M': 'TGV M',
  'Bogies': 'Bogies',
  'Impression 3D': '3D Printing',
  'Contexte & Enjeux': 'Context & Challenges',
  'Mission Principale': 'Main Mission',
  'Relevés & Mesures Terrain': 'Field Surveys & Measurements',
  'Infrastructure Réseau': 'Network Infrastructure',
  'Compétences Valorisées': 'Valued Skills',
  'Projet Majeur — 3 ans': 'Major Project — 3 years',
  'L’impact humain': 'Human impact',
  "L'impact humain": 'Human impact',
  'Certification PIX': 'PIX certification',
  'Projets BTS CPI': 'BTS CPI Projects',
  'EV4 — Quadricycle électrique': 'EV4 — Electric Quadricycle',
  'Vérin Festo': 'Festo Cylinder',
  'Fauteuil de dentiste': 'Dental Chair',
  'Cahier des charges électrique': 'Electrical Specifications',
  'Nom': 'Name',
  'Votre nom': 'Your name',
  'Sujet': 'Subject',
  'Objet du message': 'Message subject',
  'Votre message...': 'Your message...',
  'Envoyer le message': 'Send message',
  'Message envoyé ! Je vous réponds rapidement.': 'Message sent! I will reply shortly.',
  'Permis B — Véhiculé': 'Driving licence — Mobile'
});

Object.assign(languagePairs, {
  "Je poursuis actuellement mon cursus d'ingénieur généraliste au": 'I am currently completing my general engineering degree at',
  'tout en apportant de la valeur sur le terrain comme': 'while contributing on the ground as',
  'à la SNCF.': 'at SNCF.',
  'Phase 1': 'Phase 1',
  'Phase 2': 'Phase 2',
  'cahier des charges': 'specifications',
  'structure aluminium': 'aluminum structure',
  'batterie 36V': '36V battery',
  'freins hydraulique 4 roues': 'four-wheel hydraulic brakes',
  'démontabilité': 'disassembly',
  'maintenance': 'maintenance',
  'conception du bras avant droit': 'design of the right front arm',
  'module de pivotement': 'pivot module',
  'rotules d10': 'D10 ball joints',
  'modélisation intégrale': 'complete modeling',
  'plans techniques partiels': 'partial technical drawings',
  'gabarits réglementaires': 'regulatory gauges',
  "entre-roue de 1360 mm": '1360 mm wheelbase',
  'éco-conception': 'eco-design',
  'sécurité mécanique': 'mechanical safety',
  'aujourd’hui': 'today',
  "Aujourd'hui": 'Today',
  'Octobre': 'October',
  'Septembre': 'September',
  'Juin': 'June',
  'Juillet': 'July',
  'Contexte & Enjeu': 'Context & Challenge',
  'Le Technicentre Est Européen': 'The Technicentre Est Européen',
  'infrastructure de maintenance ferroviaire': 'railway maintenance infrastructure',
  'jumeau numérique complet': 'complete digital twin',
  'Le Tour en Fosse': 'The Wheel Lathe',
  'reprofilage des roues d’essieux': 'wheelset reprofiling',
  'reprofilage des roues d’essieux': 'wheelset reprofiling',
  'plans historiques': 'historical drawings',
  'réalité terrain': 'field reality',
  'modèle CAO': 'CAD model',
  'précision millimétrique': 'millimeter accuracy',
  'flux réseaux': 'network flows',
  'câbles de puissance': 'power cables',
  'surface de marche sécurisée': 'safe walking surface',
  'plancher technique surélevé': 'raised technical floor',
  'systèmes de supervision': 'supervision systems',
  'prise de responsabilités': 'taking responsibility',
  'gestion de groupe': 'group management',
  'relations client': 'customer relations',
  'Service client': 'Customer service',
  'Gestion du stress': 'Stress management',
  'Stage de 3e': 'Year 10 internship',
  'Découverte Aéronautique': 'Aerospace Discovery',
  'maintenance aéronautique': 'aircraft maintenance',
  'Conception des trains roulants': 'Running gear design',
  'direction et pivotement': 'steering and pivoting',
  'Calculs de structure': 'Structural calculations',
  'dimensionnement statique': 'static sizing',
  "pièces imprimées en 3D": '3D-printed parts',
  "vis d'urgence": 'emergency screws',
  'outils utilisés': 'tools used',
  'Détail du projet': 'Project details',
  'Phase 1 — Cahier des Charges': 'Phase 1 — Specifications',
  'Phase 2 — Conception Détaillée': 'Phase 2 — Detailed Design',
  'Points Clés & Apprentissages': 'Key Takeaways & Learning',
  'Compétences Techniques': 'Technical Skills',
  'Le Déclic Scolaire': 'The Academic Turning Point',
  'Après Le Bac': 'After High School',
  'Spécialités Choisies': 'Chosen Specializations',
  'Enseignements Complémentaires': 'Additional Subjects',
  'Certifications Obtenues': 'Certifications Earned',
  'Avantages de l’Alternance': 'Benefits of Work-Study Training',
  "Avantages de l'Alternance": 'Benefits of Work-Study Training',
  'Débouchés Visés': 'Target Career Paths',
  'Apprentissages Clés': 'Key Learnings',
  'Rôle': 'Role',
  'Workflow Typique': 'Typical Workflow',
  'Matériaux Maîtrisés': 'Mastered Materials',
  'Gains Opérationnels': 'Operational Gains',
  'Solution proposée': 'Proposed Solution',
  'Points-clés': 'Key Points',
  'Analyse Technologique': 'Technology Analysis',
  'Simulation & Optimisation': 'Simulation & Optimization',
  'Livrables': 'Deliverables',
  'Défis Techniques': 'Technical Challenges',
  'Méthodologie': 'Methodology',
  'Résistance des Matériaux': 'Strength of Materials',
  'Envoi en cours': 'Sending…',
  'Erreur d’envoi': 'Send error'
});

Object.assign(languagePairs, {
  'Concepteur 3D / Designer BIM': '3D Designer / BIM Designer',
  'rotules d10': 'D10 ball joints',
  'rotules D10': 'D10 ball joints',
  'à D10 ball joints': 'with D10 ball joints',
  'Éco-conception': 'Eco-design',
  'éco-conception': 'eco-design',
  'Bureau d’études': 'Engineering department',
  "Bureau d'études": 'Engineering department',
  'Stage de Conception': 'Design Internship',
  'pivot module à D10 ball joints': 'pivot module with D10 ball joints',
  'pivot module à rotules D10': 'pivot module with D10 ball joints',
  'strength optimization et compliance with the F0 specifications': 'strength optimization and compliance with the F0 specifications',
  'Phase 1 : specifications': 'Phase 1: specifications',
  'Phase 2 : design': 'Phase 2: design'
});

Object.assign(languagePairs, {
  "Rétro-conception et optimisation complète de l'unité de coupe pour améliorer l'évacuation des copeaux en formation spiralée et réduire les arrêts machine.": 'Complete reverse engineering and optimization of the cutting unit to improve spiral chip evacuation and reduce machine downtime.',
  "Reproduction et intégration d'un bogie TGV M (composant critique de roulement) à partir de plans partiels et documentation fragmentée de la SNCF.": 'Reproduction and integration of a TGV M bogie, a critical running component, from partial drawings and fragmented SNCF documentation.',
  "Reconstitution progressive par sections : châssis → essieu → suspensions → équipements auxiliaires. Chaque assemblage validé contre gabarit dynamique TGV M.": 'Progressive reconstruction by section: frame → axle → suspension → auxiliary equipment. Each assembly was checked against the TGV M dynamic gauge.',
  'Modèle 3D complet prêt pour simulation dynamique ferroviaire et études de modernisation.': 'Complete 3D model ready for railway dynamics simulation and modernization studies.',
  "Admin FabLab du Technicentre : conception et production rapide de pièces de maintenance, boîtiers sur mesure et supports d'assemblage pour besoins urgents du site.": 'FabLab administrator at the Technicentre: rapid design and production of maintenance parts, custom enclosures, and assembly supports for urgent site requirements.',
  'Demande FabTrack': 'FabTrack request',
  'formulaire numérique depuis équipes maintenance': 'digital form submitted by maintenance teams',
  'Conception rapide': 'Rapid design',
  'modèle Fusion 360 en <2h, validation pour impression': 'Fusion 360 model in under 2 hours, validated for printing',
  'choix matériau': 'material selection',
  'Validation terrain': 'Field validation',
  'test en situation, itération si nécessaire': 'in-situ testing and iteration when needed',
  'pièces souples, joints, amortisseurs': 'flexible parts, seals, dampers',
  'supports, attaches, guides': 'supports, brackets, guides',
  'résistance thermique, boîtiers électroniques': 'thermal resistance, electronic enclosures',
  "Délai <24h vs. plusieurs semaines avant impression 3D. Coût matière négligeable comparé à arrêt machine. Production >150 pièces depuis déploiement FabLab.": 'Lead time under 24 hours versus several weeks before 3D printing. Material cost is negligible compared with machine downtime. More than 150 parts produced since the FabLab launch.',
  "Projet de BTS CPI portant sur la conception d'un quadricycle urbain électrique (EV4) en deux phases distinctes.": 'BTS CPI project focused on designing an electric urban quadricycle (EV4) in two distinct phases.',
  'prototype fonctionnel construit et testé sur piste': 'functional prototype built and tested on a track',
  'tests dynamiques conformes cahier des charges, prêt pour phase production': 'dynamic tests compliant with the specifications and ready for production',
  'Rétro-conception': 'Reverse engineering',
  'Analyse Technologique': 'Technology Analysis',
  'Formation CAO': 'CAD training',
  'Vision Globale': 'Overall Vision',
  'Composantes': 'Components',
  'Technologie': 'Technology',
  'Impact': 'Impact',
  'Intégration BIM': 'BIM Integration',
  'Relevés terrain & documentation': 'Field surveys & documentation',
  'Objectif': 'Objective',
  'Fournir un jumeau numérique fiable': 'Provide a reliable digital twin',
  'maquette 3D prête à être utilisée': '3D model ready to use',
  'Une maquette CAO de haute précision': 'A high-precision CAD model',
  'Réduire les arrêts machine': 'Reduce machine downtime',
  'Décomposition': 'Breakdown',
  'arête de coupe': 'cutting edge',
  'géométrie plaquette': 'insert geometry',
  'porte-outil': 'tool holder',
  'Paramètres d’usinage': 'Machining parameters',
  "Paramètres d'usinage": 'Machining parameters',
  'vitesse, avance, profondeur de passe': 'speed, feed, depth of cut',
  'Formation copeaux': 'Chip formation',
  'mécanique de rupture, spirale vs éclatement': 'fracture mechanics, spiral versus breakage',
  'Modélisation CAO précise des dépouilles et faces de coupe': 'Precise CAD modeling of reliefs and cutting faces',
  'Étude comparative': 'Comparative study',
  'géométrie originale vs. modifications proposées': 'original geometry versus proposed modifications',
  'Validation': 'Validation',
  'tests usinage avec relevés copeaux': 'machining tests with chip measurements',
  'Plans détaillés plaquette optimisée, paramètres usinage ajustés, rapport d’essais démontrant réduction temps d’arrêt machine de ~15%.': 'Detailed drawings of the optimized insert, adjusted machining parameters, and test report demonstrating an approximately 15% reduction in machine downtime.',
  "Plans détaillés plaquette optimisée, paramètres usinage ajustés, rapport d'essais démontrant réduction temps d'arrêt machine de ~15%.": 'Detailed drawings of the optimized insert, adjusted machining parameters, and test report demonstrating an approximately 15% reduction in machine downtime.'
});

Object.assign(languagePairs, {
  'Pilotage de la modélisation 3D complète des machines du Technicentre Est Européen pour constitution d’un jumeau numérique industriel.': 'Led the complete 3D modeling of the Technicentre Est Européen machines to create an industrial digital twin.',
  "Pilotage de la modélisation 3D complète des machines du Technicentre Est Européen pour constitution d'un jumeau numérique industriel.": 'Led the complete 3D modeling of the Technicentre Est Européen machines to create an industrial digital twin.',
  'Soft Skills Développées': 'Soft Skills Developed',
  "Stage de 3 mois au bureau d'études du Technicentre Est Européen, dédié à l'optimisation des procédés d'usinage.": 'Three-month internship in the Technicentre Est Européen engineering department, focused on optimizing machining processes.',
  "Optimisation des opérations d'usinage : étude et modélisation pour obtenir des copeaux courts et spiralés, réduisant ainsi les risques de projection et améliorant la sécurité des opérateurs.": 'Optimization of machining operations through analysis and modeling to produce short, spiral chips, reducing ejection risks and improving operator safety.',
  "Stage décisif dans ma trajectoire : premier vrai contact avec la réalité d'un bureau d'études industriel. Confirmation définitive de ma volonté de poursuivre une formation d'ingénieur. Compréhension concrète du lien CAO ↔ fabrication.": 'A decisive internship in my career: my first real experience of an industrial engineering department. It definitively confirmed my desire to pursue an engineering degree and gave me a concrete understanding of the link between CAD and manufacturing.',
  'Poste & Responsabilités': 'Role & Responsibilities',
  'Travail hebdomadaire (week-ends) en parallèle de mes études. Service client en restaurant, gestion des commandes, entretien des espaces.': 'Weekly weekend work alongside my studies, including customer service, order management, and maintaining the restaurant premises.',
  "Cet emploi m'a enseigné la valeur du service, l'importance de l'écoute active et la résilience face aux imprévus. Les soft skills acquises sont transférables à tout environnement professionnel, notamment en ingénierie où le travail en équipe est critique.": 'This job taught me the value of service, the importance of active listening, and resilience in the face of unexpected situations. These soft skills are transferable to any professional environment, especially engineering, where teamwork is critical.',
  'Contexte Fondateur': 'Foundational Context',
  "Ce Que J'ai Découvert": 'What I Discovered',
  "Semaine de stage découverte obligatoire au sein d'Air France Industries. Cette expérience a été décisive pour ma trajectoire professionnelle et éducative.": 'A mandatory one-week discovery internship at Air France Industries. This experience was decisive in shaping my educational and professional path.',
  'BTS Conception de Produits Industriels': 'BTS in Industrial Product Design',
  'Contexte & Format': 'Context & Format',
  'Spécialisation Technique': 'Technical Specialization',
  'Modules & Contenus': 'Modules & Coursework',
  "Formation d'ingénieur généraliste en alternance : 1 mois école / 1 mois entreprise.": 'A general engineering program in work-study format: one month at school followed by one month in the company.',
  'Débouchés Visés': 'Target Career Paths',
  "Ingénieur conception/CAO dans l'aéronautique, ferroviaire, automotive ou secteur industriel de precision. Possible évolution vers management technique ou coordination de projets multisites.": 'Design/CAD engineer in the aerospace, railway, automotive, or wider industrial sector. Potential progression toward technical management or multi-site project coordination.',
  'Le Déclic Scolaire': 'The Academic Turning Point',
  'Projet Majeur : EV4 EVLV1': 'Major Project: EV4 EVLV1',
  'Certifications Obtenues': 'Certifications Earned',
  "Ce Que Le BTS M'a Appris": 'What the BTS Taught Me',
  "Formation généraliste au Lycée ENCPB (établissement d'élite parisien, ex Lycée Pierre-Gilles de Gennes) à Saint-Denis.": 'A general academic program at Lycée ENCPB, an elite Parisian school formerly known as Lycée Pierre-Gilles de Gennes, in Saint-Denis.',
  'Spécialités Choisies': 'Chosen Specializations',
  'Enseignements Complémentaires': 'Additional Subjects',
  "Orientation réfléchie vers le BTS Conception de Produits Industriels, formation réputée pour son approche concrète et ses débouchés en ingénierie. Décision confirmée par le stage aéronautique de 3e et la passion pour la mécanique.": 'A deliberate decision to pursue a BTS in Industrial Product Design, known for its hands-on approach and engineering career opportunities. This choice was reinforced by my Year 10 aerospace internship and my passion for mechanics.',
  'Action sur le terrain': 'Fieldwork',
  "L'environnement industriel est rude et les plans théoriques diffèrent souvent de la réalité après des années d'exploitation et de petites modifications non documentées.": 'Industrial environments are demanding, and theoretical drawings often differ from reality after years of operation and undocumented modifications.',
  "Ajustement millimétrique du modèle 3D. Cette étape a garanti que chaque pièce modélisée ou conçue s'insère parfaitement dans la fosse sans aucun conflit d'interférence avec les tuyauteries ou le câblage existant.": 'Millimeter-level adjustment of the 3D model. This step ensured that every modeled or designed part fit perfectly in the pit without interfering with existing piping or cabling.',
  'Conception et Ingénierie': 'Design & Engineering',
  "Conception et modélisation d'un système innovant de plancher technique surélevé pour protéger les flux réseaux (câbles, data) tout en garantissant la sécurité des opérateurs. Structure modulaire en tubes carrés 50×50 mm et dalles de recouvrement 1m×1m.": 'Design and modeling of an innovative raised technical floor to protect network infrastructure, including cables and data lines, while ensuring operator safety. The modular structure uses 50×50 mm square tubes and 1×1 m removable floor panels.',
  "Modélisation BIM hautement sophistiquée : gestion de la complexité géométrique, intégration des machines animées, liaison avec les systèmes de supervision en temps réel pour l'aide à la décision maintenance.": 'Highly advanced BIM modeling involving complex geometry management, integration of animated machines, and connection to real-time supervision systems to support maintenance decision-making.'
});

Object.assign(languagePairs, {
  'à Today': 'to Today',
  'Relation client': 'Customer relations',
  'écoute, empathie, résolution de conflits': 'active listening, empathy, conflict resolution',
  'Organisation': 'Organization',
  'gestion simultanée de multiples tables et commands': 'simultaneous management of multiple tables and orders',
  'Aisance relationnelle': 'Interpersonal skills',
  'communication naturelle et bienveillante': 'natural and considerate communication',
  'Gestion du stress': 'Stress management',
  'calme et efficacité sous pression': 'calm and efficiency under pressure',
  'Responsabilité': 'Responsibility',
  'engagement personnel, respect des horaires': 'personal commitment and punctuality',
  'Autonomie': 'Autonomy',
  'initiative sans supervision constante': 'initiative without constant supervision',
  'Encadrement direct d’enfants et adolescents': 'Direct supervision of children and teenagers',
  'Conception et animation d’activités pédagogiques': 'Design and facilitation of educational activities',
  'Gestion de groupes en contexte collectif': 'Group management in a collective setting',
  'Respect des protocoles de sécurité et bien-être': 'Compliance with safety and well-being protocols',
  'Communication avec parents et staff': 'Communication with parents and staff',
  'Leadership': 'Leadership',
  'Gestion de groupe': 'Group management',
  'Responsabilité': 'Responsibility',
  'Créativité': 'Creativity',
  'Adaptabilité': 'Adaptability',
  'Résultats': 'Results',
  'Après trois sessions de formation intensive': 'after three intensive training sessions'
});

Object.assign(languagePairs, {
  'Mathématiques': 'Mathematics',
  'Physique-Chimie': 'Physics-Chemistry',
  'Français': 'French',
  'Histoire-Géographie': 'History-Geography',
  'Langue vivante': 'Modern language',
  'Anglais': 'English',
  'Allemand': 'German',
  'Philosophie': 'Philosophy',
  'EPS': 'Physical Education',
  'Obtention de la': 'Obtained the',
  'après trois sessions de formation intensive.': 'after three intensive training sessions.',
  'Obtention du': 'Obtained the',
  'Responsabilités': 'Responsibilities',
  'Apprentissage Personnel': 'Personal Learning',
  'Avantages de l’Alternance': 'Benefits of Work-Study Training',
  "Avantages de l'Alternance": 'Benefits of Work-Study Training',
  'Contexte & Format': 'Context & Format',
  'Le Déclic': 'The Turning Point',
  'Impact à Long Terme': 'Long-Term Impact',
  'Compétences Développées': 'Skills Developed',
  'Compétences Techniques Maîtrisées': 'Mastered Technical Skills',
  'Savoir-être Développées': 'Soft Skills Developed',
  'Gabarits': 'Gauges',
  'Usure': 'Wear',
  'Préparation': 'Preparation',
  'Résultat': 'Result',
  'Objectif': 'Objective'
});

Object.assign(languagePairs, {
  'Apprenti Ingénieur — Designer BIM & Superviseur': 'Engineering Apprentice — BIM Designer & Supervisor',
  'Superviseur de Machines': 'Machine Supervisor',
  'Apprenti Ingénieur — Designer BIM & Superviseur de Machines': 'Engineering Apprentice — BIM Designer & Machine Supervisor',
  'Mission Principale': 'Main Mission',
  'Responsabilités': 'Responsibilities',
  'Apprentissages Clés': 'Key Learnings',
  'Compétences Techniques': 'Technical Skills',
  'Stage de Conception — Bureau d’Études': 'Design Internship — Engineering Department',
  "Stage de Conception — Bureau d'Études": 'Design Internship — Engineering Department',
  'Animateur Diplômé (BAFA)': 'Certified Youth Leader (BAFA)',
  'Parcours de Formation': 'Training Path',
  'Soft Skills Développées': 'Soft Skills Developed',
  'Apprentissage Personnel': 'Personal Learning',
  'Stage de 3e — Découverte Aéronautique': 'Year 10 Internship — Aerospace Discovery',
  'Contexte Fondateur': 'Foundational Context',
  "Ce Que J'ai Découvert": 'What I Discovered',
  'Le Déclic': 'The Turning Point',
  'Impact à Long Terme': 'Long-Term Impact',
  'Baccalauréat Général': 'General Baccalaureate',
  'Diplôme d’Ingénieur Généraliste': 'General Engineering Degree',
  "Diplôme d'Ingénieur Généraliste": 'General Engineering Degree',
  'CESI Nanterre — Ingénieur Généraliste': 'CESI Nanterre — General Engineering',
  'Lycée Voillaume': 'Voillaume High School',
  'Lycée ENCPB (Pierre-Gilles de Gennes)': 'ENCPB High School (Pierre-Gilles de Gennes)',
  'Travaillons ensemble': 'Let’s work together',
  "Je suis ouvert aux échanges, aux opportunités en aéronautique ou mécanique, et à tout projet stimulant. N'hésitez pas à me contacter.": 'I am open to conversations, opportunities in aerospace or mechanical engineering, and any challenging project. Feel free to get in touch.',
  "Pilotage de la modélisation 3D complète des machines du Technicentre Est Européen pour constitution d'un jumeau numérique industriel.": 'Led the complete 3D modeling of the Technicentre Est Européen machines to create an industrial digital twin.',
  "Le BAFA m'a appris à diriger avec bienveillance, à écouter vraiment, et à créer un environnement sécurisant et inspirant. Ces compétences restent applicables en tous contextes : management, collaboration en équipe, leadership.": 'The BAFA taught me to lead with empathy, listen attentively, and create a safe and inspiring environment. These skills remain applicable in every context: management, teamwork, and leadership.',
  "Ce stage m'a donné la certitude absolue de vouloir travailler dans ce secteur : exigence sans compromis, innovation constante, responsabilité collective. J'ai choisi ma spécialisation (mécanique/systèmes industriels) et ma formation (d'abord BTS, puis école d'ingénieur) en gardant cet horizon en tête.": 'This internship gave me the absolute certainty that I wanted to work in this sector, defined by uncompromising standards, constant innovation, and shared responsibility. I chose my specialization (mechanical engineering and industrial systems) and my education path (first a BTS, then engineering school) with this goal in mind.',
  "Ce stage de 3e est probablement l'expérience qui a le plus influencé mon parcours. Chaque décision ultérieure (choix de lycée, spécialité, BTS, école) a été prise en pensant à ce rêve : travailler dans l'aéronautique ou un secteur similaire d'exigence et d'innovation.": 'This Year 10 internship was probably the experience that influenced my path the most. Every subsequent decision, from my high school and specialization to my BTS and engineering school, was guided by the same ambition: to work in aerospace or another sector driven by high standards and innovation.',
  "Formation généraliste au Lycée ENCPB (établissement d'élite parisien, ex Lycée Pierre-Gilles de Gennes) à Saint-Denis.": 'A general academic program at Lycée ENCPB, an elite Parisian school formerly known as Lycée Pierre-Gilles de Gennes, in Saint-Denis.',
  "Orientation réfléchie vers le BTS Conception de Produits Industriels, formation réputée pour son approche concrète et ses débouchés en ingénierie. Décision confirmée par le stage aéronautique de 3e et la passion pour la mécanique.": 'A deliberate decision to pursue a BTS in Industrial Product Design, known for its hands-on approach and engineering career opportunities. This choice was reinforced by my Year 10 aerospace internship and my passion for mechanics.',
  'L’impact humain': 'Human impact',
  "L'impact humain": 'Human impact',
  "Ce projet de fond forge ma capacité à manager la complexité à grande échelle. Chaque centimètre compte : c'est de la précision au service d'une infrastructure qui protège et optimise le travail de centaines de techniciens. C'est l'ingénierie de terrain au service du réel.": 'This long-term project has strengthened my ability to manage complexity at scale. Every centimeter matters: precision serves an infrastructure that protects and improves the work of hundreds of technicians. This is engineering grounded in reality.',
  'Tour en Fosse (TEF) — Numérisation & Innovation': 'Wheel Lathe (TEF) — Digitization & Innovation',
  'Field Surveys & Measurements': 'Field Surveys & Measurements',
  'Network Infrastructure': 'Network Infrastructure',
  'BIM & Digital Twin': 'BIM & Digital Twin',
  'Valued Skills': 'Valued Skills',
  'Bim Digital & Twin': 'BIM Digital Twin'
});

Object.assign(languagePairs, {
  'Modélisation haute-fidélité en CATIA V5 des équipements majeurs': 'High-fidelity CATIA V5 modeling of major equipment',
  'Intégration des modèles 3D dans une maquette BIM complète': 'Integration of 3D models into a complete BIM model',
  'Collaboration étroite avec un autre alternant pour la synchronisation des données': 'Close collaboration with another apprentice to synchronize data',
  'Administration du FabLab : gestion des demandes de prototypage via FabTrack': 'FabLab administration: managing prototype requests through FabTrack',
  'Impression 3D et réalisation de prototypes rapides': '3D printing and rapid prototype production',
  "Encadrement direct d'enfants et adolescents": 'Direct supervision of children and teenagers',
  'Encadrement direct d’enfants et adolescents': 'Direct supervision of children and teenagers',
  "Conception et animation d'activités pédagogiques": 'Design and facilitation of educational activities',
  'Conception et animation d’activités pédagogiques': 'Design and facilitation of educational activities',
  'Leadership : capacité à motiver et fédérer un groupe': 'Leadership: ability to motivate and unite a group',
  'discipline positive, médiation, écoute active': 'positive discipline, mediation, active listening',
  'Responsabilité : engagement personnel et professionnel': 'Responsibility: personal and professional commitment',
  'Adaptabilité : ajustement selon l’âge et la personnalité des enfants': 'Adaptability: adjusting to each child’s age and personality',
  'Créativité : invention d’activités adaptées et engageantes': 'Creativity: inventing suitable and engaging activities',
  "Créativité : invention d'activités adaptées et engageantes": 'Creativity: inventing suitable and engaging activities',
  'Mise en pratique immédiate des apprentissages théoriques': 'Immediate application of theoretical learning',
  'Immersion continue dans l’entreprise': 'Continuous immersion in the company',
  'Réseau professionnel en construction': 'Growing professional network',
  'Crédibilité auprès des futurs employeurs': 'Credibility with future employers',
  'Gestion de projet industriel & Agile': 'Industrial project management & Agile',
  'Éco-conception & développement durable': 'Eco-design & sustainable development',
  'Leadership & communication technique': 'Leadership & technical communication',
  'Anglais technique & certifications': 'Technical English & certifications',
  'Histoire-Géographie (contexte géopolitique & culture générale)': 'History-Geography (geopolitical context & general knowledge)',
  'Langue vivante (Anglais, Allemand)': 'Modern language (English, German)',
  'Philosophie (réflexion critique)': 'Philosophy (critical thinking)',
  'EPS (activité physique & bien-être)': 'Physical Education (physical activity & well-being)'
});

Object.assign(languagePairs, {
  'Formation en alternance (1 mois école / 1 mois entreprise).': 'Work-study program (1 month at school / 1 month in the company).',
  'Spécialisation technique — mécanique et systèmes industriels.': 'Technical specialization — mechanical and industrial systems.',
  'Déclic scolaire majeur. Maîtrise de CATIA V5, SolidWorks, RDM, cinématique, CAO.': 'Major academic turning point. Proficiency in CATIA V5, SolidWorks, Strength of Materials, kinematics, and CAD.',
  'Certification Linguaskill 3 Skills.': 'Linguaskill 3 Skills certification.',
  'Spécialités : Mathématiques & Physique-Chimie.': 'Specializations: Mathematics & Physics-Chemistry.',
  'Certification PIX.': 'PIX certification.',
  'Permis B — Véhiculé': 'Driving licence — Mobile',
  'Aujourd’hui': 'Today',
  "Aujourd'hui": 'Today',
  'Octobre 2025 — Aujourd’hui': 'October 2025 — Today',
  "Octobre 2025 — Aujourd'hui": 'October 2025 — Today',
  '2021 — Aujourd’hui': '2021 — Today',
  "2021 — Aujourd'hui": '2021 — Today'
});

Object.assign(languagePairs, {
  'SNCF — Oct. 2024 à Aujourd’hui': 'SNCF — Oct. 2024 to Today',
  "SNCF — Oct. 2024 à Aujourd'hui": 'SNCF — Oct. 2024 to Today',
  'SDJES — 2023 à 2024': 'SDJES — 2023 to 2024',
  'Air France Industries — 2019': 'Air France Industries — 2019',
  "Gestion de projets CAO complexes à l'échelle industrielle": 'Managing complex CAD projects at industrial scale',
  "Méthodologie BIM appliquée à l'infrastructure ferroviaire": 'BIM methodology applied to railway infrastructure',
  'Autonomie et prise de responsabilité sur des équipements critiques': 'Autonomy and responsibility for critical equipment',
  'Compétences humaines : collaboration cross-team, communication technique': 'People skills: cross-team collaboration and technical communication',
  "Obtention du BAFA (Brevet d'Aptitude aux Fonctions d'Animateur) après trois sessions de formation intensive.": 'Obtained the BAFA (Youth Activity Leader Certificate) after three intensive training sessions.',
  'Leadership : capacité à motiver et fédérer un groupe': 'Leadership: ability to motivate and unite a group',
  "Responsabilité : engagement personnel et professionnel": 'Responsibility: personal and professional commitment',
  "Adaptabilité : ajustement selon l'âge et la personnalité des enfants": 'Adaptability: adjusting to each child’s age and personality',
  "Semaine de stage découverte obligatoire au sein d'Air France Industries. Cette expérience a été décisive pour ma trajectoire professionnelle et éducative.": 'A mandatory one-week discovery internship at Air France Industries. This experience was decisive in shaping my educational and professional path.',
  "L'univers de la maintenance aéronautique : complexité, rigueur, précision": 'The world of aircraft maintenance: complexity, rigor, and precision',
  "Les équipes multidisciplinaires et l'importance de la collaboration": 'Multidisciplinary teams and the importance of collaboration',
  "L'impact direct de chaque personne sur la sécurité aérienne mondiale": 'The direct impact of each person on global aviation safety',
  "L'ambiance d'un grand industriel français": 'The atmosphere of a major French industrial company',
  "Ce stage m'a donné la certitude absolue de vouloir travailler dans ce secteur : exigence sans compromis, innovation constante, responsabilité collective.": 'This internship gave me absolute certainty that I wanted to work in this sector: uncompromising standards, constant innovation, and shared responsibility.'
});

Object.assign(languagePairs, {
  "Obtention du BAFA (Brevet d'Aptitude aux Fonctions d'Animateur) après trois sessions de formation intensive.": 'Obtained the BAFA (Youth Activity Leader Certificate) after three intensive training sessions.',
  'Obtention du BAFA (Brevet d’Aptitude aux Fonctions d’Animateur) après trois sessions de formation intensive.': 'Obtained the BAFA (Youth Activity Leader Certificate) after three intensive training sessions.',
  "Semaine de stage découverte obligatoire au sein d'Air France Industries. Cette expérience a été décisive pour ma trajectoire professionnelle et éducative.": 'A mandatory one-week discovery internship at Air France Industries. This experience was decisive in shaping my educational and professional path.',
  "Ce stage m'a donné la certitude absolue de vouloir travailler dans ce secteur : exigence sans compromis, innovation constante, responsabilité collective. J'ai choisi ma spécialisation (mécanique/systèmes industriels) et ma formation (d'abord BTS, puis école d'ingénieur) en gardant cet horizon en tête.": 'This internship gave me absolute certainty that I wanted to work in this sector: uncompromising standards, constant innovation, and shared responsibility. I chose my specialization in mechanical engineering and industrial systems and followed an education path from BTS to engineering school with this goal in mind.'
});

Object.assign(languagePairs, {
  'pour ma trajectoire professionnelle et éducative.': 'in shaping my educational and professional path.',
  'capacité à motiver et fédérer un groupe': 'ability to motivate and unite a group',
  'discipline positive, médiation, écoute active': 'positive discipline, mediation, active listening',
  'engagement personnel et professionnel': 'personal and professional commitment',
  "ajustement selon l'âge et la personnalité des enfants": 'adjusting to each child’s age and personality',
  'invention d’activités adaptées et engageantes': 'inventing suitable and engaging activities',
  "invention d'activités adaptées et engageantes": 'inventing suitable and engaging activities',
  "Ce stage m'a donné la certitude absolue de vouloir travailler dans ce secteur": 'This internship gave me absolute certainty that I wanted to work in this sector',
  'exigence sans compromis, innovation constante, responsabilité collective': 'uncompromising standards, constant innovation, and shared responsibility',
  "J'ai choisi ma spécialisation": 'I chose my specialization',
  'mécanique/systèmes industriels': 'mechanical engineering and industrial systems',
  "d'abord BTS, puis école d'ingénieur": 'from BTS to engineering school',
  'en gardant cet horizon en tête.': 'with this goal in mind.',
  "Ce stage de 3e est probablement l'expérience qui a le plus influencé mon parcours.": 'This Year 10 internship was probably the experience that influenced my path the most.',
  'Chaque décision ultérieure': 'Every subsequent decision',
  'choix de lycée, spécialité, BTS, école': 'from my high school and specialization to my BTS and engineering school',
  'a été prise en pensant à ce rêve': 'was guided by the same ambition',
  "travailler dans l'aéronautique ou un secteur similaire d'exigence et d'innovation.": 'to work in aerospace or another sector driven by high standards and innovation.'
});

const reverseLanguagePairs = Object.fromEntries(Object.entries(languagePairs).map(([fr, en]) => [en, fr]));
let currentLanguage = 'en';

function translateValue(value, language) {
  const pairs = language === 'en' ? languagePairs : reverseLanguagePairs;
  return Object.entries(pairs)
    .sort(([a], [b]) => b.length - a.length)
    .reduce((result, [source, target]) => {
      const escaped = source.trim().split(/\s+/).map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+');
      return result.replace(new RegExp(escaped, 'g'), target);
    }, value);
}

function translateElement(element, language) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    if (node.parentElement?.tagName !== 'SCRIPT' && node.parentElement?.tagName !== 'STYLE') {
      node.nodeValue = translateValue(node.nodeValue, language);
    }
  });
  element.querySelectorAll('[aria-label], [placeholder], [title], [alt]').forEach(node => {
    ['aria-label', 'placeholder', 'title', 'alt'].forEach(attribute => {
      if (node.hasAttribute(attribute)) node.setAttribute(attribute, translateValue(node.getAttribute(attribute), language));
    });
  });
}

function applyLanguage(language) {
  currentLanguage = language === 'fr' ? 'fr' : 'en';
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === 'en' ? 'Wassim Soussou — Aspiring Engineer' : 'Wassim Soussou — Ingénieur en devenir';
  translateElement(document.body, currentLanguage);
  if (languageToggle) {
    window.dispatchEvent(new Event('languagechange'));
    languageToggle.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to French' : 'Passer à l’anglais');
  }
  localStorage.setItem('portfolio-language', currentLanguage);
}

const savedLanguage = localStorage.getItem('portfolio-language') || 'en';

function applyTheme(theme) {
  body.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('data-active', theme === 'light' ? 'light' : 'dark');
    themeToggle.classList.toggle('active', theme === 'light');
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    themeToggle.querySelector('.theme-switch__knob').style.setProperty(
      'left',
      theme === 'light' ? '3px' : '43px',
      'important'
    );
    themeToggle.querySelector('.theme-switch__sun').style.setProperty('opacity', theme === 'light' ? '1' : '0', 'important');
    themeToggle.querySelector('.theme-switch__moon').style.setProperty('opacity', theme === 'light' ? '0' : '1', 'important');
  }
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);
applyLanguage(savedLanguage);

languageToggle?.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'fr' : 'en');
});

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
  'tef-context': {
    title: 'Contexte & Enjeu',
    tools: 'Gestion de projet, Analyse de l’existant',
    body: `
      <h3>Contexte</h3>
      <p>Le Technicentre Est Européen (TEE) de la SNCF est une infrastructure vitale pour la maintenance lourde des rames TGV. Au cœur de ce dispositif se trouve le Tour en Fosse (TEF), une machine permettant le reprofilage des roues d'essieux sans avoir à démonter la rame, un gain de temps et d'argent crucial.</p>
      <h3>Problématique</h3>
      <p>Les installations vieillissent et les plans historiques ne correspondent plus toujours à la réalité du terrain. Pour préparer les futures rénovations et intégrer de nouvelles technologies, une mise à jour totale de la documentation technique est impérative.</p>
      <h3>Objectif</h3>
      <p>Lancer un chantier de numérisation massif pour obtenir un jumeau numérique complet (Digital Twin) de l'installation, permettant de simuler et de valider les futures opérations de maintenance en toute sécurité.</p>
    `
  },
  'tef-mission': {
    title: 'Mission Principale',
    tools: 'SolidWorks, Fusion 360, Lecture de plans 2D complexes',
    body: `
      <h3>Contexte</h3>
      <p>La création d'un jumeau numérique exige une base de données fiable. Les anciens plans topographiques (plus de 17 documents) devaient être décryptés, recoupés et transformés en modèles 3D intelligents.</p>
      <h3>La Mission</h3>
      <p>Piloter la modélisation intégrale du TEF. Il a fallu reconstruire virtuellement la fosse, la machine de reprofilage, et surtout concevoir de nouvelles infrastructures capables d'accueillir la modernisation des réseaux (câbles, data) sans perturber le fonctionnement existant.</p>
      <h3>Résultat</h3>
      <p>Une maquette CAO de haute précision, devenue la référence pour l'équipe du TEE. Elle permet de valider les encombrements avant toute fabrication réelle, évitant les erreurs coûteuses sur le terrain.</p>
    `
  },
  'tef-releves': {
    title: 'Relevés & Mesures Terrain',
    tools: 'Instruments de métrologie, EPI, Relevés manuels',
    body: `
      <h3>Contexte</h3>
      <p>L'environnement industriel est rude et les plans théoriques diffèrent souvent de la réalité après des années d'exploitation et de petites modifications non documentées.</p>
      <h3>Action sur le terrain</h3>
      <p>Descentes régulières directement sur les voies et dans la fosse pour effectuer des campagnes de mesures minutieuses. Confrontation stricte entre l'existant physique et les modèles CAO en cours de création. Prise en compte des contraintes d'accès pour les techniciens (SST).</p>
      <h3>Résultat</h3>
      <p>Ajustement millimétrique du modèle 3D. Cette étape a garanti que chaque pièce modélisée ou conçue s'insère parfaitement dans la fosse sans aucun conflit d'interférence avec les tuyauteries ou le câblage existant.</p>
    `
  },
  'tef-reseau': {
    title: 'Infrastructure Réseau',
    tools: 'SolidWorks (Mécano-soudure), Calculs de structure',
    body: `
      <h3>Contexte</h3>
      <p>Pour moderniser le TEF, de nouveaux flux réseaux (data et câbles de puissance) doivent traverser la fosse de maintenance. Ils doivent être totalement protégés des chutes d'outils et des copeaux de métal, tout en assurant une surface de marche sécurisée pour les opérateurs.</p>
      <h3>Conception et Ingénierie</h3>
      <p>Modélisation d'une armature métallique de 12 m² spécifiquement pensée pour s'adapter à la fosse. La structure a été divisée en 4 sous-ensembles pour faciliter le montage. Utilisation de tubes carrés en acier de 50x50 mm pour la robustesse, recouverts de dalles amovibles de 1 m² garantissant un accès rapide aux conduits en-dessous.</p>
      <h3>Résultat</h3>
      <p>Un plancher technique surélevé et modulaire qui valide toutes les normes de Santé et Sécurité au Travail (SST) et pérennise l'installation des nouveaux réseaux du TEE.</p>
    `
  },
  'tef-bim': {
    title: 'Bim Digital & Twin',
    tools: 'SolidWorks (Assemblages complexes), Concepts BIM',
    body: `
      <h3>Contexte</h3>
      <p>L'industrie ferroviaire bascule vers l'industrie 4.0. Le modèle 3D ne doit pas être qu'un simple dessin, mais une maquette intelligente intégrant les réseaux, les machines animées et les flux de circulation.</p>
      <h3>Intégration</h3>
      <p>Gestion de la complexité géométrique avec des assemblages multi-niveaux. Réintégration des gabarits et des dégagements d'accès pour s'assurer que les opérations de maintenance futures se feront de manière ergonomique.</p>
      <h3>Objectif</h3>
      <p>Fournir un jumeau numérique fiable qui sert de socle pour la future supervision en temps réel des capteurs du TEF. C'est un outil d'aide à la décision stratégique pour le technicentre.</p>
    `
  },
  'tef-competences': {
    title: 'Compétences Valorisées',
    tools: 'Rigueur professionnelle, SolidWorks, Fusion 360',
    body: `
      <h3>Contexte</h3>
      <p>Ce projet majeur, étalé sur 3 ans, exige une progression constante, de la conception basique à l'intégration de systèmes complexes en milieu industriel exigeant.</p>
      <h3>Compétences Techniques</h3>
      <p>Expertise avancée sur SolidWorks et Fusion 360. Maîtrise des modules de mécano-soudure, des assemblages massifs et de la mise en plan industrielle respectant les normes ISO.</p>
      <h3>Savoir-être (Soft Skills)</h3>
      <ul>
        <li><strong>Méthodologie :</strong> Capacité à synthétiser des données brutes (plans 2D, relevés) en un système 3D cohérent.</li>
        <li><strong>Autonomie :</strong> Gestion des priorités, communication directe avec les agents de maîtrise et respect des délais dans un projet de longue haleine.</li>
      </ul>
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
  'tef-context': [
    'assets/tef/contexte & enjeu/IMG_1076.jpeg',
    'assets/tef/contexte & enjeu/Pasted Graphic 6.png'
  ],
  'tef-mission': [
    'assets/tef/Mission Principale/Pasted Graphic 2.png',
    'assets/tef/Mission Principale/Pasted Graphic 3.png'
  ],
  'tef-releves': [
    'assets/tef/Relevés et Mesure de Trains/Pasted Graphic 12.png',
    'assets/tef/Relevés et Mesure de Trains/Pasted Graphic 13.png'
  ],
  'tef-reseau': [
    'assets/tef/Infrastructure Réseau/Pasted Graphic 8.png',
    "assets/tef/Infrastructure Réseau/Vue d'ensemble du plancher.png"
  ],
  'tef-bim': [
    'assets/tef/Bim Digital & Twin/Pasted Graphic 5.png',
    'assets/tef/Bim Digital & Twin/Pasted Graphic 7.png'
  ],
  'tef-competences': [
    'assets/tef/Compétences Valorisées/Pasted Graphic 9.png'
  ],
  proto: [
    'assets/projects/proto/cone tp rangée à sa base.jpg',
    'assets/projects/proto/pistolet sable .jpg',
    'assets/projects/proto/résultat après impression 3D du cone.jpg',
    "assets/projects/proto/pistolet sable assemblé avec le cone tpu dans l'orifice tu tgv résultat.jpg",
    'assets/projects/proto/contexte pistolet sable dans orifice tgv sans cone tpu (création nuage de poussière de silice).png'
  ],
  tmax: [
    'assets/projects/Image page de garde bogie et TMAX/page de garde TMAX.png',
    'assets/projects/tmax/tmac cao isométrie.png',
    'assets/projects/tmax/tmax cao de profil.png',
    'assets/projects/tmax/plaquette de tournage.jpeg',
    'assets/projects/tmax/Tmax sur terrain.jpeg'
  ],
  bogie: [
    'assets/projects/Image page de garde bogie et TMAX/page de garde bogie.png',
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

const projectImageFolders = {
  'tef-context': 'assets/tef/contexte & enjeu/',
  'tef-mission': 'assets/tef/Mission Principale/',
  'tef-releves': 'assets/tef/Relevés et Mesure de Trains/',
  'tef-reseau': 'assets/tef/Infrastructure Réseau/',
  'tef-bim': 'assets/tef/Bim Digital & Twin/',
  'tef-competences': 'assets/tef/Compétences Valorisées/'
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

function encodeAssetPath(path) {
  return encodeURI(path.normalize('NFC'));
}

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
            <img src="${encodeAssetPath(src)}" alt="Projet ${id}" />
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
          <div class="modal-album-note">Ajoutez vos images dans ${projectImageFolders[id] || `assets/projects/${id}/`}</div>
        </div>
      </div>`;
  } else {
    modalGrid.innerHTML = images.map((src) => `
      <div class="modal-album-slot">
        <div class="album-content">
          <img src="${encodeAssetPath(src)}" alt="Projet ${id}" />
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
        <img src="${encodeAssetPath(src)}" alt="${modal.id}" />
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
  translateElement(projectModal, currentLanguage);
  renderProjectAlbum(id);
  translateElement(projectModal, currentLanguage);
  projectModal.classList.remove('hidden');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openExpModal(expId) {
  const modal = document.getElementById('exp-' + expId);
  if (modal) {
    renderDetailGallery(modal);
    translateElement(modal, currentLanguage);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openEduModal(eduId) {
  const modal = document.getElementById(eduId);
  if (modal) {
    renderDetailGallery(modal);
    translateElement(modal, currentLanguage);
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
    if (e.target.closest('.model-viewer-card')) return;
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
  if (!viewerModal || !viewerModalSlot || !card) return;
  activeViewerCard = card;
  viewerModal.classList.remove('hidden');
  viewerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeViewerModal() {
  if (!viewerModal) return;
  viewerModal.classList.add('hidden');
  viewerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
  activeViewerCard = null;
}

fullscreenViewerCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  card.addEventListener('pointerdown', (e) => e.stopPropagation());
  card.addEventListener('pointermove', (e) => e.stopPropagation());
  card.addEventListener('pointerup', (e) => e.stopPropagation());
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
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
  scene.background = new Three.Color(0x1a2638);
  scene.add(new Three.AmbientLight(0xffffff, 1.15));

  const light = new Three.DirectionalLight(0xffffff, 0.8);
  light.position.set(4, 6, 4);
  scene.add(light);
  const fillLight = new Three.DirectionalLight(0x7dd3fc, 0.65);
  fillLight.position.set(-3, 2, -4);
  scene.add(fillLight);

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

  const resolvedObjUrl = encodeAssetPath(model.obj);
  const resolvedMtlUrl = model.mtl ? encodeAssetPath(model.mtl) : null;

  const onLoad = (obj) => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = new Three.MeshStandardMaterial({
          color: 0xffffff,
          side: Three.DoubleSide,
          roughness: 0.68,
          metalness: 0.12
        });
        child.add(new Three.LineSegments(
          new Three.EdgesGeometry(child.geometry, 18),
          new Three.LineBasicMaterial({ color: 0x102033, transparent: true, opacity: 0.9 })
        ));
      }
    });
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
