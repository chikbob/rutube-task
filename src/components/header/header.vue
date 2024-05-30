<template>
  <header :class="cnHeader()">
    <a href="/">
      <img src="../../../src/assets/logo.png" :class="cnHeader('logo')" alt="logo.png">
    </a>
  </header>
</template>

<script setup>
import {cnHeader} from "./header.const.js";
</script>

<style lang="scss">

.header {
  display: flex;
  align-items: center;

  margin: 0 113.5px;

  width: 1053px;
  height: 96px;

  border-bottom: 2px solid;
  border-image: linear-gradient(45deg, rgb(6, 153, 219),rgb(45, 94, 135) 25%,rgb(46, 42, 63) 50%,rgb(52, 25, 38) 75%,rgb(21, 12, 21) 100%) 1;

  &__logo {
    width: 148px;
    height: 40px;
  }


  //@include _1700 {
  //
  //}
  //
  //@include _1570 {
  //
  //}
  //
  //@include _1250 {
  //
  //}
  //
  //@include _1170 {
  //
  //}
  //
  //@include _979 {
  //
  //}
  //
  //@include _768 {
  //
  //}
  //
  //@include _600 {
  //
  //}
  //
  //@include _480 {
  //
  //}
  //
  //@include _350 {
  //
  //}
}
</style>
