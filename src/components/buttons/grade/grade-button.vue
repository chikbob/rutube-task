<template>
  <div :class="cnGradeButton('')">
    <input :class="cnGradeButton('input')" id="grade" type="radio" :value="props.rating">
    <label :class="cnGradeButton('label')" for="grade">{{ props.rating }}</label>
  </div>

</template>

<script setup>
import {cnGradeButton} from "./grade-button.const.js"

let props = defineProps({
  rating: Number
})
</script>

<style lang="scss" scoped>
.grade-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border: 1px solid rgb(31, 115, 249);
  border-radius: 20px;

  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  &__label {

  }

  &__input {
    overflow: hidden;

    &:not(:checked) > input {
      display: none;
    }

    &:not(:checked) > label {
      float: right;
      width: 42px;
      padding: 0;
      cursor: pointer;
      font-size: 46px;
      line-height: 46px;
      color: lightgrey;
    }
  }
}
</style>