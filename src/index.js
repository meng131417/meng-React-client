/**
 * Created by meng on 2018/11/2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import store from './redux/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route component={Main}/>
        </Switch>
      </HashRouter>
    </Provider>
  ),document.getElementById('root'));
