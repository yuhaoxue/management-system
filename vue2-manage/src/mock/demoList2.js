import Mock from "mockjs";

const Random = Mock.Random;

let demoList = [];

for (let i = 0; i < 10; i++) {
  demoList.push({
    date: Random.date(),
    name: Random.cname(),
    province: Random.province(),
    city: Random.city(),
    address: Random.county(true),
    zip: Random.zip()
  });
}

export default {
  "post|menuSecond/query": option => {
    return {
      status: 200,
      message: "success",
      data: demoList,
      count: 50
    };
  }
};
