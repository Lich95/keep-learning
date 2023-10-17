<template>
<div>
</div>
</template>
<script setup>
const objAry = ['a',1,'b',2,'c',33,'d',44];
let ary = [];
for (let i = 0; i < objAry.length; i++) {
        ary.push([objAry[i],objAry[i+1]])
        i++
}
console.log(222,ary)
</script>
<style scoped lang="scss">
</style>