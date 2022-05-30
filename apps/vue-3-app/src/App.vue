<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { AwesomeButton } from "awesome-button";
</script>

<template>
  <div>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <AwesomeButton msg="hello" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
