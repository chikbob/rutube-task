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
      <a href="https://rutube.ru/" target="_blank" :class="cnAgain('form-button')">
        Перейти на платформу
      </a>
    </form>
  </div>
</template>

<script setup>
import {cnComplete} from "./complete-page.const.js"
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {gradeModel} from "../main-page/main-page.model.js";
import {reviewModel} from "../review-page/review-page.model.js";
import {completeModel} from "./complete-page.model.js"
import {router} from "../../router.js";
import {cnAgain} from "../again-page/again-page.const.js";

const modelGrade = gradeModel();
const modelReview = reviewModel();
const modelComplete = completeModel();

const route = useRoute();
let grade = computed(() => route.query.grade || modelGrade.grade);
const review = computed(() => route.query.review || modelReview.review);
const reviewComplete = computed(() => route.query.reviewComplete || modelComplete.complete);
const storedValue = localStorage.getItem('reviewCompleteValue');
const question1 = localStorage.getItem('question1');
const question2 = localStorage.getItem('question2');
const question3 = localStorage.getItem('question3');
const question4 = localStorage.getItem('question4');
const question5 = localStorage.getItem('question5');
const question6 = localStorage.getItem('question6')
let firstLogin = ref(localStorage.getItem('firstLogin') || null)

if (question6 != null && firstLogin.value === 'false' || firstLogin.value === false) {
  grade = localStorage.getItem('grade')
  let questionList = [];
  const gradeList = [question1, question2, question3, question4, question5, question6];
  for (let i = 1; i <= 6; i++) {
    let questionForm = JSON.stringify({
      questionID: i,
      responseID: parseInt(gradeList[i - 1]),
    });
    questionList.push(questionForm);
  }
  router.push({
    path: '/again',
    query: {
      grade: grade,
      review: questionList
    }
  })
}

else {
  const parsedReview = parseReviewArray(review.value)

  if (storedValue !== 'true') {
    localStorage.setItem('reviewCompleteValue', reviewComplete.value);
  }

  console.log("Оценка: " + grade.value)
  console.log(parsedReview)

  function parseReviewArray(reviewArray) {
    try {
      return reviewArray.map((item) => JSON.parse(item));
    } catch (err) {
      JSON.parse(reviewArray);
    }
  }

  localStorage.setItem('firstLogin', 'false')
}
</script>

<style lang="scss" scoped>
@import "../../../public/scss/media_mixin.scss";

.complete-page {

  @include _1250 {
    width: 100% !important;
  }

  @include _1024 {

  }

  @include _665 {
    &__form {
      width: 100% !important;
      height: 177px;

      margin: 22px 0 0 !important;
      padding: 0 !important;

      &-header {
        color: rgb(255, 255, 255);
        font-size: 22px !important;
        font-weight: 700;
      }

      &-description {
        color: rgb(255, 255, 255);
        font-size: 17px;
        font-weight: 400;
        line-height: 22px;

        margin: 14px 0 !important;
      }
    }

    &__banner {
      width: 100%;

      margin: 21px 0 0;
    }
  }

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

    & a {
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