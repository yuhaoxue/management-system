export default {
  path: "/menuFirst",
  name: "MenuFirst",
  component: () =>
    import(
      /* webpackChunkName: "menuFirst" */ "@/views/menuFirst/menuFirst.vue"
    )
};
