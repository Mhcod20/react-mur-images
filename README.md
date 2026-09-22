# react-mur-images — Introduction à React (mur d'images)

*(TP4 de l'UE JavaScript)*

TP de reprise du "mur d'images" du TP1, cette fois avec **React**, via une chaîne de build **Webpack + Babel**.

## Structure du projet

```
tp4/
├── src/
│   ├── index.html
│   ├── components/
│   │   └── imageApp.jsx    # composant racine ImageApp
│   ├── scripts/
│   │   └── main.js         # point d'entrée : monte le composant React
│   ├── data/
│   │   ├── dataImages.js
│   │   └── currencies.js
│   ├── assets/style/
│   ├── style/
│   └── images/
├── vendor/                 # react.development.js / react-dom.development.js (chargés en <script>)
├── webpack.config.js
├── .babelrc
├── .gitignore
└── package.json
```

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée) et npm

## Installation

Depuis le dossier `tp4/` :

```bash
npm install
```

## Commandes disponibles

| Commande | Effet |
|---|---|
| `npm run build` | Génère le bundle de production dans `dist/` |
| `npm run watch` | Reconstruit automatiquement le bundle à chaque modification |
| `npm run dev-server` | Lance un serveur de développement avec rechargement à chaud (**recommandé pendant le développement**) |

Exemple pour développer :

```bash
npm run dev-server
```

Puis ouvrez l'URL indiquée dans le terminal (par défaut `http://localhost:8080`).

> ⚠️ Comme pour les TP précédents, ne consultez jamais `src/index.html` directement : c'est le bundle généré dans `dist/` (ou servi par `dev-server`) qui contient le résultat réel. `dist/` n'est pas versionné (voir `.gitignore`).

## Contenu de l'exercice

- **`imageApp.jsx`** — composant racine `ImageApp`, à compléter pour réafficher le mur d'images (du TP1) en composants React plutôt qu'en manipulation directe du DOM.
- **`main.js`** — point d'entrée : monte le composant `ImageApp` dans l'élément `#insertReactHere` du `index.html`.
- **`data/dataImages.js` / `data/currencies.js`** — jeux de données utilisés par les composants.

React et ReactDOM sont chargés en `<script>` depuis `vendor/` (et non installés via npm dans le bundle), pour illustrer l'utilisation de React "hors build" en plus de Webpack.
