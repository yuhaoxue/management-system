export default {
  path: "/menuThird",
  name: "menuThird",
  component: () =>
    import(
      /* webpackChunkName: "menuThird" */ "@/views/menuThird/menuThird.vue"
    )
};
