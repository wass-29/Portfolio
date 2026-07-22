import * as THREE from './vendor/three/build/three.module.js';
import { OrbitControls } from './vendor/three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from './vendor/three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from './vendor/three/examples/jsm/loaders/MTLLoader.js';

window.PORTFOLIO_THREE = { THREE, OrbitControls, OBJLoader, MTLLoader };

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
    mtlUrl: 'assets/projects/bim/Assemblage GC V2.mtl',
    color: 0x8b5cf6,
    label: 'Assemblage BIM'
  }
];

function createViewer(container, url, color, label, mtlUrl) {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(2.4, 1.6, 3.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.4));
  renderer.setSize(container.clientWidth || 320, container.clientHeight || 260);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.touchAction = 'none';
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.zoomSpeed = 1.1;
  controls.autoRotate = false;
  controls.minDistance = 0.8;
  controls.maxDistance = 12;
  controls.target.set(0, 0.15, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.15));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
  keyLight.position.set(4, 6, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x7dd3fc, 0.65);
  fillLight.position.set(-3, 2, -4);
  scene.add(fillLight);

  const floor = new THREE.Mesh(
  const loader = new OBJLoader();
  const mtlLoader = new MTLLoader();
  const loadingLabel = document.createElement('div');
  loadingLabel.className = 'viewer-loading';
  loadingLabel.textContent = `Chargement du modèle ${label}…`;
  container.appendChild(loadingLabel);

  const resolvedUrl = encodeURI(url);
  const resolvedMtlUrl = mtlUrl ? encodeURI(mtlUrl) : null;

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  const resizeRenderer = () => {
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const handleModel = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color,
          metalness: 0.25,
          roughness: 0.45,
          emissive: 0x07111f,
          emissiveIntensity: 0.16,
          flatShading: false
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const fallback = document.createElement('div');
    fallback.className = 'viewer-fallback';
    fallback.textContent = 'Vue 3D prête — faites glisser pour la manipuler';
    container.appendChild(fallback);

    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    object.position.sub(center);
    object.scale.setScalar(2.0 / maxDim);
    scene.add(object);

    const fitDistance = 2.0 / Math.tan((camera.fov * Math.PI) / 360) * 1.15;
    camera.position.set(fitDistance * 0.25, fitDistance * 0.12, fitDistance);
    controls.target.set(0, 0, 0);
    controls.minDistance = fitDistance * 0.45;
    controls.maxDistance = fitDistance * 5;

    loadingLabel.remove();
    animate();
  };

  const handleError = (error) => {
    console.error(`Impossible de charger ${url}`, error);
    loadingLabel.textContent = 'Le modèle n’a pas pu être chargé.';
  };

  const loadObject = () => {
    loader.load(resolvedUrl, handleModel, undefined, handleError);
  };

  if (resolvedMtlUrl) {
    mtlLoader.load(
      resolvedMtlUrl,
      (materials) => {
        materials.preload();
        loader.setMaterials(materials);
        loadObject();
      },
      undefined,
      loadObject
    );
  } else {
    loadObject();
  }

  window.addEventListener('resize', resizeRenderer);
  new ResizeObserver(resizeRenderer).observe(container);
}

function initViewers() {
  viewerConfigs.forEach(({ containerId }) => {
    const container = document.getElementById(containerId);
    const config = viewerConfigs.find((entry) => entry.containerId === containerId);
    if (container && config) {
      createViewer(container, config.url, config.color, config.label, config.mtlUrl);
    }
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initViewers, { once: true });
} else {
  initViewers();
}