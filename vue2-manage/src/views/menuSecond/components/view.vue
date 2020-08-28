<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="日期">
        <span>{{ viewData.date }}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>{{ viewData.name }}</span>
      </el-form-item>
      <el-form-item label="地址">
        <span>{{ viewData.address }}</span>
      </el-form-item>
      <el-form-item label="邮编">
        <span>{{ viewData.zip }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["viewData"],
  data() {
    return {};
  },
  created() {
    console.log(this.viewData);
  }
};
</script>

<style lang="scss" scoped></style>
