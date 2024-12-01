import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshBasicMaterial, SphereGeometry, Mesh } from 'three';
import { Raycaster, Vector2, TextureLoader, PlaneGeometry, MeshStandardMaterial } from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,15,60);

// Import the canvas element
const canvas = document.getElementById('canvas');

// Create a WebGLRenderer and set its width and height
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // Antialiasing is used to smooth the edges of what is rendered
    antialias: true,
    // Activate the support of transparency
    // alpha: true
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );

// Create the controls
const controls = new OrbitControls(camera, canvas);

// Handle the window resize event
window.addEventListener('resize', () => {
    // Update the camera
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});

// Create Light
const light = new THREE.PointLight( 0xffffff, 1, 0, 0 );
light.position.set( 20, 20, 20 );
scene.add( light );
const light2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
light2.position.set( -20, 20, 20 );
scene.add( light2 );
const light3 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
light3.position.set( 0, 50, 15 );
scene.add( light3 );


// Initialiser le raycaster et le vecteur de la souris
const raycaster = new Raycaster();
const mouse = new Vector2();

const clickableObjects = [
    { object: null, image: '/support/image/Agenda.png' },
    { object: null, image: '/support/image/Airplane.png' },
    { object: null, image: '/support/image/Weather.png' },
    { object: null, image: '/support/image/Spotify.png' }
];

// floor + MURS + PLAFOND
// floor
const geometry_floor = new THREE.BoxGeometry( 20, 1, 40 );
const texture = new THREE.TextureLoader().load( "/support/floor.jpeg" );
const material = new THREE.MeshBasicMaterial( {
  color: 0xffffff,
  map: texture
} );
const floor = new THREE.Mesh( geometry_floor, material );
floor.position.set(-40,-0.5,15.5);
scene.add( floor );
const floor1 = new THREE.Mesh( geometry_floor, material );
floor1.position.set(-20,-0.5,15.5);
scene.add( floor1 );
const floor2 = new THREE.Mesh( geometry_floor, material );
floor2.position.set(0,-0.5,15.5);
scene.add( floor2 );
const floor4 = new THREE.Mesh( geometry_floor, material );
floor4.position.set(20,-0.5,15.5);
scene.add( floor4 );
const floor3 = new THREE.Mesh( geometry_floor, material );
floor3.position.set(40,-0.5,15.5);
scene.add( floor3 );
// MURS
const geometry_backWall = new THREE.BoxGeometry( 50, 1, 30.5 );
const texture_backWall = new THREE.TextureLoader().load( "/support/ppp_stripes.jpg" );
const material_backWall = new THREE.MeshBasicMaterial( {
  color: 0xffffff,
  map: texture_backWall
} );
const backWall = new THREE.Mesh( geometry_backWall, material_backWall );
backWall.position.set(25,15,-4);
backWall.rotation.x = - Math.PI / 2; 
scene.add( backWall );

const geometry_backWall1 = new THREE.BoxGeometry( 50, 1, 30.5 );
const texture_backWall1 = new THREE.TextureLoader().load( "/support/ppp_stripes.jpg" );
const material_backWall1 = new THREE.MeshBasicMaterial( {
  color: 0xffffff,
  map: texture_backWall1
} );
const backWall1 = new THREE.Mesh( geometry_backWall1, material_backWall1 );
backWall1.position.set(-25,15,-4);
backWall1.rotation.x = - Math.PI / 2; 
scene.add( backWall1 );

// PORTE
const geometry_door = new THREE.BoxGeometry( 12, 1, 25 );
const texture_door = new THREE.TextureLoader().load( "/support/door.jpg" );
const material_door = new THREE.MeshBasicMaterial( {
  color: 0xffffff,
  map: texture_door
} );
const door = new THREE.Mesh( geometry_door, material_door );
door.position.set(25,12,-3);
door.rotation.x = - Math.PI / 2; 
scene.add( door );


// PLAFOND
const ceiling = new THREE.Mesh(
    new THREE.BoxGeometry( 100, 1, 40 ),
    new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true })
);
ceiling.position.set(0,30,16.5);
scene.add( ceiling );

//BED
const loader = new GLTFLoader();
loader.load('/support/bed.glb', (gltf) => {
    const bed = gltf.scene;
    bed.scale.set(11, 7, 8);
    bed.position.set(-40, 0, 10); 
    bed.rotation.y = Math.PI / 2;
    scene.add(bed);
});

//NIGHTSTAND
loader.load('/support/nightstand.glb', (gltf) => {
    const nightstand = gltf.scene;
    nightstand.scale.set(11, 7, 8);
    nightstand.position.set(-25, 0, 0); 
    // nightstand.rotation.y = Math.PI / 2;
    scene.add(nightstand);
});
//coffee table
loader.load('/support/coffee_table.glb', (gltf) => {
    const coffee_table = gltf.scene;
    coffee_table.scale.set(10, 10, 10);
    coffee_table.position.set(27, 0, 25); 
    coffee_table.rotation.x = Math.PI/2;
    scene.add(coffee_table);
})

//SOFA
loader.load('/support/sofa.glb', (gltf) => {
    const sofa = gltf.scene;
    sofa.scale.set(1, 1, 1);
    sofa.position.set(40, 0, 20); 
    sofa.rotation.y = - Math.PI / 2;
    scene.add(sofa);
});
//desk
loader.load('/support/desk.glb', (gltf) => {
    const desk = gltf.scene;
    desk.scale.set(9, 9, 9);
    desk.position.set(0, 0, 2); 
    // desk.rotation.x = Math.PI/2;
    scene.add(desk);
})
//Stick nTag
loader.load('/support/stickntag.gltf', (gltf) => {
    const stickntag1 = gltf.scene;
    const blueMaterial = new MeshBasicMaterial({ color: 0xfffff0 });
    stickntag1.traverse((child) => {
        if (child.isMesh) {
            child.material = blueMaterial;
        }
    });
    stickntag1.scale.set(0.02, 0.02, 0.08);
    stickntag1.position.set(-7.7, 9.6, 6); 
    stickntag1.rotation.x = Math.PI/2;
    scene.add(stickntag1);

    // Créer un halo flou autour de l'objet
    const haloMaterial = new MeshBasicMaterial({
        color: 0xffff00, // Jaune brillant
        transparent: true,
        opacity: 0.5, // Partiellement transparent
    });
    const haloGeometry = new SphereGeometry(0.9, 32, 32);
    const halo = new Mesh(haloGeometry, haloMaterial);

    halo.position.copy(stickntag1.position);
    scene.add(halo);

    // Animation pour le clignotement
    let increasing = true;
    const animateHalo = () => {
        if (increasing) {
            halo.material.opacity += 0.01;
            if (halo.material.opacity >= 0.8) increasing = false;
        } else {
            halo.material.opacity -= 0.01;
            if (halo.material.opacity <= 0.3) increasing = true;
        }
    };
    // Ajout de l'animation dans la boucle principale
    function animate() {
        requestAnimationFrame(animate);
        animateHalo();
        renderer.render(scene, camera);
    }
    animate();

    // Définir l'objet comme cliquable
    clickableObjects[0].object = halo;
})
loader.load('/support/stickntag.gltf', (gltf) => {
    const stickntag2 = gltf.scene;
    const blueMaterial = new MeshBasicMaterial({ color: 0x98ff98 });
    stickntag2.traverse((child) => {
        if (child.isMesh) {
            child.material = blueMaterial;
        }
    });
    stickntag2.scale.set(0.02, 0.02, 0.08);
    stickntag2.position.set(-28, 5.92, 2); 
    stickntag2.rotation.x = Math.PI/2;
    scene.add(stickntag2);

    // Créer un halo flou autour de l'objet
    const haloMaterial = new MeshBasicMaterial({
        color: 0xffff00, // Jaune brillant
        transparent: true,
        opacity: 0.5, // Partiellement transparent
    });
    const haloGeometry = new SphereGeometry(0.9, 32, 32);
    const halo = new Mesh(haloGeometry, haloMaterial);

    halo.position.copy(stickntag2.position);
    scene.add(halo);

    // Animation pour le clignotement
    let increasing = true;
    const animateHalo = () => {
        if (increasing) {
            halo.material.opacity += 0.01;
            if (halo.material.opacity >= 0.8) increasing = false;
        } else {
            halo.material.opacity -= 0.01;
            if (halo.material.opacity <= 0.3) increasing = true;
        }
    };
    // Ajout de l'animation dans la boucle principale
    function animate() {
        requestAnimationFrame(animate);
        animateHalo();
        renderer.render(scene, camera);
    }
    animate();

    // Définir l'objet comme cliquable
    clickableObjects[1].object = halo;    
})
loader.load('/support/stickntag.gltf', (gltf) => {
    const stickntag3 = gltf.scene;
    const blueMaterial = new MeshBasicMaterial({ color: 0xff80ab });
    stickntag3.traverse((child) => {
        if (child.isMesh) {
            child.material = blueMaterial;
        }
    });
    stickntag3.scale.set(0.02, 0.02, 0.08);
    stickntag3.position.set(18, 17, -3.4); 
    scene.add(stickntag3);

    // Créer un halo flou autour de l'objet
    const haloMaterial = new MeshBasicMaterial({
        color: 0xffff00, // Jaune brillant
        transparent: true,
        opacity: 0.5, // Partiellement transparent
    });
    const haloGeometry = new SphereGeometry(0.9, 32, 32);
    const halo = new Mesh(haloGeometry, haloMaterial);

    halo.position.copy(stickntag3.position);
    scene.add(halo);

    // Animation pour le clignotement
    let increasing = true;
    const animateHalo = () => {
        if (increasing) {
            halo.material.opacity += 0.01;
            if (halo.material.opacity >= 0.8) increasing = false;
        } else {
            halo.material.opacity -= 0.01;
            if (halo.material.opacity <= 0.3) increasing = true;
        }
    };
    // Ajout de l'animation dans la boucle principale
    function animate() {
        requestAnimationFrame(animate);
        animateHalo();
        renderer.render(scene, camera);
    }
    animate();

    // Définir l'objet comme cliquable
    clickableObjects[2].object = halo;
})
loader.load('/support/stickntag.gltf', (gltf) => {
    const stickntag4 = gltf.scene;
    const blueMaterial = new MeshBasicMaterial({ color: 0x87ceeb });
    stickntag4.traverse((child) => {
        if (child.isMesh) {
            child.material = blueMaterial;
        }
    });
    stickntag4.scale.set(0.02, 0.02, 0.08);
    stickntag4.position.set(27, 4.25, 25);
    stickntag4.rotation.x = Math.PI/2;
    scene.add(stickntag4);

    // Créer un halo flou autour de l'objet
    const haloMaterial = new MeshBasicMaterial({
        color: 0xffff00, // Jaune brillant
        transparent: true,
        opacity: 0.5, // Partiellement transparent
    });
    const haloGeometry = new SphereGeometry(0.9, 32, 32);
    const halo = new Mesh(haloGeometry, haloMaterial);

    halo.position.copy(stickntag4.position);
    scene.add(halo);

    // Animation pour le clignotement
    let increasing = true;
    const animateHalo = () => {
        if (increasing) {
            halo.material.opacity += 0.01;
            if (halo.material.opacity >= 0.8) increasing = false;
        } else {
            halo.material.opacity -= 0.01;
            if (halo.material.opacity <= 0.3) increasing = true;
        }
    };
    // Ajout de l'animation dans la boucle principale
    function animate() {
        requestAnimationFrame(animate);
        animateHalo();
        renderer.render(scene, camera);
    }
    animate();

    // Définir l'objet comme cliquable
    clickableObjects[3].object = halo;
})

// Gestion des clics
window.addEventListener('click', (event) => {
    // Calculer la position de la souris dans l'espace de la scène
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Mettre à jour le raycaster avec la caméra
    raycaster.setFromCamera(mouse, camera);

    // Vérifier les intersections avec les objets cliquables
    const intersects = raycaster.intersectObjects(
        clickableObjects.map((item) => item.object),
        true
    );

    if (intersects.length > 0) {
        // Trouver l'objet cliqué
        const clickedObject = intersects[0].object;

        // Trouver l'image associée
        const item = clickableObjects.find((item) => item.object === clickedObject);
        if (item) {
            displayImage(item.image); // Afficher l'image associée
        }
    }
});

const displayImage = (imagePath) => {
    const overlay = document.getElementById('image-overlay');
    const imageElement = document.getElementById('popup-image');

    // Mettre à jour le chemin de l'image
    imageElement.src = imagePath;

    // Afficher l'image
    overlay.style.display = 'block';

    // Masquer après 4 secondes
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 4000);
};

// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);

    // Update the controls
    controls.update();
    // Render the scene
    renderer.render(scene, camera);
}

// Call animate for the first time
animate();