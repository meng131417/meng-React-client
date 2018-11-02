/**
 * Created by meng on 2018/11/2.
 */
/*
 发送请求模块
 */

import ajax from './ajax';

//请求登录的函数
export const reqLogin = data => ajax('/login',data,'POST');
//请求注册的函数
export const reqRegister = data => ajax('/register',data, 'POST');