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

// Once the type of control is imported (OrbitControls.js),
// it is implemented/added to the main render.
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Creating elements
const cubeMaterials = ['img/avatars/Avatar Blogger.png', 'img/avatars/Avatar FB.png',
    'img/avatars/Avatar FLickr.png', 'img/avatars/Avatar IT.png',
    'img/avatars/Avatar O.png', 'img/avatars/Avatar Reddit.png'
];
let cube = buildBox(3, 3, 3, cubeMaterials, THREE.DoubleSide, null, null, null);

const floorMaterials = ['img/clapboard.jpg', 'img/clapboard.jpg', 'img/clapboard.jpg',
    'img/clapboard.jpg', 'img/clapboard.jpg', 'img/clapboard.jpg'
];
let floor = buildBox(10, 1, 10, floorMaterials, THREE.DoubleSide, null, -5, null);

const ceilingMaterials = ['img/ceiling.jpg', 'img/ceiling.jpg', 'img/ceiling.jpg',
    'img/ceiling.jpg', 'img/ceiling.jpg', 'img/ceiling.jpg'
];
let ceiling = buildBox(10, 1, 10, ceilingMaterials, THREE.DoubleSide, null, 5, null);

let wallMaterials = ['img/red-brick.jpg', 'img/red-brick.jpg', 'img/red-brick.jpg',
    'img/red-brick.jpg', 'img/red-brick.jpg', 'img/red-brick.jpg'
];
let rightWall = buildBox(1, 10, 10, wallMaterials, THREE.DoubleSide, 5, null, null);
let leftWall = buildBox(1, 10, 10, wallMaterials, THREE.DoubleSide, -5, null, null);



// Adding elements to scene
scene.add(cube);
scene.add(floor);
scene.add(ceiling);
scene.add(rightWall);
scene.add(leftWall);

camera.position.z = 3;

// Light
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 5.0);
let pointLight1 = new THREE.PointLight(0xFFFFFF, 2, 50);
let pointLight2 = new THREE.PointLight(0xFF0040, 1.2, 50);
let pointLight3 = new THREE.PointLight(0x80FF80, 1.5, 50);

// Adding light to scene
scene.add(ambientLight);
scene.add(pointLight1);
scene.add(pointLight2);
scene.add(pointLight3);

// Game Logic
let update = function () {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.001;
    let time = Date.now() * 0.0005;
    
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