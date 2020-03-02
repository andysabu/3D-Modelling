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

let loader = new THREE.GLTFLoader();
loader.load(
    // resource URL
	// 'sources/models/phoenix/scene.gltf',
	// 'sources/models/datsun/datsun.gltf',
	'sources/models/Biela.glb',
	// called when the resource is loaded
	function ( json ) {

		scene.add( json.scene );

		json.animations; // Array<THREE.AnimationClip>
		json.scene; // THREE.Group
		json.scenes; // Array<THREE.Group>
		json.cameras; // Array<THREE.Camera>
		json.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

camera.position.z = 3;

// Light
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
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