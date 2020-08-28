export default {
  path: "/menuSecond",
  name: "menuSecond",
  component: () =>
    import(
      /* webpackChunkName: "menuSecond" */ "@/views/menuSecond/menuSecond.vue"
    )
};
