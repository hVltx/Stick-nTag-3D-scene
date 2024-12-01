Stick'nTag 3D Interactive Demo
📖 Introduction
Ce projet est une démonstration interactive en 3D, de mon projet de Crowfundind Stick'nTag. L'objectif principal est d'illustrer les possibilités d'utilisation de Stick'nTag dans un environnement domestique simulé.

La scène représente l'intérieur d'un petit appartement, dans lequel des Stick'nTag sont placés à des emplacements stratégiques. Les utilisateurs peuvent interagir avec ces Stick'nTag en déplaçant leur souris (représentée par une icône de téléphone) et en cliquant dessus. Lors d'une interaction, une animation visuelle guide l'utilisateur et déclenche une notification simulée, semblable à celle qu'un téléphone afficherait après avoir activé l'action enregistrée sur un Stick'nTag.

🎯 Objectifs
Créer une scène réaliste : Conception d’un appartement virtuel avec un mobilier commun.
Intégrer les Stick'nTag : Modélisation 3D personnalisée et placement stratégique dans la scène.
Stimuler l’interaction utilisateur : Création d’animations visuelles et d’une simulation de notification.
Visualiser les fonctionnalités Stick'nTag : Montrer de manière immersive comment ces stickers peuvent être utilisés dans un cadre réel.
🛠️ Démarche de création
1. Conception de la scène 3D
La scène a été réalisée en utilisant Three.js, suivant une approche méthodique acquise lors d’un cours sur le sujet.
Modélisation d’un appartement vu de face, avec du mobilier importé depuis des bases de données de modèles 3D.
2. Intégration des Stick'nTag
Modélisation des Stick'nTag dans Fusion 360 pour obtenir des objets 3D précis.
Importation des modèles dans la scène et placement sur :
La table de nuit.
Le bureau.
À côté de la porte.
La table basse.
3. Ajout des animations
Création d’un halo lumineux clignotant autour des Stick'nTag pour capter l’attention des utilisateurs.
Animation conçue pour inciter à cliquer sur les Stick'nTag.
4. Interactions utilisateur
Lorsqu’un Stick'nTag est cliqué :
Une action simulée est déclenchée.
Une notification apparaît directement dans l'interface HTML (en dehors de la scène 3D) pour représenter l'activation de l’action sur un téléphone.
Note : La notification n’est pas intégrée à la scène 3D pour des raisons esthétiques.
🌟 Améliorations possibles
Plusieurs améliorations peuvent être apportées à ce projet :

Limiter la navigation dans la scène :

Actuellement, il est possible de naviguer librement à 360° et de sortir des limites de l’appartement.
Une contrainte de caméra serait à intégrer pour maintenir l’immersion.
Personnalisation du pointeur de souris :

Bien qu’un changement de pointeur ait été effectué dans le fichier style.css, l’image personnalisée d’un téléphone n’a pas pu être appliquée correctement. Une meilleure gestion des dimensions et des formats d’image pourrait résoudre ce problème.
Amélioration des notifications :

Ajouter des notifications plus immersives ou les intégrer visuellement à la scène 3D.
Enrichissement des interactions :

Ajouter d’autres fonctionnalités pour chaque Stick'nTag, comme le déclenchement de sons ou l’affichage d’animations supplémentaires.