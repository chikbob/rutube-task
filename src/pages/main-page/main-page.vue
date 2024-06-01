<template>
  <div :class="cnMain('')">
    <img :class="cnMain('banner')" src="../../assets/reviews.png" alt="reviews.png">
    <div :class="cnMain('grade')">
      <div :class="cnMain('grade-label')">
        Уважаемый клиент!
      </div>
      <div :class="cnMain('grade-description')">
        Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0
        до 9, где 0 является «Хуже некуда» и 9 — «Отлично».
      </div>
      <form :class="cnMain('grade-list')">
        <div v-for="rating in ratings" :key="rating">
          <input @click="access(rating)" :class="cnMain('grade-input')" type="radio" :id="rating" :value="rating"
                 v-model="grade">
          <label :class="cnMain('grade-item')" :for="rating">{{ rating }}</label>
        </div>
      </form>
      <div :class="cnMain('grade-grading')">
        <div :class="cnMain('grade-grading_text')">
          Хуже некуда
        </div>
        <div :class="cnMain('grade-grading_text')">
          Отлично
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {cnMain} from "./main-page.const.js"
import {ref} from "vue";
import {gradeModel} from "./main-page.model.js";
import {router} from "../../router.js";

let grade = ref(null);
const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const modelGrade = gradeModel();
const storedValue = localStorage.getItem('reviewCompleteValue');

function access(rating) {
  grade.value = rating;
  modelGrade.init(grade.value);

  router.push({path: "/review", query: {grade: grade.value}});
}
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 1053px;
  margin: 21px 113.5px;

  &__banner {
    height: 200px;
  }

  &__grade {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 22px 0 0;

    &-label {
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      text-align: center;
    }

    &-description {
      width: 530px;

      color: rgb(255, 255, 255);
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;

      margin: 28px 0;

      text-align: center;
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 530px;
      height: 40px;
    }

    &-input {
      display: none;

      &:checked ~ label {
        background: rgb(49, 60, 75);
      }
    }

    &-item {
      padding: 10.5px 15.07px;

      margin: 0 14.44px 0 0;

      border: 1px solid rgb(31, 115, 249);
      border-radius: 20px;

      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;

      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }

    &-grading {
      display: flex;
      justify-content: space-between;

      width: 530px;
      height: 20px;

      margin: 8px 0 0;

      &_text {
        color: rgb(191, 201, 212);
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
}
</style>