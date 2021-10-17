import axios from "axios";

const instance = axios.create({
  baseURL: 'https://l8-upgrade-apis.herokuapp.com/api',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') || '' },
  timeout: 10000
});


instance.interceptors.request.use(
    function (config) {
      // if (localStorage.token) {
      //     config.headers['X-XSRF-TOKEN'] = localStorage.token
      // }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
);


instance.interceptors.response.use(
    function (res) {

      if (res.status === 200) {
        if (res.data.success) return res;
        return res;
      }

      return res;
    },
    function (err) {
      if (err.response){
        switch (err.response.status) {
          case 404:
            console.log("你要找的頁面不存在")
            break
          case 500:
            console.log("程式發生問題")
            break
          default:
            console.log(err.message)
        }
      }
      if (!window.navigator.onLine) {
        alert("網路出了點問題，請重新連線後重整網頁");
        return;
      }
      return Promise.reject(err);
    }
);


export default function(method, url, data = null, config) {
  method = method.toLowerCase();
  switch (method) {
    case "post":
      return instance.post(url, data, config);
    case "get":
      return instance.get(url, { params: data });
    case "delete":
      return instance.delete(url, { params: data });
    case "put":
      return instance.put(url, data);
    case "patch":
      return instance.patch(url, data);
    default:
      console.log(`未知的 method: ${method}`);
      return false;
  }
}