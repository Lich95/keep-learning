<template>
    <div class="tabs">
        <input type="radio" id="home" name="menus" checked>
        <input type="radio" id="profile" name="menus">
        <input type="radio" name="menus" id="likes">
        <input type="radio" name="menus" id="settings">
        <input type="radio" name="menus" id="notification">

        <div class="buttons">
            <label for="home">
                <AppleOutlined />
            </label>
            <label for="profile">
                <GithubOutlined />
            </label>
            <label for="likes">
                <ChromeOutlined />
            </label>
            <label for="settings">
                <YoutubeOutlined />
            </label>
            <label for="notification">
                <ZhihuOutlined />
            </label>


            <div class="underline"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { AppleOutlined, GithubOutlined, ChromeOutlined, YoutubeOutlined, ZhihuOutlined } from '@ant-design/icons-vue';


</script>
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #10212b;

    input {
        visibility: hidden;
        display: none;

        &:nth-child(1):checked ~ .buttons label:nth-child(1), 
        &:nth-child(2):checked ~ .buttons label:nth-child(2), 
        &:nth-child(3):checked ~ .buttons label:nth-child(3), 
        &:nth-child(4):checked ~ .buttons label:nth-child(4), 
        &:nth-child(5):checked ~ .buttons label:nth-child(5) {
            color: #fff;
            opacity: 1;
            filter: drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff)
        }
        &:nth-child(1):checked ~ .buttons .underline{
            left:0
        }
        &:nth-child(2):checked ~ .buttons .underline{
            left:20%
        }
        &:nth-child(3):checked ~ .buttons .underline{
            left:40%
        }
        &:nth-child(4):checked ~ .buttons .underline{
            left:60%
        }
        &:nth-child(5):checked ~ .buttons .underline{
            left:80%
        }
    }

    .buttons {
        position: relative;
        display: flex;
        gap: 80px;
        padding: 30px 40px;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        background-color: #1a2d3d;
        border-radius: 20px;

        label {
            width: 20%;
            font-size: 1.75em;
            color: #fff;
            opacity: .2;

            &:hover {
                opacity: 1;
                filter: drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff)
            }
        }

        .underline{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 20%;
            height: 5px;
            transition: 0.5s;
            &:before{
                content:'';
                position: absolute;
                left:50%;
                transform: translateX(-50%);
                width: 40px;
                height: 100% ;
                background-color: #fff;
                border: 5px;
                filter: drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff) drop-shadow(0 0 30px #fff) drop-shadow(0 0 40px #fff)
            }
        }
    }
}</style>