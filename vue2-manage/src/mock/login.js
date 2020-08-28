import Mock from "mockjs";

export default {
  "post|manage/login": option => {
    let params = JSON.parse(option.body);
    return {
      status: 200,
      message: "登录成功！",
      data: {
        userName: params.userName,
        userId: Mock.Random.natural(1, 100),
        token: Mock.Random.string(10)
      }
    };
  }
};
