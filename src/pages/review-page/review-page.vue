<template>
  <div :class="cnReview('')">
    <div :class="cnReview('header')">
      <div>
        Пожалуйста, ответьте на дополнительные вопросы.
      </div>
      <div>
        <img :class="cnReview('banner')" src="../../assets/review-banner.png" alt="review-banner.png">
      </div>
    </div>
    <form :class="cnReview('task')" @submit.prevent="submit">
      <h3 :class="cnReview('task-header')">
        1. Как быстро вы получили ответ от клиентского сервиса RUTUBE? *
      </h3>
      <div :class="cnReview('task-list')">
        <div v-for="param in timeAccess" :key="param.id">
          <input :class="cnMain('task-list_input')" type="radio" :id="param.id" :value="param.id"
                 v-model="question1" @change="updateQuestion1" required>
          <label :class="cnMain('task-list_label')" :for="param.id">{{ param.text }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        2. Клиентский сервис RUTUBE помог в решении проблемы? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-2'" :value="grade"
                 v-model="question2" @change="updateQuestion2" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-2'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        3. Специалист RUTUBE хорошо изъяснялся и владел языком? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-3'" :value="grade"
                 v-model="question3" @change="updateQuestion3" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-3'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        4. Специалист RUTUBE был отзывчив? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-4'" :value="grade"
                 v-model="question4" @change="updateQuestion4" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-4'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        5. Специалист RUTUBE был компетентен? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-5'" :value="grade"
                 v-model="question5" @change="updateQuestion5" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-5'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        6. Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading10" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-6'" :value="grade"
                 v-model="question6" @change="updateQuestion6" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-6'">{{ grade }}</label>
        </div>
      </div>
      <button :class="cnReview('task-access')" type="submit" :disabled="!isFormValid">Отправить ответы</button>
    </form>
  </div>
</template>

<script setup>
import {cnReview} from "./review-page.const.js";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {cnMain} from "../main-page/main-page.const.js";
import {reviewModel, useReviewStore} from "./review-page.model.js";
import {router} from "../../router.js";

const reviewStore = useReviewStore();
const modelReview = reviewModel();

const route = useRoute();
const grade = localStorage.getItem('grade')
const review = computed(() => route.query.review || modelReview.review);
let reviewComplete = ref(false)

reviewStore.question1 = window.localStorage.getItem('question1') || null;
reviewStore.question2 = window.localStorage.getItem('question2') || null;
reviewStore.question3 = window.localStorage.getItem('question3') || null;
reviewStore.question4 = window.localStorage.getItem('question4') || null;
reviewStore.question5 = window.localStorage.getItem('question5') || null;
reviewStore.question6 = window.localStorage.getItem('question6') || null;

const timeAccess = [
  {
    id: 1,
    text: 'Быстрее чем ожидал',
  },
  {
    id: 2,
    text: 'Как и ожидал',
  },
  {
    id: 3,
    text: 'Медленнеe, чем ожидал',
  }
];
const grading = [1, 2, 3, 4, 5];
const grading10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const question1 = ref(reviewStore.question1 || null);
const question2 = ref(reviewStore.question2 || null);
const question3 = ref(reviewStore.question3 || null);
const question4 = ref(reviewStore.question4 || null);
const question5 = ref(reviewStore.question5 || null);
const question6 = ref(reviewStore.question6 || null);

let questionList = [];

const isFormValid = computed(() => {
  return (
      question1.value !== null && question2.value !== null && question3.value !== null && question4.value !== null && question5.value !== null && question6.value !== null
  );
});

function updateQuestion1(event) {
  reviewStore.setQuestion1(event.target.value);
}

function updateQuestion2(event) {
  reviewStore.setQuestion2(event.target.value);
}

function updateQuestion3(event) {
  reviewStore.setQuestion3(event.target.value);
}

function updateQuestion4(event) {
  reviewStore.setQuestion4(event.target.value);
}

function updateQuestion5(event) {
  reviewStore.setQuestion5(event.target.value);
}

function updateQuestion6(event) {
  reviewStore.setQuestion6(event.target.value);
}

if (question6.value !== null) {
  let questionList = [];
  const gradeList = [question1.value, question2.value, question3.value, question4.value, question5.value, question6.value];
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

function submit() {
  questionList = [];
  const gradeList = [question1.value, question2.value, question3.value, question4.value, question5.value, question6.value];
  for (let i = 1; i <= 6; i++) {
    let questionForm = JSON.stringify({
      questionID: i,
      responseID: parseInt(gradeList[i - 1]),
    });
    questionList.push(questionForm);
  }
  reviewComplete = true
  modelReview.init(questionList);
  router.push({
    path: "/complete",
    query: {
      grade: grade,
      review: questionList,
      reviewComplete: reviewComplete
    },
  });
}
</script>


<style lang="scss" scoped>
@import "../../../public/scss/media_mixin.scss";

.review-page {
  @include _1250 {
    width: 1024px;
    padding: 0 0 24px;
    margin: 0 0 102px;

    &__header {
      display: flex;

      margin: 16px 0 28px;

      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
    }

    &__task {
      &-header {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
      }

      &-list {
        margin: 0 0 20px;

        & label {
          width: 200px;
          height: 40px;

          padding: 0 16px 0 16px;
          margin: 0 0 8px;
        }
      }

      &-grading {
        display: flex;

        margin: 0 0 28px;

        & label {
          width: 40px;
          height: 40px;

          margin: 0 8px 0 0;
        }
      }

      &-access {
        width: 222px;
        height: 44px;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }

    &__banner {
      position: absolute;
      width: 548px !important;
      height: 509px !important;

      left: 46% !important;
      bottom: 20% !important;
    }
  }

  @include _1024 {
    width: 100% !important;
    padding: 0 0 24px;
    margin: 0 0 102px;

    &__header {
      display: flex;

      margin: 16px 0 28px 16px !important;

      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
    }

    &__task {
      margin: 0 0 0 16px;

      &-header {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
      }

      &-list {
        margin: 0 0 20px;

        & label {
          width: 200px;
          height: 40px;

          padding: 0 16px 0 16px;
          margin: 0 0 8px;
        }
      }

      &-grading {
        display: flex;

        margin: 0 0 28px;

        & label {
          width: 40px;
          height: 40px;

          margin: 0 8px 0 0;
        }
      }

      &-access {
        width: 222px;
        height: 44px;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }

    &__banner {
      position: relative;
      width: 50% !important;
      height: auto !important;
      margin: 0 !important;

      left: 50% !important;
      bottom: 25% !important;
    }
  }

  @include _768 {
    width: 100% !important;
    padding: 0 0 24px;
    margin: 0 0 102px;

    &__header {
      display: flex;

      margin: 16px 16px 28px !important;

      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
    }

    &__task {
      margin: 0 16px 0 !important;

      &-header {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
      }

      &-list {
        margin: 0 0 20px;

        & label {
          width: 200px;
          height: 40px;

          padding: 0 16px 0 16px;
          margin: 0 0 8px;
        }
      }

      &-grading {
        display: flex;
        flex-wrap: wrap;

        margin: 0 0 28px;

        & label {
          width: 40px;
          height: 40px;

          margin: 0 8px 0 0;
        }
      }

      &-access {
        width: 222px;
        height: 44px;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }

    &__banner {
      display: none;
    }
  }

  @include _375 {

  }

  width: 1024px;
  padding: 0 0 24px;
  margin: 0 0 102px;

  &__header {
    display: flex;

    margin: 16px 0 28px;

    color: rgb(191, 201, 212);
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
  }

  &__task {
    &-header {
      color: rgb(255, 255, 255);
      font-size: 12px;
      font-weight: 400;
      margin: 8px 0;
    }

    &-list {
      margin: 0 0 20px;

      & input {
        display: none;

        &:checked ~ label {
          background: rgb(49, 60, 75);
        }
      }

      & label {
        display: flex;
        align-items: center;

        width: 200px;
        height: 40px;

        padding: 0 16px 0 16px;

        border: 1px solid rgb(31, 115, 249);
        border-radius: 20px;
        cursor: pointer;

        margin: 0 0 8px;
      }
    }

    &-grading {
      display: flex;

      margin: 0 0 28px;

      & input {
        display: none;

        &:checked ~ label {
          background: rgb(49, 60, 75);
        }
      }

      & label {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;

        border: 1px solid rgb(31, 115, 249);
        border-radius: 20px;
        cursor: pointer;

        margin: 0 8px 0 0;
      }
    }

    &-access {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 222px;
      height: 44px;

      border-radius: 22px;
      background: rgb(0, 161, 231);
      border: 0;
      cursor: pointer;

      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;

      &:disabled {
        cursor: default;
      }
    }
  }

  &__banner {
    position: absolute;
    width: 581px;
    height: 540px;

    left: 50%;
    bottom: 20%;
  }
}
</style>