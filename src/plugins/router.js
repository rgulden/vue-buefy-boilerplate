import Vue from "vue";
import VueRouter from "vue-router"

import landingPage from "../components/Home"

const routes = [
    {
        component: landingPage,
        path: "/"
    }
]

Vue.use(VueRouter);
const router = new VueRouter({mode: "history", routes});

export default router;