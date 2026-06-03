# Guide d'installation de Git LFS

## Installation

### macOS
```bash
# Avec Homebrew
brew install git-lfs

# Ou télécharger directement depuis https://git-lfs.github.com
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install git-lfs

# Fedora
sudo dnf install git-lfs
```

### Windows
Télécharger l'installateur depuis https://git-lfs.github.com

## Configuration initiale

Une fois Git LFS installé :

```bash
git lfs install
```

## Ajouter les fichiers OBJ volumineux

```bash
cd /Users/hs0/Documents/Portfolio
git add assets/projects/bim/Assemblage\ GC\ V2.obj
git add assets/projects/bim/Assemblage\ GC\ V2.mtl
git add assets/projects/proto/Cône\ Pistolet\ DV.obj
git commit -m "Add 3D models (OBJ/MTL) with Git LFS"
git push origin gh-pages
```

## Fichiers concernés

- **Proto** : `assets/projects/proto/Cône Pistolet DV.obj` (~50MB)
- **BIM** : `assets/projects/bim/Assemblage GC V2.obj` (~135MB) + `.mtl`

Les visualiseurs 3D (Three.js) chargent automatiquement ces fichiers depuis les dossiers assets.
