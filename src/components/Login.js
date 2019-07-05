/**
 * Created by Administrator on 2019/7/3.
 */
import React, { Component } from 'react'
import { connect } from 'dva';
import request from '../utils/ajax.js';
class Login extends Component {

    constructor(){
        super()
        this.state ={
          account:'',
          password:''
        }

    }
    componentDidMount(){
    request('banner',{

    }).then((res) =>{


    })

    }
  login(e){
    e.preventDefault();
    let {account,password} = this.state;

    this.props.dispatch({
      type:'login/Login',
      payload:{
        account,
        password
      }
    })
  }
    render() {
      let {account,password} = this.state;
        return (
            <div >
              <form onSubmit={e =>this.login(e)}>
                <input name="account" type="text" value={account} onChange={e =>this.setState({account:e.target.value})} />
                <input name="password" type="password" value={password} onChange={e =>this.setState({password:e.target.value})} />
                <button type="submit">登录</button>
              </form>
            </div>
        );
    }
}

export default connect((state) =>{
  return {
    isLogin:state.login.isLogin
  }

})(Login);
