import * as THREE from 'three';
import { BoxGeometry } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const textureLoader = new THREE.TextureLoader();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting setup
const ambient = new THREE.AmbientLight(0xffffff, 0.75);
const pointLight = new THREE.PointLight(0xffffff, 400, 100);
pointLight.position.set(5, 5, 2);
scene.add(ambient, pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);


//orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// BG Ssetup
const bgTexture = textureLoader.load("./space.jpg");
scene.background = bgTexture;
const bgGeometry = new THREE.PlaneGeometry(10, 10);


const color = new THREE.Color( 0xfaf173 );
// sphere setup
const geometry = new THREE.SphereGeometry(10, 50, 50);
const material = new THREE.MeshStandardMaterial({ color: 0xfaf173, opacity:.95, transparent: true, roughness: .6    });
const sphere = new THREE.Mesh(geometry, material);


const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( {color: 0x3663D9, transparent: true } )
);
earth.position.z = -5
earth.position.x = 15
earth.position.y = 15

scene.add(earth)
scene.add(sphere);

// Camera position
camera.position.z = 40;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();