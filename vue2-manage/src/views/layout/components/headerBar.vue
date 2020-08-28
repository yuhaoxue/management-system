<template>
  <div class="m-head">
    <div class="m-head-right">
      <el-dropdown trigger="click" @command="handleSelectCountry">
        <span class="el-dropdown-link">
          {{ currentCountry.name
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in countryList"
            :key="index"
            :command="item"
            >{{ item.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryList: [
        { id: 1, name: "中文" },
        { id: 2, name: "English" },
        { id: 3, name: "日语" }
      ],
      currentCountry: { id: 1, name: "中文" }
    };
  },
  methods: {
    handleSelectCountry(val) {
      this.currentCountry = val;
      this.$bus.$emit("changeCountry", this.currentCountry);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-head {
  padding: 0 20px;
}
.m-head-right {
  float: right;
}
.el-dropdown {
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background: #e6f2f2;
  }
  .el-dropdown-link {
    display: inline-block;
    line-height: 60px;
  }
}
</style>
