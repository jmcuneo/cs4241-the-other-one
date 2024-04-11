import * as THREE from 'three'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00008b); // Set the background color to light blue
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.rotation.set(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
// const materialBox = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// const cube = new THREE.Mesh( geometry, material ); 
// scene.add( cube );


/**
 * scene.add(cube);
    cube.cursor = 'pointer';
    cube.on('click', function(ev) {});
 */

const materialGrid = new THREE.LineBasicMaterial({color: "#FFFFFF", linecap: "round"});
let cubes = [];
for(let i = 0; i < 3; i++){
    for(let j = 0; j<3; j++){
        const points = [];
    
        points.push(new THREE.Vector3(-3 + j*2, -3 + i*2, -4));
        points.push(new THREE.Vector3(-1 + j*2, -3 + i*2, -4));
        points.push(new THREE.Vector3(-1 + j*2, -1 + i*2, -4));
        points.push(new THREE.Vector3(-3 + j*2, -1 + i*2, -4));
        points.push(new THREE.Vector3(-3 + j*2, -3 + i*2, -4));
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, materialGrid);
        scene.add(line);

        let cubeX = (-2 + j*2);
        let cubeY = (-2 + i*2);
        const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        var materialBox = new THREE.MeshBasicMaterial( {color: "#00008b"} ); 
        const cube = new THREE.Mesh( boxGeometry, materialBox ); 
        cube.position.set(cubeX, cubeY, -4);
        cubes.push(cube);
        // cube.visible = false;
        scene.add( cube );

        var count = 0
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        window.addEventListener('click', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(cubes);
            if(intersects.length > 0){
                if(count % 2 == 0){
                    intersects[0].object.material.color.set("#FF0000");
                }else{
                    intersects[0].object.material.color.set("#00FF00");
                }
                count += 1
            }
        });

    }
    
}


camera.position.z = 5;
let animating = true;

function animate(){
    console.log(animating);
    requestAnimationFrame(animate);
    if(animating){
        camera.rotation.z += 0.01;
        for(let i = 0; i < 9; i++){
            cubes[i].rotation.x += 0.01
        }
    }
    renderer.render(scene, camera);
   
    terminate();
}


function terminate() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var myReq = requestAnimationFrame;

    var stoprender = document.getElementById( 'stoprenderbtn' );
    stoprender.onclick = function StopAnimation() {
        animating = !animating;
        return; 
    };
}

animate();