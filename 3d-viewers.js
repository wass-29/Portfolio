import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'https://cdn.jsdelivr.net/npm/three@0.161.0/examples/jsm/loaders/OBJLoader.js';

const viewerConfigs = [
  {
    containerId: 'viewer-proto',
    url: 'assets/projects/proto/Cone Pistolet DV.obj',
    color: 0x5b7cff,
    label: 'Cône pistolet'
  },
  {
    containerId: 'viewer-bim',
    url: 'assets/projects/bim/Assemblage GC V2.obj',
    color: 0x8b5cf6,
    label: 'Assemblage BIM'
  }
];

function createViewer(container, url, color, label) {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(2.8, 2.1, 3.4);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth || 320, container.clientHeight || 260);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = true;
  controls.autoRotate = false;
  controls.minDistance = 1.4;
  controls.maxDistance = 9;
  controls.target.set(0, 0.4, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.35);
  keyLight.position.set(4, 6, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x7dd3fc, 0.7);
  fillLight.position.set(-3, 2, -4);
  scene.add(fillLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(2.2, 64),
    new THREE.MeshStandardMaterial({ color: 0x0e1426, metalness: 0.1, roughness: 0.8 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.1;
  floor.receiveShadow = true;
  scene.add(floor);

  const loader = new OBJLoader();
  const loadingLabel = document.createElement('div');
  loadingLabel.className = 'viewer-loading';
  loadingLabel.textContent = `Chargement du modèle ${label}…`;
  container.appendChild(loadingLabel);

  loader.load(
    url,
    (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color,
            metalness: 0.25,
            roughness: 0.45,
            emissive: 0x07111f,
            emissiveIntensity: 0.15
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const scale = 2.2 / maxDim;

      object.position.sub(center);
      object.scale.setScalar(scale);
      object.rotation.set(0, 0, 0);
      scene.add(object);

      if (loadingLabel) loadingLabel.remove();
      animate();
    },
    undefined,
    (error) => {
      console.error(`Impossible de charger ${url}`, error);
      if (loadingLabel) {
        loadingLabel.textContent = 'Le modèle n’a pas pu être chargé.';
      }
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  function resizeRenderer() {
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resizeRenderer);
  new ResizeObserver(resizeRenderer).observe(container);
}

window.addEventListener('DOMContentLoaded', () => {
  viewerConfigs.forEach(({ containerId, url, color, label }) => {
    const container = document.getElementById(containerId);
    if (container) {
      createViewer(container, url, color, label);
    }
  });
});
