var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Create the shape
let geometry = new THREE.BoxGeometry(1,1,1);

// Create a material, colour or image texture
let material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        wireframe: true
});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Game Logic
let update = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.001;
};

// Draw scene
let render = function () {
    renderer.render(scene, camera);
};

// Run game loop
let gameLoop = function () {
    requestAnimationFrame(gameLoop);
    update();
    render();
};

gameLoop();
