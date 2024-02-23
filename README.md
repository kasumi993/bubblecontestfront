# Bubble Quiz

Bubble est une plateforme permettant de participer à des concours. Vous pouvez noter des films, personnages, animés etc, puis à la fin retrouver le résultat du concours.

## Pré-requis

Avant de commencer, assurez-vous d'avoir les pré-requis suivants installés sur votre machine :

- **Node.js** : La version 18.17.1 est recommandée pour ce projet. Vous pouvez télécharger Node.js depuis [le site officiel](https://nodejs.org/).
- **API "bubbleback"** : Il est nécessaire de lancer l'API "Bubbleback" avant de démarrer le projet. Pour cela, veuillez vous référer au repository de l'API pour obtenir des instructions détaillées sur la manière de la lancer. `https://gitlab.com/bubbleproject/bubbleback`

## Technologies Utilisées

Ce projet utilise les technologies suivantes :

- **Vue 3** : Un framework progressif pour construire des interfaces utilisateur.
- **Pinia** : La bibliothèque de gestion d'état officielle pour Vue.js.
- **Vite** : Un outil de build qui vise à fournir une expérience de développement plus rapide pour les projets modernes.
- **Vitest** : Un framework de test unitaire pour Vue.js, optimisé pour Vite.
- **SonarQube** : Un outil d'analyse de la qualité du code qui effectue des revues automatiques avec des tests statiques du code pour détecter des bugs, des problèmes de conception dans le code, et des vulnérabilités de sécurité.
- **ESLint** : Un outil d'analyse statique du code pour identifier les modèles problématiques trouvés dans le code JavaScript.
- **Cypress** : Un framework de test end-to-end pour le web.
- **Tailwind CSS** : Un framework CSS utility-first pour créer rapidement des designs sans avoir à quitter votre HTML.
- **Sass** : Une techonologie basée sur css pour le style.

## Lancement du Projet

Pour lancer le projet, suivez ces étapes :

1. Clonez le dépôt Git.
2. Assurez vous de cloner le depot back et de suivre les instrcutions de lancement avant de proceder à l'etape 3 (https://gitlab.com/bubbleproject/bubbleback).
3. Ouvrez un terminal à la racine du projet.
4. Créez le fichier .env et ajoutez la variable suivante : 

`VITE_API_URI="URL_API"`
_(par défaut URL_API = http://localhost:3000)_

ex: VITE_API_URI="http://localhost:3000"

4. Installez les dépendances en exécutant :

`npm install`


5. Lancez le serveur de développement avec :

`npm run dev`


## Tests

Les tests sont effectués via GitLab CI au moment des pushs. Ils incluent :

- Tests unitaires avec **Vitest**.
- Analyse de la qualité du code avec **SonarQube**.
- Tests E2E avec **Cypress**.

Pour lancer les tests manuellement :

- Pour les tests unitaires : `npm run test:unit`
- Pour les tests E2E : `npm run test:e2e`


## Utilisation

Pour utiliser l'application, il est obligatoire de créer un compte. Nous avons également créé deux comptes de test pour faciliter la prise en main (vous pouvez également créer un utilisateur sur le site en appuyant sur 'creer un compte'):

**Utilisateur Gratuit** :
- Login : user@test.com
- Mot de passe : testtest

**Utilisateur "Premium"** :
- Login : premium@test.com
- Mot de passe : testtest


**NB:** pour tester l'interface, il est mieux de se placer sur la branche feat/add-contest-page , cette branceh contient le système de connextion fonctionnel, l'animation du site et autres. 
Pour les tests sonarcube, vous pouvez rester sur la branche main ou develop.

Le compte premium permet l'accès à des quiz supplémentaires.


## Branche par défaut 
Veuillez vous placer sur la branche develop plutôt que main

## Test Cypress
Les tests cypress sont sur la branche feat/test-cypress. Ils sont valides en local, pas sur la ci, d'où le fait que la branche ne soit pas merge sur develop
