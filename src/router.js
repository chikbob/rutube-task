import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import main from "./pages/main-page/main-page.vue"
import review from "./pages/review-page/review-page.vue"
import complete from "./pages/complete-page/complete-page.vue"
import again from "./pages/again-page/again-page.vue"


const routes = [
    {path: '/', component: main},
    {path: '/review', component: review},
    {path: '/complete', component: complete},
    {path: '/again', component: again}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})