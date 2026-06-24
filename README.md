# Alert’Élèves — Starter site

Base front-end gratuite, propre et directement exploitable dans Antigravity.

## Stack choisie

- **Vite + React + TypeScript** : rapide, simple, gratuit, excellent pour coder vite.
- **CSS natif avec design tokens** : pas besoin de framework payant, pas de dépendance visuelle lourde.
- **React Router** : séparation claire entre les deux parcours :
  - `/etablissement`
  - `/eleve`
- **Lucide React** : icônes open source, sobres et institutionnelles.
- **Aucun backend obligatoire au MVP** : le site peut d’abord tourner en statique.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l’URL affichée dans le terminal.

## Pages incluses

### Page d’entrée
- `/` : choix entre **Espace établissement & adultes** et **Espace élèves**

### Parcours établissement / adulte
- `/etablissement` : accueil institutionnel
- `/etablissement/interventions` : modules de prévention
- `/etablissement/actualites` : veille juridique / prévention / éducation
- `/etablissement/documents` : guides et ressources téléchargeables
- `/etablissement/contact` : demande d’intervention

### Parcours élève
- `/eleve` : accueil orienté ressources et aide
- `/eleve/ressources` : ressources pédagogiques
- `/eleve/quiz-aide` : quiz + aide

## Direction artistique

Le projet suit la direction validée :

- fond clair institutionnel ;
- noir / blanc / gris très maîtrisés ;
- rouge utilisé uniquement comme signal fonctionnel ;
- cartes sobres, angles arrondis, ombres légères ;
- typographie moderne, très lisible ;
- pas de mise en avant d’un produit précis ;
- premier module nommé **Nouveaux usages à risque**.

## Ce qu’Antigravity doit améliorer ensuite

- responsive mobile avancé ;
- menu mobile fonctionnel ;
- états hover plus riches ;
- animations douces ;
- intégration des vraies images institutionnelles ;
- ajout éventuel d’un CMS gratuit/local ;
- amélioration des formulaires ;
- connexion à un service d’envoi mail ou API maison.
