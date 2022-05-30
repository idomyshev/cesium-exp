import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import { ROUTES } from "@/settings/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME,
    name: "home",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Cesium Demo";
  });
});

export default router;
