<template>
  <div id="rain">
    <div class="clouds">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
    </div>
    <div class="drops"></div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
onBeforeMount(() => { });
onMounted(() => {
  let dropDom = document.querySelector(".drops");
  setInterval(() => {
    let randomNums = Math.random() * 130;
    let randomNum = Math.random() * 20;
    let dropItem = document.createElement("div");
    dropItem.className = "drop";
    dropItem.style.left = randomNums + "px";
    dropItem.style.top = randomNum + "px";
    dropDom.appendChild(dropItem);

    setTimeout(() => {
      dropItem.remove();
    }, 1000);
  }, 100);
});
</script>

<style>
#rain {
  padding: 20vh;
  width: 300px;
  height: 200px;
}

.clouds {
  position: relative;
  z-index: 10;
}

.cloud1 {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: #ccc;
  box-shadow: 30px -7px 0px #ccc;
  position: absolute;
  left: 15px;
  animation: flash2 2s linear infinite;
}

.cloud2 {
  width: 150px;
  height: 50px;
  background: #ccc;
  border-radius: 100px;
  position: absolute;
  top: 35px;
  animation: flash 2s linear infinite;
}

.drops {
  position: relative;
  left: 8px;
  top: 60px;
}

.drop {
  width: 2px;
  height: 10px;
  background-color: #0d8eff;
  position: absolute;
  animation: goDrop 0.8s linear infinite;
}

@keyframes goDrop {
  0% {
    transform: translateY(0) scaleY(1);
  }

  80% {
    transform: translateY(120px) scaleY(0.4);
  }

  90% {
    transform: translateY(120px) scaleY(0.2);
  }

  100% {
    transform: translateY(120px) scaleY(0.2) scaleX(10);
  }
}

@keyframes flash2 {
  0% {
    background-color: #ccc;
    box-shadow: 30px -7px 0px #ccc;
  }

  50% {
    background-color: #ccc;
    box-shadow: 30px -7px 0px #ccc;
  }

  55% {
    background-color: #333;
    box-shadow: 30px -7px 0px #333;
  }

  60% {
    background-color: #ccc;
    box-shadow: 30px -7px 0px #ccc;
  }

  63% {
    background-color: #333;
    box-shadow: 30px -7px 0px #333;
  }

  70% {
    background-color: #333;
    box-shadow: 30px -7px 0px #333;
  }

  100% {
    background-color: #ccc;
    box-shadow: 30px -7px 0px #ccc;
  }
}

@keyframes flash {
  0% {
    background-color: #ccc;
  }

  50% {
    background-color: #ccc;
  }

  55% {
    background-color: #333;
  }

  60% {
    background-color: #ccc;
  }

  63% {
    background-color: #333;
  }

  70% {
    background-color: #333;
  }

  100% {
    background-color: #ccc;
  }
}
</style>