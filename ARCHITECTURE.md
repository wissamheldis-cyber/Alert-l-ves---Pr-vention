# Architecture technique

## Pourquoi cette base est solide

L’objectif n’est pas de créer une usine à gaz. L’objectif est de fournir une base propre, lisible, extensible, que Antigravity peut améliorer sans se perdre.

## Front-end

```txt
React + TypeScript
Vite
React Router
CSS natif
Lucide icons
```

## Structure

```txt
src/
  components/          composants réutilisables
  data/                contenus éditables
  pages/
    establishment/     parcours établissement
    student/           parcours élève
  styles/              design tokens et système UI
```

## Pourquoi pas Next.js maintenant ?

Next.js devient utile si tu veux dès le départ :

- SEO avancé ;
- génération statique propre ;
- API routes ;
- authentification ;
- dashboard connecté ;
- CMS ;
- espace privé.

Pour un premier MVP codable rapidement dans Antigravity, Vite + React est plus léger. Ensuite, une migration vers Next.js reste possible.

## Évolutions backend possibles

### Option MVP simple
- formulaire qui envoie vers un email via un service tiers ou API maison ;
- documents statiques en PDF dans `/public/documents`.

### Option sérieuse
- Supabase gratuit pour base de données et auth ;
- stockage des documents ;
- espace établissement ;
- suivi des demandes.

### Option full local / auto-hébergée
- PostgreSQL ;
- Node/Express ou Hono ;
- stockage fichiers local/S3 compatible ;
- admin panel maison.

## Données

Tout le contenu éditable est dans :

```txt
src/data/content.ts
```

Cela permet de modifier les titres, textes, modules, documents et actualités sans toucher à toute l’interface.
