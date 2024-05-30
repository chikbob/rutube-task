<template>
  <Header/>
  <router-view></router-view>
</template>

<script setup>
import Header from "../../components/header/header.vue";
</script>

<style lang="scss">
body {
  margin: 0;
  border: 0;

  min-height: 100dvh;

  color: rgb(255, 255, 255);
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}
</style>
