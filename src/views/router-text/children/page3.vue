<template>
<div>
    {{ id }}
</div>
</template>
<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
let id = route.params.id ?? '没有获取到id'
</script>
<style scoped lang="scss">
</style>    