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
      <div :class="cnMain('grade-review')">
        <form :class="cnMain('grade-list')">
          <div :class="cnMain('grade-list_object')" v-for="rating in ratingsPartOne" :key="rating">
            <input @click="access(rating)" :class="cnMain('grade-list_input')" type="radio" :id="rating" :value="rating"
                   v-model="grade">
            <label :class="cnMain('grade-list_item')" :for="rating">{{ rating }}</label>
          </div>
        </form>
        <form :class="cnMain('grade-list')">
          <div :class="cnMain('grade-list_object')" v-for="rating in ratingsPartTwo" :key="rating">
            <input @click="access(rating)" :class="cnMain('grade-list_input')" type="radio" :id="rating" :value="rating"
                   v-model="grade">
            <label :class="cnMain('grade-list_item')" :for="rating">{{ rating }}</label>
          </div>
        </form>
      </div>
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
const ratingsPartOne = [0, 1, 2, 3, 4];
const ratingsPartTwo = [5, 6, 7, 8, 9]

const modelGrade = gradeModel();
const question1 = localStorage.getItem('question1');
const question2 = localStorage.getItem('question2');
const question3 = localStorage.getItem('question3');
const question4 = localStorage.getItem('question4');
const question5 = localStorage.getItem('question5');
const question6 = localStorage.getItem('question6');

if (question6 != null) {
  const grade = localStorage.getItem('grade')
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

function access(rating) {
  grade.value = rating;
  modelGrade.init(grade.value);
  localStorage.setItem('grade', grade.value)

  router.push({path: "/review", query: {grade: grade.value}});
}
</script>

<style lang="scss" scoped>
@import "../../../public/scss/media_mixin.scss";

.main-page {
  @include _1250 {

  }

  @include _1024 {
    width: 100% !important;
    margin: 21px auto !important;
  }

  @include _768 {

  }

  @include _665 {
    width: 100% !important;
    margin: 21px auto !important;

    &__banner {
      height: 150px !important;
    }

    &__grade {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 22px 0 0;

      &-label {
        font-size: 22px !important;
        font-weight: 700;
        line-height: 35px;
      }

      &-description {
        width: 343px !important;

        font-size: 12px !important;
        font-weight: 400;
        line-height: 18px !important;

        margin: 14px 16px !important;

        text-align: center;
      }

      &-review {
        display: flex;
        flex-direction: column;
      }

      &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 220px !important;
        height: 40px;

        &:first-child {
          margin: 0 0 10px !important;
        }

        &_input {
          display: none;

          &:checked ~ label {
            background: rgb(49, 60, 75);
          }
        }

        &_item {
          padding: 10.5px 15.07px;

          margin: 0 14.44px 0 0;

          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          &:last-child {
            margin: 0;
          }
        }
      }

      &-grading {
        width: 343px !important;
        height: 20px;

        margin: 8px 0 0;

        &_text {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          &:first-child {
            margin: 0 0 0 32px;
          }

          &:last-child {
            margin: 0 32px 0 0;
          }
        }
      }
    }
  }

  @include _375 {
    width: 100% !important;
    margin: 21px auto !important;

    &__banner {
      height: 150px !important;
    }

    &__grade {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 22px 0 0;

      &-label {
        font-size: 22px !important;
        font-weight: 700;
        line-height: 35px;
      }

      &-description {
        width: 303px !important;

        font-size: 12px !important;
        font-weight: 400;
        line-height: 18px !important;

        margin: 14px 16px !important;

        text-align: center;
      }

      &-review {
        display: flex;
        flex-direction: column;
      }

      &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 220px !important;
        height: 40px;

        &:first-child {
          margin: 0 0 10px !important;
        }

        &_input {
          display: none;

          &:checked ~ label {
            background: rgb(49, 60, 75);
          }
        }

        &_item {
          padding: 10.5px 15.07px;

          margin: 0 14.44px 0 0;

          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          &:last-child {
            margin: 0;
          }
        }
      }

      &-grading {
        width: 343px !important;
        height: 20px;

        margin: 8px 0 0;

        &_text {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          &:first-child {
            margin: 0 0 0 32px;
          }

          &:last-child {
            margin: 0 32px 0 0;
          }
        }
      }
    }
  }

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

    &-review {
      display: flex;
      justify-content: center;
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 265px;
      height: 40px;

      &:first-child {
        margin: 0 14.44px 0 0;
      }

      &_object {

      }

      &_input {
        display: none;

        &:checked ~ label {
          background: rgb(49, 60, 75);
        }
      }

      &_item {
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