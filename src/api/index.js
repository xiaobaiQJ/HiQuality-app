import axios from 'axios'



/*axios.defaults.timeout = 100000;*/
//使用axios.post要设置此响应头，否则后台无法获取数据
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  'Cache-Control': 'no-cache',
  "Pragma": "no-cache"

}

export {
  axios
}
