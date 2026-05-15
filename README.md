## Portfolio — structure des projets

Ce fichier explique comment éditer les fiches projets et ajouter des images.

Fichiers principaux:
- `index.html` — page principale du portfolio.
- `style.css` — styles.
- `script.js` — interactions (modal projets, animations).
- `assets/` — logos et images (SVG/PNG).

Modifier une fiche projet
- Les cartes de projets sont dans la section `#projects` de `index.html`.
- Chaque carte a un attribut `data-project` (ex: `evlv1`, `tef`, `tmax`, `bogie`, `bim`, `proto`).
- Le contenu du modal est défini dans `script.js` dans l'objet `projects`.
	- Pour ajouter ou modifier le texte d'un projet, éditez l'entrée correspondante dans `projects`.
	- Les champs disponibles: `title`, `tools`, `body` (le `body` accepte du HTML simple).

Ajouter des images pour un projet
1. Copiez vos images dans le dossier `assets/`.
2. Dans `index.html`, vous pouvez ajouter une galerie dans la `div` de détail du projet (ou remplacer le `modalBody` par du HTML qui inclut `<img src="assets/nom.jpg" />`).
3. Pour de grandes images, utilisez `.detail-section img { max-width: 100%; height: auto; border-radius: 8px; }`.

Ajouter de vrais logos logiciels
- Placez des fichiers SVG/PNG dans `assets/` et remplacez les fichiers existants `logo-*.svg`.
- Dans `index.html`, les items utilisent `<img src="assets/logo-xxxxx.svg" class="logo-img">`.

Déploiement
- Le dépôt GitHub est déjà configuré; pour publier via GitHub Pages activez Pages dans les settings du repo et choisissez la branche `main`.

Si tu veux, je peux:
- intégrer tes vraies images (envoie-les ici ou indique où les récupérer),
- convertir l'animation du nom en un tracé SVG plus précis (il faudra un fichier SVG du texte converti en path),
- ajouter une galerie par projet.
