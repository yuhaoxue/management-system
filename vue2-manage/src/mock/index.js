const Mock = require("mockjs");

Mock.setup({
  timeout: "200-600"
});

let configArr = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context(".", true, /\.js$/);
files.keys().forEach(key => {
  if (key === "./index.js") return;
  configArr = configArr.concat(files(key).default);
});

// 注册所有mock服务
configArr.forEach(item => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split("|");
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
