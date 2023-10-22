<template>
    <div>
        {{ store.state.user.userName }}
        <a-button @click="changeName('cc')"></a-button>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const changeName = (name) => {
    store.commit('changeUserName', name)
}

</script>
<style scoped lang="scss"></style>