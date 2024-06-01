<template>
  <div :class="cnReview('')">
    <div :class="cnReview('')">

    </div>
  </div>
</template>

<script setup>
import {cnReview} from "./review-page.const.js"
import { computed } from "vue";
import { useRoute } from "vue-router";
import { gradeModel } from "../main-page/main-page.model.js";

const modelGrade = gradeModel();
const route = useRoute();
const grade = computed(() => route.query.grade || modelGrade.grade);
console.log(grade.value)
</script>

<style lang="scss" scoped>
.review-page {

}
</style>