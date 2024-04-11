import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function createLights() {
    // Create one point light and add it to the scene
    const pointLight = new THREE.PointLight( 0xcccccc, 40 )

    // Set the point light's position
    pointLight.position.z = 100

    // Add the light to the scene
    scene.add( pointLight )
  }

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x007F00, shininess: 2000 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1,4,100)

scene.add( cube );


camera.position.set( 0, 0, 100 );
camera.lookAt( 1, 4, 100 );
createLights();
// camera.position.z = 5;

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( geometry, material );
// scene.add( line );
// renderer.render( scene, camera );
console.log(cube.position);
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
