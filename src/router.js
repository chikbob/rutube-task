import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import main from "./pages/main-page/main-page.vue"
import review from "./pages/review-page/review-page.vue"


const routes = [
    {path: '/', component: main},
    {path: '/review', component: review}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})