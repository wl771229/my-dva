/**
 * Created by Administrator on 2019/7/4.
 */
// 封装一个axios的实例
import Axios from 'axios';
import { serverHost,port } from '../config';
// 创建一个新的实例
let r = Axios.create({
  baseURL:`${serverHost}`
});

let request = function (url='',options={}) {
    return r({
      url,
      method:'get', // method先给一个get请求
      ...options, // options中有method就会覆盖
      xhrFields: { withCredentials: true }

    });

}



export default request;
