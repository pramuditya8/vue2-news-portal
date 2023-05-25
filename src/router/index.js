import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsDetailsView from "../views/NewsDetailsView.vue";
import NewsEditView from "../views/NewsEditView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home2",
    component: HomeView,
  },
  {
    path: "/news/:slug/",
    name: "news",
    component: NewsDetailsView,
  },
  {
    path: "/news/edit/:slug/",
    name: "newsEdit",
    component: NewsEditView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
