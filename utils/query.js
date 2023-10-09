export function parseURLParams(url) {
  const params = {};
  const search = url.split("?")[1]; // 获取查询字符串部分

  if (search) {
    const paramArray = search.split("&");

    for (const param of paramArray) {
      const [key, value] = param.split("=");
      params[key] = value;
    }
  }

  return params;
}
