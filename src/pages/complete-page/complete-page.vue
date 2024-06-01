<template>
  <div :class="cnComplete('')">
    <img :class="cnComplete('banner')" src="../../assets/complete-banner.png" alt="complete-banner.png">
    <form :class="cnComplete('form')">
      <div :class="cnComplete('form-header')">
        Спасибо за обратную связь!
      </div>
      <div :class="cnComplete('form-description')">
        Это поможет нам улучшить сервис
      </div>
      <a href="https://rutube.ru/">
        <button :class="cnComplete('form-button')">
          Перейти на платформу
        </button>
      </a>
    </form>
  </div>
</template>

<script setup>
import {cnComplete} from "./complete-page.const.js"
import {computed} from "vue";
import {useRoute} from "vue-router";
import {gradeModel} from "../main-page/main-page.model.js";
import {reviewModel} from "../review-page/review-page.model.js";

const modelGrade = gradeModel();
const modelReview = reviewModel();

const route = useRoute();
const grade = computed(() => route.query.grade || modelGrade.grade);
const review = computed(() => route.query.review || modelReview.review);
const parsedReview = parseReviewArray(review.value)

console.log("Оценка: "+grade.value)
console.log(parsedReview)

function parseReviewArray(reviewArray) {
  return reviewArray.map((item) => JSON.parse(item));
}
</script>

<style lang="scss" scoped>
.complete-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1053px;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 550px;
    height: 177px;

    margin: 12px 0 0;
    padding: 10px;

    &-header {
      color: rgb(255, 255, 255);
      font-size: 30px;
      font-weight: 700;
    }

    &-description {
      color: rgb(255, 255, 255);
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;

      margin: 28px 0;
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 222px;
      height: 44px;

      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      border: 0;
      cursor: pointer;

      border-radius: 22px;
      background: rgb(0, 161, 231);
    }
  }
}
</style>