# Blog Indonésie

Un blog de voyage personnel sur l'Indonésie, créé dans le cadre du cours de programmation web statique du Master G2M.

![Aperçu du site](Picture/PageAccueil/jungle_sunset_HighViewpoint.png)

## Description

Ce blog voyage est dédié à mon expérience en Indonésie, partageant mes découvertes à travers différentes destinations indonésiennes. Le projet met en pratique les connaissances en HTML, CSS et JavaScript acquises pendant le cours pour créer un site web statique attrayant et responsive.

## Demo

Consultez le blog en ligne : [Blog Indonésie](https://dasilvathomas.github.io/blog-indonesia/index.html)

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)

## Structure du projet

```
blog-indonesia/
│
├── index.html                  # Page d'accueil
├── PageAPropos.html            # Page À propos
├── PageBali.html               # Page sur Bali
├── PageHistoirePays.html       # Page sur l'histoire de l'Indonésie
├── PageJakarta.html            # Page sur Jakarta
├── PageJogja.html              # Page sur Jogjakarta
│  
├── css/                        # Dossier des feuilles de styles
│   ├── StyleAccueil.css
│   ├── StyleAPropos.css
│   ├── StyleBali.css
│   ├── StyleHistoirePays.css
│   ├── StyleJakarta.css
│   └── StyleJogja.css
│      
├── js/                         # Dossier JavaScript
│   └── Style.js                # Gestion des redirections de pages
│      
└── Picture/                    # Dossier des images
    ├── Autres/                 # Images diverses
    ├── PageAccueil/            # Images de la page d'accueil
    ├── PageBali/               # Images de Bali
    ├── PageJakarta/            # Images de Jakarta
    └── PageJogja/              # Images de Jogjakarta
```

## Caractéristiques principales

### Navigation
- Menu de navigation responsive avec sous-menu déroulant pour les destinations
- Navigation intuitive entre toutes les pages du blog

### Design Responsive
- Adaptation complète aux différentes tailles d'écran (desktop, tablette, mobile)
- Points de rupture à 768px et 580px pour optimiser l'expérience utilisateur sur tous les appareils

### Contenu Rich Media
- Galeries de photos pour chaque destination
- Vidéo YouTube intégrée sur la page de Bali
- Effets visuels et animations CSS pour améliorer l'interaction

### Performance
- Optimisation des images pour un chargement rapide
- Structure HTML sémantique pour une meilleure accessibilité

## Responsive Design

Le blog est entièrement responsive avec deux points de rupture principaux :
- **768px** : Adaptation pour tablettes et appareils de taille moyenne
- **580px** : Adaptation pour smartphones avec réorganisation complète du menu de navigation

## Pages du blog

### Page d'accueil
- Présentation générale de l'Indonésie
- Carte des principales destinations couvertes
- Articles récents avec liens vers les pages détaillées

### Pages de destinations
- **Jakarta** : Découverte de la capitale, focus sur la gastronomie locale
- **Bali** : Exploration des plages et temples, activités de snorkeling
- **Jogjakarta** : Visite des temples historiques et de la culture locale

### Autres pages
- **Histoire du pays** : Présentation historique de l'Indonésie
- **À propos** : Informations sur l'auteur du blog et le contexte du projet

## Comment exécuter le projet en local

1. Clonez le dépôt :
```bash
git clone https://github.com/DaSilvaThomas/blog-indonesia.git
```

2. Ouvrez le fichier `index.html` dans votre navigateur préféré.

## Futures améliorations envisagées

- Ajout d'une fonctionnalité de recherche
- Intégration d'une section commentaires
- Ajout de traductions en anglais et indonésien
- Création de nouvelles pages pour d'autres destinations en Indonésie

## Auteur

Thomas Da Silva - Master G2M

## Licence

Ce projet a été réalisé à des fins éducatives dans le cadre du Master G2M.
Certaines images sont générées par ChatGPT. Le contenu textuel est la propriété de ChatGPT, un modèle de langage d'OpenAI.
