import { createApp } from "vue";
import Mock from "mockjs";
import aipConfig from "../mock/index";

// console.log(aipConfig);
for (const apiItem of aipConfig) {
  //循环配置拦截
  if (apiItem.url !== "/list") {
    // const reg = /\/\w{1,}/;
    // const url = reg.exec(apiItem.url)[0];
    // const newUrl = new RegExp(`${url}\?id=[a-zA-Z0-9]{18}`);
    if (apiItem.url.includes("/del")) {
      Mock.mock(/\/del\?id=[a-zA-Z0-9]{18}/, apiItem.method, apiItem.response);
    } else {
      Mock.mock(/\/edit\?id=[a-zA-Z0-9]{18}/, apiItem.method, apiItem.response);
    }
  } else {
    Mock.mock(apiItem.url, apiItem.method, apiItem.response);
  }
}

// 导入 ElementPlus 和 样式文件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
const app = createApp(App);

// 使用 ElementPlus
app.use(ElementPlus);

app.mount("#app");
