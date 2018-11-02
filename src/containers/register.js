/**
 * Created by meng on 2018/11/2.
 */
/*
 注册容器组件
 */

import {connect} from 'react-redux';
import Register from '../components/register';
import {register} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)