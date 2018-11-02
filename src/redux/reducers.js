/**
 * Created by meng on 2018/11/2.
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG} from './action-types';
import {getRedirectPath} from '../utils';

//初始化状态（今后reducer函数要管理的状态）
let initUserState = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
}
function user(preState = initUserState, action){
  switch(action.type){
    case AUTH_SUCCESS:
      return {username: action.data.username,
        type: action.data.type,
        msg: '',
        redirectTo: getRedirectPath(action.data.type,action.data.header)}
    case ERR_MSG:
      return {...action.data}
    default:
      return preState;
  }
}


export default combineReducers({
  user
})