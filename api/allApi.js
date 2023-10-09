import axios from "axios";

/**
 * 请求列表所有数据
 */
async function getAll() {
  return await axios.get("/list");
}

/**
 * 删除指定的一行
 * @param {string} id
 * @returns array
 */
async function deleteRow(id) {
  return await axios({
    method: "delete",
    url: "/del",
    params: {
      id: id, // 在这里替换为你的实际参数值
    },
    data: {
      id,
    },
  });
}

/**
 * 编辑行
 * @param {object} rowInfo 行的信息
 */
async function editRow(rowInfo) {
  return await axios({
    method: "patch",
    url: "/edit",
    params: {
      id: rowInfo.id,
    },
    data: {
      ...rowInfo,
    },
  });
}
export default {
  getAll,
  deleteRow,
  editRow,
};
