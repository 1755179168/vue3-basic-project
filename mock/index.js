import Mock from "mockjs";
import { parseURLParams } from "../utils/query";

// 内存模拟数据
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push({
    id: Mock.mock("@id"),
    name: Mock.mock("@cname"),
    place: Mock.mock("@county(true)"),
  });
}
export default [
  {
    url: "/list",
    method: "get",
    response: () => {
      return arr;
    },
  },
  {
    url: "/del/:id",
    method: "delete",
    response: (req) => {
      console.log(req);

      req.query = {};
      req.query.id = parseURLParams(req.url).id;
      const index = arr.findIndex((item) => item.id === req.query.id);
      if (index > -1) {
        arr.splice(index, 1);
        return { success: true };
      } else {
        return { success: false };
      }
    },
  },
  {
    url: "/edit/:id",
    method: "patch",
    response: (req) => {
      req.query = {};
      req.query.id = parseURLParams(req.url).id;
      const item = arr.find((item) => item.id === req.query.id);
      if (item) {
        const info = JSON.parse(req.body);
        item.name = info.name;
        item.place = info.place;
        return { success: true };
      } else {
        return { success: false };
      }
    },
  },
];
