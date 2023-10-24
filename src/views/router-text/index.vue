<template>
<div>
    routerText
    <button><router-link to="/routerTest"> home</router-link> </button>
    <button @click="router.push('/routerTest/page2')">page2</button>
    <button @click="router.push('/routerTest/page3/223')">page3</button>
    <router-view></router-view>
</div>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()
</script>
<style scoped lang="scss">
</style>