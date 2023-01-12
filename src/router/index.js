import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
      {
        path: "/about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/user",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/UserView.vue"),
      },
      {
        path: "/mall",
        component: () =>
          import(/* webpackChunkName: "mall" */ "../views/MallView.vue"),
      },
      {
        path: "/page1",
        component: () =>
          import(/* webpackChunkName: "page1" */ "../views/PageOneView.vue"),
      },
      {
        path: "/page2",
        component: () =>
          import(/* webpackChunkName: "page2" */ "../views/PageTwoView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
