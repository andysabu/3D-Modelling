var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Game Logic
let update = function () {

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
