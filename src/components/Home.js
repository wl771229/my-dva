import React,{Component}  from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

class Home extends Component{


  add(){
    // this.props.dispatch(routerRedux.push({
    //   pathname: '/my'
    // }))
    this.props.dispatch({
      type: 'index/addNum',
      payload: {
        num:3
      },

    })
  }
  render(){
    return (
      <div>
        <h1>{this.props.isLogin?'欢迎你':'残忍拒绝'}</h1>
        <h1> {this.props.num}</h1>
        <button onClick={this.add.bind(this)}>点击</button>
      </div>
    );
  }

}



export default connect((state) => {
  return {
    num:state.index.num,
    isLogin:state.login.isLogin,
  };
})(Home);
