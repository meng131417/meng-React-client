/*
 封装axios的ajax模块
 返回值是promise对象
 */

import axios from 'axios';

export default function ajax(url,data,type = 'GET'){
  let queryString = '';
  if(data){
    Object.keys(data).forEach(key => {
      //获取属性值
      const value = data[key];
      queryString += key + '=' + value + '&';
    })
    //去掉多余&
    queryString = queryString.substring(0, queryString.length-1);
  }
  if(type.toUpperCase() === 'GET'){
    url += '?' + queryString;
    return axios.get(url);
  }else{
    return axios.post(url, queryString, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}