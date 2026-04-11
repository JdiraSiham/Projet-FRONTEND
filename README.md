# FootMatch - Plateforme de Football

Une plateforme de football moderne et responsive permettant aux utilisateurs d'acheter des produits de football, rejoindre des matchs, créer des matchs, réserver des terrains et payer en ligne.

## 🎨 Design

- **Couleur principale** : #235A3D (vert)
- **Design** : Mobile-first avec interface sportive propre et intuitive
- **Motif** : Géométrie marocaine Zellige subtile
- **Responsive** : Mobile, tablette et desktop
- **Langue** : Interface entièrement en français

## 🚀 Fonctionnalités

### Pages principales

1. **Accueil** - Section hero avec actions rapides et produits populaires
2. **Réserver** - Voir les matchs disponibles et réserver des terrains
3. **Créer Match** - Formulaire pour organiser un nouveau match
4. **Boutique** - Acheter des produits (clubs et équipes nationales)
5. **Profil** - Informations personnelles et physiques pour les matchs
6. **Mes Matchs** - Historique des matchs rejoints
7. **Mes Réservations** - Historique des terrains réservés
8. **Mes Commandes** - Panier et historique des achats

## 🛠️ Technologies

- **React 18.3** avec React Router
- **TypeScript**
- **Tailwind CSS v4**
- **Vite** pour le bundling
- **Lucide React** pour les icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📂 Structure du projet

```
src/
├── app/
│   ├── pages/          # Pages principales de l'application
│   │   ├── Home.tsx
│   │   ├── Reserver.tsx
│   │   ├── CreerMatch.tsx
│   │   ├── Boutique.tsx
│   │   ├── Profil.tsx
│   │   ├── MesMatchs.tsx
│   │   ├── MesReservations.tsx
│   │   └── MesCommandes.tsx
│   ├── components/     # Composants réutilisables
│   │   └── Layout.tsx
│   ├── routes.tsx      # Configuration des routes
│   └── App.tsx         # Point d'entrée de l'application
└── styles/             # Fichiers CSS
    ├── index.css
    ├── tailwind.css
    ├── theme.css
    └── fonts.css
```

## 🎯 Utilisation

La plateforme permet aux utilisateurs de :

- **Explorer** les produits de football (maillots, ballons, etc.)
- **Rejoindre** des matchs existants avec filtres par niveau et lieu
- **Créer** leurs propres matchs en tant qu'organisateur
- **Réserver** des terrains de football avec horaires disponibles
- **Gérer** leur profil sportif (taille, poids, position préférée)
- **Suivre** leurs commandes et historique d'achats

## 📱 Responsive Design

L'interface s'adapte automatiquement :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🎨 Palette de couleurs

- Vert principal : `#235A3D`
- Vert foncé : `#173b29`
- Vert clair : `#38a169`
- Blanc : `#FFFFFF`

---

Développé avec ❤️ pour les passionnés de football
