import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 优雅地引入路由
const subRoutesList = [];
function importAllChildren(r) {
  r.keys().forEach(key => subRoutesList.push(r(key).default));
}
importAllChildren(require.context(".", true, /\.route\.js/));

const routes = [
  {
    path: "",
    redirect: "/login",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/layout.vue"),
    children: [...subRoutesList]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
