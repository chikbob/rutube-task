<template>
  <div :class="cnReview('')">
    <div :class="cnReview('header')">
      Пожалуйста, ответьте на дополнительные вопросы.
    </div>
    <form :class="cnReview('task')" @submit.prevent="submit">
      <h3 :class="cnReview('task-header')">
        1. Как быстро вы получили ответ от клиентского сервиса RUTUBE? *
      </h3>
      <div :class="cnReview('task-list')">
        <div v-for="param in timeAccess" :key="param.id">
          <input :class="cnMain('task-list_input')" type="radio" :id="param.id" :value="param.id"
                 v-model="question1" required>
          <label :class="cnMain('task-list_label')" :for="param.id">{{ param.text }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        2. Клиентский сервис RUTUBE помог в решении проблемы? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-2'" :value="grade"
                 v-model="question2" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-2'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        3. Специалист RUTUBE хорошо изъяснялся и владел языком? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-3'" :value="grade"
                 v-model="question3" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-3'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        4. Специалист RUTUBE был отзывчив? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-4'" :value="grade"
                 v-model="question4" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-4'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        5. Специалист RUTUBE был компетентен? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-5'" :value="grade"
                 v-model="question5" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-5'">{{ grade }}</label>
        </div>
      </div>
      <h3 :class="cnReview('task-header')">
        6. Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу? *
      </h3>
      <div :class="cnReview('task-grading')">
        <div v-for="grade in grading10" :key="grade">
          <input :class="cnMain('task-grading_input')" type="radio" :id="grade+'-6'" :value="grade"
                 v-model="question6" required>
          <label :class="cnMain('task-grading_label')" :for="grade+'-6'">{{ grade }}</label>
        </div>
      </div>
      <button :class="cnReview('task-access')" type="submit" :disabled="!isFormValid">Отправить ответы</button>
    </form>
    <img :class="cnReview('banner')" src="../../assets/review-banner.png" alt="review-banner.png">
  </div>
</template>

<script setup>
import {cnReview} from "./review-page.const.js"
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {gradeModel} from "../main-page/main-page.model.js";
import {cnMain} from "../main-page/main-page.const.js";
import {reviewModel} from "./review-page.model.js";
import {router} from "../../router.js";

const modelGrade = gradeModel();
const modelReview = reviewModel();
const route = useRoute();
const grade = computed(() => route.query.grade || modelGrade.grade);

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
  }]
const grading = [1, 2, 3, 4, 5]
const grading10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const question1 = ref({})
const question2 = ref(null)
const question3 = ref(null)
const question4 = ref(null)
const question5 = ref(null)
const question6 = ref(null)

let questionList = [];

const isFormValid = computed(() => {
  return question1.value != null && question2.value != null && question3.value != null && question4.value != null && question5.value != null && question6.value != null;
});

function submit() {
  questionList = [];
  const gradeList = [question1.value, question2.value, question3.value, question4.value, question5.value, question6.value];
  for (let i = 1; i <= 6; i++) {
    let questionForm = JSON.stringify({
      questionID: i,
      responseID: gradeList[i - 1]
    });
    questionList.push(questionForm);
  }
  modelReview.init(questionList)
  router.push({
    path: "/complete", query: {
      grade: grade.value,
      review: questionList
    }
  });
}
</script>

<style lang="scss" scoped>
.review-page {
  width: 1053px;
  padding: 0 0 24px;
  margin: 0 0 102px;

  &__header {
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
      line-height: 20px;
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

    left: 50rem;
    bottom: 9rem;
  }
}
</style>