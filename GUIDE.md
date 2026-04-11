# FootMatch Platform - Guide de développement

## 🎯 À propos du projet

FootMatch est une plateforme de football complète développée en React avec TypeScript et Tailwind CSS. Elle permet aux utilisateurs de :
- Acheter des produits de football (maillots, ballons, etc.)
- Rejoindre ou créer des matchs
- Réserver des terrains de football
- Gérer leur profil sportif

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou pnpm

### Installation

```bash
# Cloner le projet
cd footmatch-platform

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Architecture des fichiers

```
footmatch-platform/
├── src/
│   ├── app/
│   │   ├── pages/              # Pages de l'application
│   │   │   ├── Home.tsx        # Page d'accueil avec hero
│   │   │   ├── Reserver.tsx    # Matchs et terrains
│   │   │   ├── CreerMatch.tsx  # Formulaire création match
│   │   │   ├── Boutique.tsx    # Catalogue produits
│   │   │   ├── Profil.tsx      # Profil utilisateur
│   │   │   ├── MesMatchs.tsx   # Historique matchs
│   │   │   ├── MesReservations.tsx
│   │   │   └── MesCommandes.tsx # Panier + historique
│   │   ├── components/
│   │   │   └── Layout.tsx      # Layout avec navigation
│   │   ├── routes.tsx          # Configuration React Router
│   │   └── App.tsx             # Point d'entrée
│   └── styles/
│       ├── index.css           # Styles globaux
│       ├── tailwind.css        # Configuration Tailwind v4
│       ├── theme.css           # Tokens de design
│       └── fonts.css           # Imports de polices
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Système de design

### Couleurs principales
- **Vert principal** : `#235A3D`
- **Vert foncé** : `#173b29` 
- **Vert clair** : `#38a169`
- **Blanc** : `#FFFFFF`

### Pattern Zellige
Un motif géométrique marocain subtil est utilisé dans le hero de la page d'accueil via un SVG inline encodé en data URL.

### Responsive
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Technologies utilisées

### Frontend
- **React 18.3** - Framework UI
- **TypeScript** - Typage statique
- **React Router 7** - Routing côté client
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Lucide React** - Bibliothèque d'icônes

### Build & Dev
- **Vite 6** - Build tool et dev server
- **PostCSS** - Transformation CSS

## 📱 Pages principales

### 1. Accueil (`/`)
- Section hero avec pattern Zellige
- Produits populaires
- Terrains populaires
- Navigation rapide

### 2. Réserver (`/reserver`)
- Onglets : Matchs / Terrains
- Filtres de recherche
- Boutons "Mes matchs" et "Mes réservations"

### 3. Créer Match (`/creer-match`)
- Formulaire complet
- Sélection de niveau
- Choix du terrain

### 4. Boutique (`/boutique`)
- Catégories : Clubs / Équipes nationales / Équipements
- Grille de produits responsive
- Photos réelles des produits

### 5. Profil (`/profil`)
- Informations personnelles
- Informations physiques
- Préférences de jeu

### 6. Mes Matchs (`/mes-matchs`)
- Liste des matchs rejoints
- Statut (à venir / terminé)

### 7. Mes Réservations (`/mes-reservations`)
- Historique des terrains réservés
- Détails des réservations

### 8. Mes Commandes (`/mes-commandes`)
- Onglets : Panier / Historique
- Gestion complète des achats

## 🎯 Fonctionnalités clés

### Navigation
- Layout responsive avec header et bottom navigation
- Active state sur les liens
- Navigation mobile-friendly

### Filtres et recherche
- Filtrage par niveau (Débutant, Intermédiaire, Avancé)
- Recherche par lieu
- Filtres par catégorie (Boutique)

### Gestion de données
- État local React (useState)
- Données mockées pour démonstration
- Prêt pour intégration backend

## 💡 Bonnes pratiques

### Code
- Composants fonctionnels avec hooks
- TypeScript strict
- Pas de dépendances externes d'assets
- Code 100% portable

### CSS
- Tailwind CSS utility-first
- Responsive par défaut
- Pas de CSS inline sauf nécessaire (SVG patterns)

### Performance
- Images optimisées
- Lazy loading possible
- Build optimisé avec Vite

## 🔄 Évolutions futures possibles

- Intégration Supabase pour backend
- Authentification utilisateur
- Paiement en ligne réel
- Notifications en temps réel
- Géolocalisation des terrains
- Chat entre joueurs
- Système de rating/reviews

## 📞 Support

Pour toute question ou amélioration, créez une issue sur le dépôt du projet.

---

**Version** : 1.0.0  
**Dernière mise à jour** : Avril 2026
