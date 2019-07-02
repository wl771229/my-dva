import React,{Component}  from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';


class Home extends Component{


  add(){
    this.props.dispatch(routerRedux.push({
      pathname: '/my'
    }))
    // this.props.dispatch({
    //   type: 'index/addNum',
    //   payload: {
    //     num:3
    //   },
    //
    // })
  }
  render(){
    return (
      <div>
        Home
        <h1> {this.props.num}</h1>
        <button onClick={this.add.bind(this)}>点击</button>
      </div>
    );
  }

}



export default connect((state) => {
  return state.index;
})(Home);
