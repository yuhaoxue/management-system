<template>
  <div class="m-login">
    <div class="m-form">
      <h3 class="text-center">管理系统</h3>
      <br />
      <el-form ref="login" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            @click="handleLogin('login')"
            style="width: 100%;"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { postRequest, getRequest } from "@/api/api.js";
import url from "@/api/apiUrl.js";

export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          postRequest(url.login, this.form).then(res => {
            let result = res.data;
            if (result.status == 200) {
              this.$message(result.message);
              this.setUserInfo(result.data);
              this.$router.push("/menuFirst");
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.m-login {
  background: #ccc;
  height: 100%;
  display: flex;
  .m-form {
    background: #fff;
    padding: 20px;
    display: inline-block;
    border-radius: 4px;
    margin: auto;
  }
}
</style>
