# Mister M Coffee — Site web

Site web du salon de thé & restaurant **Mister M** à Mornag (Tunisie) : présentation, menu complet en ligne, commande avec panier et suivi en temps réel, et un espace admin pour le staff.

**En production :** https://mister-m-coffee.vercel.app

## Contenu du dépôt

| Fichier | Rôle |
|---------|------|
| `index.html` | Site public — hero, à propos, menu par onglets, panier → checkout → suivi de commande |
| `admin.html` | Espace staff — connexion, tableau de bord (stats + courbe du CA), gestion des commandes |

Les deux pages sont autonomes (HTML + CSS + JS en un seul fichier chacune), sans build ni dépendance à installer.

## Fonctionnement

### Site public (`index.html`)
- Menu fidèle à la carte du café, organisé en onglets (Cafés & Thés, Douceurs glacées, Mojitos & Jus, Pâtisseries, Crêpes, Restau M&M, Chicha, Petit Déj & Enfants).
- Panier flottant avec quantités, persisté en `localStorage`.
- Checkout : nom, téléphone, sur place (avec n° de table) ou à emporter, note.
- Suivi de commande en temps réel : Reçue → En préparation → Prête → Servie.

### Espace admin (`admin.html`)
- Connexion par identifiant / mot de passe.
- Filtres de période : Jour / Semaine / Mois / Tout.
- Statistiques : chiffre d'affaires (hors annulées), nombre de commandes, panier moyen, commandes en attente.
- Courbe du chiffre d'affaires cumulé (SVG, tooltip au survol).
- Liste des commandes avec filtres par statut, avancement de statut, annulation, actualisation automatique (10 s) et notification de nouvelle commande.

## Technique

- **Front :** HTML/CSS/JS vanilla. Polices Google (Oswald, Inter, Great Vibes).
- **Backend :** [Supabase](https://supabase.com) (PostgreSQL).
  - Table `mister_m_orders` : commandes (RLS activé, accès anon insert/select/update).
  - Table `mister_m_admins` : comptes staff — **non exposée à l'API**. La connexion passe par la fonction `mister_m_login(u, p)` (`security definer`, hash SHA-256) qui ne renvoie jamais le mot de passe.
- **Hébergement :** [Vercel](https://vercel.com).

## Identité visuelle

- Palette : noir `#111010`, crème `#f6f2e9`, doré `#c8a24b`.
- Typographie : Oswald (titres), Inter (texte), Great Vibes (accents).
- Logo recréé en SVG.

## Déploiement

Site statique — glisser les deux fichiers sur n'importe quel hébergement statique (Vercel, Netlify, etc.). Aucune étape de build.

Les clés Supabase présentes dans le code sont des clés **publishable** (publiques par conception, protégées côté base par les politiques RLS).
