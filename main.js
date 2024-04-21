import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const animateFuncs = []
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function createLights(x,y,z) {
    // Create one point light and add it to the scene
    const pointLight = new THREE.PointLight( 0xcccccc, 1000 )  

    // Set the point light's position
    pointLight.position.x = x;
    pointLight.position.y = y;
    pointLight.position.z = z;

    // Add the light to the scene
    scene.add( pointLight )
  }

function createGeometry() {
    for(let i = 0; i < 15; i++) {
        const geometry = new THREE.BoxGeometry( i, i, i );
        const material = new THREE.MeshPhongMaterial( { color: Math.floor(Math.random()*16777215), shininess: 2000 } );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set(Math.floor(Math.random()*100) - 50,0,Math.floor(Math.random()*100) - 50)
        animateFuncs.push(() => rotateObj(cube,i))
        scene.add( cube );
    }
}

document.addEventListener("keydown", (e) => {
    var key_press = e.key;
    var key_code = key_press.charCodeAt(0);
    console.log(key_code);
    let dir = camera.rotation;
    let angle = 0;
    let speed = 0.5;
    switch(key_code) {
        case 115:
            speed = speed;
            break;
        case 119:
            speed = -speed;
            break;
        case 97:
            speed = 0;
            angle = 1;
            break;
        case 100:
            speed = 0;
            angle = -1;
            break;
        default:
            speed = 0;
    }
    let vec = new THREE.Vector3(0,0,1);
    vec.applyEuler(dir);
    vec.multiplyScalar(speed);
    // console.log(vec);
    adjustCamera(vec, angle);
})

function adjustCamera(pos_change, angle) {
    console.log(camera.position)
    // pos_change.add(camera.position)
    camera.position.x += pos_change.x;
    camera.position.y += pos_change.y;
    camera.position.z += pos_change.z;

    camera.rotateOnAxis(new THREE.Vector3(0,1,0), (Math.PI/180)*angle);
    // camera.lookAt( 1, 4, 100 );
}

createGeometry();
createLights(3,3,0);
camera.position.set( 0, 0, 0 );

function rotateObj(cube, i) {
    cube.rotation.x += 0.01*i;
    cube.rotation.y += 0.01*i;
}

function animate() {
	requestAnimationFrame( animate );
    animateFuncs.forEach((f) => {
        f()
    })
	renderer.render( scene, camera );
}
animate();
