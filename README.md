
# Stick'nTag 3D Interactive Demo 🚀

## 📖 Introduction

Ce projet est une démonstration interactive en 3D de mon projet de crowdfunding **Stick'nTag**.  
L'objectif principal est d'illustrer les possibilités d'utilisation de Stick'nTag dans un environnement domestique simulé.  

La scène représente l'intérieur d'un petit appartement, dans lequel des **Stick'nTag** sont placés à des emplacements stratégiques. Les utilisateurs peuvent interagir avec ces Stick'nTag en déplaçant leur souris (représentée par une icône de téléphone) et en cliquant dessus.  
Lors d'une interaction, une animation visuelle guide l'utilisateur et déclenche une notification simulée, semblable à celle qu'un téléphone afficherait après avoir activé l'action enregistrée sur un Stick'nTag.

---

## 🎯 Objectifs

- **Créer une scène réaliste** : Conception d’un appartement virtuel avec un mobilier commun.
- **Intégrer les Stick'nTag** : Modélisation 3D personnalisée et placement stratégique dans la scène.
- **Stimuler l’interaction utilisateur** : Création d’animations visuelles et d’une simulation de notification.
- **Visualiser les fonctionnalités Stick'nTag** : Montrer de manière immersive comment ces stickers peuvent être utilisés dans un cadre réel.

---

## 🛠️ Démarche de création

### 1️⃣ Conception de la scène 3D
- Réalisation de la scène avec **Three.js**, en utilisant une approche méthodique.
- Modélisation d’un appartement vu de face, avec du mobilier importé depuis des bases de données de modèles 3D.

### 2️⃣ Intégration des Stick'nTag
- Modélisation des **Stick'nTag** dans **Fusion 360** pour obtenir des objets 3D précis.
- Placement stratégique des modèles dans la scène :
  - Sur la table de nuit.
  - Sur le bureau.
  - À côté de la porte.
  - Sur la table basse.

### 3️⃣ Ajout des animations
- Création d’un halo lumineux clignotant autour des Stick'nTag pour capter l’attention des utilisateurs.
- Animation conçue pour inciter à cliquer sur les Stick'nTag.

### 4️⃣ Interactions utilisateur
- Lorsqu’un **Stick'nTag** est cliqué :
  - Une action simulée est déclenchée.
  - Une notification apparaît dans l'interface HTML (en dehors de la scène 3D) pour représenter l'activation de l’action sur un téléphone.

> **Note** : Les notifications sont affichées en dehors de la scène 3D pour des raisons esthétiques.

---

## 💻 Installation

Suivez les étapes ci-dessous pour installer et exécuter le projet localement :

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/stickntag-demo.git
   cd stickntag-demo
   ```

2. **Installer les dépendances** :  
   Assurez-vous d'avoir **Node.js** installé, puis exécutez :
   ```bash
   npm install
   ```

3. **Lancer le projet** :  
   Démarrez le serveur de développement local :
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur** :  
   Accédez à `http://localhost:3000` pour voir le projet en action.

---

## 🌟 Améliorations possibles

- **Limiter la navigation dans la scène** :
  - Actuellement, il est possible de naviguer librement à 360° et de sortir des limites de l’appartement.
  - Ajouter une contrainte de caméra pour maintenir l’immersion.

- **Personnalisation du pointeur de souris** :
  - Bien qu’un changement de pointeur ait été effectué, l’image personnalisée d’un téléphone nécessite une meilleure gestion des dimensions et formats d’image.

- **Amélioration des notifications** :
  - Intégrer des notifications plus immersives visuellement dans la scène 3D.

- **Enrichissement des interactions** :
  - Ajouter d’autres fonctionnalités pour chaque **Stick'nTag** (sons, animations supplémentaires, etc.).

---

## 📂 Structure du projet

```
stickntag-demo/
├── public/          # Fichiers statiques (images, icônes, etc.)
├── src/
│   ├── components/  # Composants 3D et animations
│   ├── styles/      # Fichiers CSS pour le style
│   └── main.js      # Point d'entrée du projet
├── package.json     # Configuration Node.js et scripts
└── README.md        # Documentation du projet
```

---

## 🤝 Contribuer

Les contributions sont les bienvenues !  
Pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3. Effectuez vos modifications et ajoutez des commits (`git commit -m "Ajout d'une nouvelle fonctionnalité"`).
4. Poussez la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5. Ouvrez une Pull Request.

Merci pour votre aide ! ❤️
