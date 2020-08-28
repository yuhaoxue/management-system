<template>
  <div class="m-layout">
    <el-container class="m-layout-container">
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <header-bar></header-bar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <footer-bar></footer-bar>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/headerBar";
import Footer from "./components/footerBar";
import Side from "./components/sideBar";

export default {
  components: {
    "header-bar": Header,
    "footer-bar": Footer,
    "side-bar": Side
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.m-layout,
.m-layout-container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #000;
  color: #fff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
