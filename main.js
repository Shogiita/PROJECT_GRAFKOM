import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the model
const loader = new GLTFLoader;
loader.load("./models/birds/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
});

loader.load("./models/sun/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
});

loader.load("./models/pine_tree/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
});

loader.load("./models/old_house/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
});

loader.load("./models/mountain_low_poly/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
});

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Set camera position
camera.position.z = 5;

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
