<template>
    <div class="tabs">
        <input type="radio" id="home" name="menus">
        <input type="radio" id="profile" name="menus">
        <input type="radio" name="menus" id="likes">
        <input type="radio" name="menus" id="settings">
        <input type="radio" name="menus" id="notification">

        <div class="buttons">
            <label for="home"><AppleOutlined /></label>
            <label for="profile"><GithubOutlined /></label>
            <label for="likes"><ChromeOutlined /></label>
            <label for="settings"><WechatOutlined /></label>
            <label for="notification"><QqOutlined /></label>
        </div>
    </div>
    <div class="underline"></div>
</template>
<script setup>
import { AppleOutlined,GithubOutlined,ChromeOutlined,WechatOutlined,QqOutlined} from '@ant-design/icons-vue';


</script>
<style scoped>
</style>