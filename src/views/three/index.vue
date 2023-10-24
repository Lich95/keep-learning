<template></template>
<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//创建3D场景
const scene = new THREE.Scene();
//创建相机视角
const camera = new THREE.PerspectiveCamera(
    60, //视野广角
    window.innerWidth / window.innerHeight,  //宽高比 
    0.1,// 最近
    1000//最远
)
camera.position.y = 5

//创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //设置宽高
document.body.appendChild(renderer.domElement);//追加到dom

//创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
//创建的材质
const material = new THREE.MeshBasicMaterial({ color: 'red' })
//创建网格
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0,2,0)
scene.add(cube);

const gridHelper = new THREE.GridHelper(10,10)
scene.add(gridHelper)
// 轨道控制器
const controls = new OrbitControls(camera,renderer.domElement )


controls.addEventListener('change',()=>{
    console.log('触发轨道控制器')
})
//添加阻尼
controls.enableDamping = true;
controls.dampingFactor = 0.01
//自动旋转
// controls.autoRotate = true
// controls.autoRotateSpeed = 5

camera.position.z = 5;
camera.lookAt(0, 0, 0);
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update() //轨道控制器更新
    renderer.render(scene, camera);
}

animate();

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

canvas {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}
</style>