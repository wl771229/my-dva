/**
 * Created by Administrator on 2019/7/2.
 */
import  React from 'react';

import {Router,Route,NavLink,Redirect,Switch} from 'dva/router';
//
// const Home = () => <h1>你好</h1>;
import Home from '../components/Home'
import My from '../components/My'


let fn = function ({history,app}) {
  return(
    <Router history={history}>
      <React.Fragment>
        <Switch>
          <Route path='/' exact  component={Home} />
          <Route path='/my'  component={My} />
        </Switch>
      </React.Fragment>


    </Router>
  )
};

export default fn

