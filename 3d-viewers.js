import * as THREE from './vendor/three/build/three.module.js';
import { OrbitControls } from './vendor/three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from './vendor/three/examples/jsm/loaders/OBJLoader.js';

window.PORTFOLIO_THREE = { THREE, OrbitControls, OBJLoader };

const viewerConfigs = [
  {
    containerId: 'viewer-proto',
    url: 'assets/projects/proto/Cone Pistolet DV.obj',
    color: 0x5b7cff,
    label: 'Cône pistolet'
  }
];

function createViewer(container, url, color, label) {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(2.6, 1.8, 4.2);

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
  controls.maxDistance = 16;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.15));

  scene.add(new THREE.AxesHelper(1.25));
  scene.add(new THREE.GridHelper(4, 8, 0x93c5fd, 0xcbd5e1));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
  keyLight.position.set(4, 6, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x7dd3fc, 0.65);
  fillLight.position.set(-3, 2, -4);
  scene.add(fillLight);

  const loader = new OBJLoader();
  const loadingLabel = document.createElement('div');
  loadingLabel.className = 'viewer-loading';
  loadingLabel.textContent = `Chargement du modèle ${label}…`;
  container.appendChild(loadingLabel);

  const resolvedUrl = encodeURI(url);

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
        if (child.geometry) {
          child.geometry.computeBoundingBox();
          child.geometry.center();
          child.geometry.computeBoundingSphere();
        }
        child.material = new THREE.MeshBasicMaterial({
          color: 0x2563eb,
          side: THREE.DoubleSide
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
    const scale = 1.8 / maxDim;

    object.scale.setScalar(scale);
    object.position.set(0, 0, 0);
    scene.add(object);

    const helper = new THREE.BoxHelper(object, 0x4f6ef7);
    scene.add(helper);

    const framedBox = new THREE.Box3().setFromObject(object);
    const framedCenter = framedBox.getCenter(new THREE.Vector3());
    const framedSize = framedBox.getSize(new THREE.Vector3());
    const framedMaxDim = Math.max(framedSize.x, framedSize.y, framedSize.z) || 1;
    const fitDistance = (framedMaxDim / 2) / Math.tan((camera.fov * Math.PI) / 360) * 1.8;

    camera.position.set(fitDistance * 0.15, fitDistance * 0.08, fitDistance);
    camera.lookAt(framedCenter);
    controls.target.set(0, 0, 0);
    controls.minDistance = fitDistance * 0.45;
    controls.maxDistance = fitDistance * 5;
    controls.update();

    loadingLabel.remove();
    animate();
  };

  const handleError = (error) => {
    console.error(`Impossible de charger ${url}`, error);
    loadingLabel.textContent = 'Le modèle n’a pas pu être chargé.';
  };

  loader.load(resolvedUrl, handleModel, undefined, handleError);

  window.addEventListener('resize', resizeRenderer);
  new ResizeObserver(resizeRenderer).observe(container);
}

function initViewers() {
  viewerConfigs.forEach(({ containerId, ...config }) => {
    const container = document.getElementById(containerId);
    if (container && config) {
      createViewer(container, config.url, config.color, config.label);
    }
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initViewers, { once: true });
} else {
  initViewers();
}