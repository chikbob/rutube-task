<template>
  <div :class="cnAgain('')">
    <img :class="cnAgain('banner')" src="../../assets/again-banner.png" alt="complete-banner.png">
    <form :class="cnAgain('form')">
      <div :class="cnAgain('form-header')">
        Вы уже прошли этот опрос
      </div>
      <div :class="cnAgain('form-description')">
        Спасибо, что делитесь мнением<br>и помогаете нам быть лучше
      </div>
      <a href="https://rutube.ru/" target="_blank" :class="cnAgain('form-button')">
        Перейти на RUTUBE
      </a>
    </form>
  </div>
</template>

<script setup>
import {cnAgain} from "./again-page.const.js"
import {computed} from "vue";
import {useRoute} from "vue-router";
import {gradeModel} from "../main-page/main-page.model.js";
import {reviewModel} from "../review-page/review-page.model.js";
import {router} from "../../router.js";

const modelGrade = gradeModel();
const modelReview = reviewModel();
const route = useRoute();
const currentUrl = window.location.href;

if (currentUrl === 'http://localhost:5173/again') {
  router.go(-1)
}

const grade = computed(() => route.query.grade || modelGrade.grade);
const review = computed(() => route.query.review || modelReview.review);

const parsedReview = parseReviewArray(review.value)

console.log("Оценка: " + grade.value)
console.log(parsedReview)

function parseReviewArray(reviewArray) {
  try {
    return reviewArray.map((item) => JSON.parse(item));
  } catch (err) {
    JSON.parse(reviewArray);
  }
}
</script>

<style lang="scss" scoped>
@import "../../../public/scss/media_mixin.scss";

.again-page {
  @include _1250 {
    width: 100% !important;
  }

  @include _1024 {

  }

  @include _665 {
    &__banner {
      width: 100% !important;
      height: auto !important;

      margin: 21px 0 0;
    }

    &__form {
      width: 100% !important;
      height: 177px;

      margin: 22px 0 0 !important;
      padding: 0 !important;

      &-header {
        font-size: 22px !important;
        font-weight: 700;
        text-align: center;
      }

      &-description {
        width: 100% !important;

        font-size: 17px;
        font-weight: 400;
        line-height: 22px;

        margin: 14px 0 !important;
      }
    }


  }


  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1053px;

  &__banner {
    width: 524px;
    height: 232px;
  }

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
      width: 530px;
      height: 44px;

      color: rgb(255, 255, 255);
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;

      text-align: center;

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