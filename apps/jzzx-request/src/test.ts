import request from './index'
import axios from 'axios'
request.get({ url: 'home/multidata' }).then((res) => {
  console.log(res.data.banner)
})
// axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//   console.log(res.data.data.banner.nextPage);
// });

// console.log(request.instance.defaults.baseURL);

// import req from "./axios/ppp";

// req.get("/home/multidata").then((res) => {
//   console.log(res);
// });
