/**
 * Created by Administrator on 2019/7/3.
 */
import { routerRedux } from 'dva/router';
export default  {
  namespace: 'login',
  state: {
    isLogin:false
  },

  effects: {
    *Login({ payload }, { select,call, put }) {



      //这里执行ajax，判断登录的code返回的是多少  ，
     // if(code !== 200){
     //   return '密码或账号错误'
     // }

      yield put({ type: 'register' ,payload:{isLogin:true}});
      // 跳转页面
      yield put(routerRedux.push('/home'))

    },
  },

  reducers: {
    register(state, {payload}) {

      return {
        isLogin:payload.isLogin
      };
    },
  },

};
