<template>
    <div>
        page2
        <button @click="addQuery">addQuery</button>
    </div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const addQuery =()=>{
    router.push({query:{id:22}})
}
</script>
<style scoped lang="scss"></style>