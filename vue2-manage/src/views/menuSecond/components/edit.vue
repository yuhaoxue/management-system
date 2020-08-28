<template>
  <div>
    <el-form ref="form" :model="editForm" label-width="80px">
      <el-form-item label="日期">
        <span>{{ editForm.date }}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="editForm.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="editForm.address" placeholder="地址"></el-input>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="editForm.zip" placeholder="邮编"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  inject: ["editData"],
  data() {
    return {};
  },
  computed: {
    editForm() {
      return this.editData();
    }
  },
  watch: {
    editForm: {
      handler(newVal, oldVal) {
        this.$emit("editChange", newVal);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
