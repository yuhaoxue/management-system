<template>
  <div>
    <div class="m-logo">LOGO</div>
    <el-menu
      :default-active="$route.path"
      router
      class="m-menu"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(firstItem, firstIndex) in menuList">
        <el-submenu
          v-if="firstItem.children"
          :index="'first' + firstIndex"
          :key="firstIndex"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ firstItem.name }}</span>
          </template>
          <el-menu-item
            v-for="secondItem in firstItem.children"
            :index="secondItem.path"
            :key="secondItem.path"
          >
            {{ secondItem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="firstItem.path" :key="firstIndex">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ firstItem.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePath: "",
      menuList: [
        {
          id: 1,
          name: "菜单一",
          icon: "",
          children: [
            {
              id: 2,
              name: "菜单一-1",
              path: "/menuFirst"
            },
            {
              id: 3,
              name: "菜单一-2",
              path: "/menuSecond"
            }
          ]
        },
        {
          id: 4,
          name: "菜单二",
          icon: "",
          path: "/menuthird"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.m-logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #ccc;
  color: #000;
}
.m-menu {
  border-right: none;
  text-align: left;
}
</style>
