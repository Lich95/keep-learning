<template>
    <div></div>
</template>
<script setup lang="ts"> 


    let arr:number[] = [1,2,3]
    let arr2:Array<string> = ['a','b']
    let arr3:[number,string,boolean?] = [3,'c']


    let nums = [1,2,3,4]
    const result = nums.find(x=>x>2) as number //断言 有可能是undefined
    //find返回查找到的第一个 
    //filter返回符合条件的数组
debugger
    //map返回处理过后的值或boolean 长度相同
    let b = result *2

</script>
<style scoped>

</style>