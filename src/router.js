import {createRouter, createWebHashHistory} from "vue-router";
import main from "./pages/main-page/main.vue"


const routes = [
    {path: '/', component: main},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})