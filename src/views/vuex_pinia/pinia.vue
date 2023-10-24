<template>
    <div>
        {{ useCounter.count }}
        {{ useCounter.doubleCount }}
        <a-button @click="useCounter.countPlus('a')">+1</a-button>

        <div>
            <PlayCircleOutlined />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCount } from '../../store/pinia/index.js'
import {PlayCircleOutlined
} from '@ant-design/icons-vue';
const useCounter = useCount();

</script>
<style scoped lang="scss"></style>