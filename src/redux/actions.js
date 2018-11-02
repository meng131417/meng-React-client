/**
 * Created by meng on 2018/11/2.
 */
/*
action creators模块：用来创建action对象的工厂函数模块
- 同步action creator： 返回值是action对象
- 异步action creator： 返回值是一个回调函数
*/

import {AUTH_SUCCESS,ERR_MSG} from './action-types';
import {reqRegister} from '../api';

//同步action   注册成功   action-types有几个值，actions中就有几个同步action
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});
//同步action  注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});


//注册的异步action
export const register = data => {
  //表单验证  同步方式
  const {username,password,rePassword,type} = data;
  if(!username){
    return errMsg({username, password, msg: '请输入用户名'})
  }else if(!password){
    return errMsg({username, password, msg: '请输入密码'})
  }else if(password !== rePassword){
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'})
  }else if(!type){
    return errMsg({username, password, msg: '请选择账号类型'})
  }
  //异步的方法
  return dispatch => {
    //发送ajax
    reqRegister(data)
      .then( res => {
        //请求成功
        const result = res.data;
        if(result.code === 0){
          //注册成功
          dispatch(authSuccess(result.data));
        }else{
          //注册失败
          dispatch(errMsg({msg: result.msg, username: data.username, type: data.type}));
        }

      })
      .catch(err => {
        dispatch(errMsg( {msg: '网络不稳定，请重新试试', username: data.username, type: data.type}));
      })
  }


}